import { Fragment } from 'react';
import Head from 'next/head';

import MeetupList from '../components/meetups/MeetupList';

import { find } from '../shared/util/db';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of highly active React meetups!" />
            </Head>
            <MeetupList meetups={props.meetups} /> 
        </Fragment>  
    ) 
}

export async function getStaticProps() {
    // fetch data from an API

    const meetups = await find('meetups');

    return {
        props: {
            meetups: meetups.map(m => ( { 
                title: m.title,
                address: m.address,
                image: m.image,
                id: m._id.toString()
            }))
        },
        revalidate: 10 // seconds
    };
}

// export async function getServerSideProps(context) {
//     const { req, res } = context;

//     // fecth data from an API
//     return {
//         props: {
//             meetups:  DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage;