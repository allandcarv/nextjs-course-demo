import { MongoClient, ObjectId } from 'mongodb';

const connection = async (collection) => {
    const client = new MongoClient('mongodb+srv://react-course:react-course-pass@cluster0.7s65w.mongodb.net/meetups?retryWrites=true&w=majority')

    await client.connect();

    const db = client.db();

    const conn = db.collection(collection);

    return { conn, client };
}

export const find = async (collection, property) => {
    const { conn, client } = await connection(collection);

    const params = property && ({ [property]: 1 } );

    const result = await conn.find({}, params).toArray();

    client.close();

    return result;
}

export const findOne = async (collection, filter) => {
    const { conn, client } = await connection(collection);

    const parsedFilter = Object.keys(filter).reduce((final, key) => {
        if (key === '_id') {
            final[key] = new ObjectId(filter[key]);
        } else {
            final[key] = filter[key]
        }

        return final;
    }, {});
    
    const result = await conn.findOne(parsedFilter);

    client.close();

    return result;
}

export const insertOne = async (collection, data) => {
    const { conn, client } = await connection(collection);

    const result = await conn.insertOne(data);

    client.close();

    return result;
}