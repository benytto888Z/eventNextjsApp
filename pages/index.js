import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id:'m1',
    title:'Nextjs conference',
    image:'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    address:'44 road san andreas NY',
    description:'Speak about Nextjs'
  },

    {
    id:'m2',
    title:'Symfony conference',
    image:'https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    address:'London 2555',
    description:'Speak about symfony new version'
  }
]

function HomePage(){
  return <MeetupList meetups={DUMMY_MEETUPS}/>
  
}

export default HomePage;