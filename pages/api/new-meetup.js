import { insertOne } from '../../shared/util/db';

// /api/new-meetup

async function handler(req, res) {
    const requests = {
        POST: async () => {
            const data = req.body;

            const { title, image, address, description } = data;

            await insertOne('meetups', { title, image, address, description });

            res.status(201).json({ message: 'Meetup inserted' });
        }

    }

    const callback = requests[req.method] || null;

    if (!callback) {
        return res.status(400).json({ error: 'Method not allowed for this endpoint' });
    }

    return requests[req.method]();
}

export default handler;