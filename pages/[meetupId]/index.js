import { Fragment } from 'react';
import Head from 'next/head'

import MeetupDetail from '../../components/meetups/MeetupDetail';

import { find, findOne } from '../../shared/util/db';

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>

    );
}

export async function getStaticPaths() {

    const meetups = await find('meetups','_id');

    return {
        fallback: false,
        paths: meetups.map(m => ({
            params: {
                meetupId: m._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const { params } = context;

    // fetch data from single meetup

    const selectedMeetup = await findOne('meetups', { _id: params.meetupId });

    return {
        props: {
            meetupData: {
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
            }
        }
    }
}

export default MeetupDetails;