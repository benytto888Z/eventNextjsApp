// our-domain.com/new-meetup

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage(){

 function addMeetupHandler(inputMeetupData){
     console.log(inputMeetupData);
 }   


 return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
}

export default NewMeetupPage;