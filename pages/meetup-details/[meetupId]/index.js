import {useRouter} from 'next/router';
import { Fragment } from 'react';
import MeetupDetail from '../../../components/meetups/MeetupDetail';

function MeetupDetails(){
const router= useRouter();
console.log(router.query.meetupId);

return(
  <MeetupDetail image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" 
  title="A First meetup" address ="5 Rue vincent 57000 Metz" description="The meetup description"
  />
) 

}

export default MeetupDetails;