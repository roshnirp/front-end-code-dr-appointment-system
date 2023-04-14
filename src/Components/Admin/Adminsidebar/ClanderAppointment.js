import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
export default function TrainingCalendar() {
    const localizer = momentLocalizer(moment)
    const [data, setMyData] = useState([])

 

    const getTrainings = async() => {
      try {
   
      const res = await axios.get("/api/v1/user/book-appointment");
			setMyData(res.data.data);
			// console.log(res.data.data)
      const eventList = data.map((list) => 
      <tr key={list.id}>
       <td>{list.date}</td>
        <td>{list.time}</td>
        <td>{list.patientName}</td>
      </tr>
    );
    console.log('events:', eventList);
  


      } 
    
      
      catch (error) {
        console.log(error.message);
      }
    
    }

    useEffect(() => {
      getTrainings();
    },[]);

 
    const events= data.map((appointment)=>{
      return {
        id: appointment.id,
        title: appointment.patientName,
        start: new Date(appointment.date),
        time: appointment.time
      
      }
    })


    return (
      <div class="page-wrapper">
             <Calendar 
        localizer={localizer}
        events={events}
        startAccessor='start'
        endAccessor='end'
        views={['month', 'day', 'week']}
        style={{height: 450}}
        />
      </div>
    )
}



// import React from 'react'
// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import { useState } from "react";
// import { Calendar, dateFnsLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { useEffect } from 'react'
// import axios from 'axios';

// const locales = {
//     "en-US": require("date-fns/locale/en-US"),
// };
// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales,
// });

// const events = [
   
// ];

// const ClanderAppointment = () => {
//      const [myData, setMyData] = useState([]);
//     const [isError, setIsError] = useState("");
//     const [newEvent, setNewEvent] = useState({ title: "", start: "", time: "" });
//     const [allEvents, setAllEvents] = useState(events);

//     const getApiData = async () => {

//         try {
//             const res = await axios.get("/api/v1/user/book-appointment");
//             //setMyData(res.data.data);
//         setMyData(
            
//                events.unshift({ 
//                 title:(res.data.patientName),
//                 allDay:true,
//                 start:new Date(res.data.date),
//                 time:(res.data.time) })
//              );
//       //   const allEvents = [
//       //     {
//       //         title:(res.data.patientName),
//       //         allDay:true,
//       //         start:new Date(res.data.date),
//       //          time:(res.data.time)
           
//       //     }
//       // ];
//       const events = myData.map((list) => 
//         <tr key={list.id}>
//           <td>{list.patientName}</td>
//           <td>{list.title}</td>
//           <td>{list.start}</td>
//           <td>{list.time}</td>
          
//         </tr>
//       );
//       console.log('events:', events);

 
  
//       setMyData([...allEvents, events]);
//       console.log([...allEvents, events]);
            

//         }

//         catch (error) {
//             setIsError(error.message);
//         }

//     };
  

//     useEffect(() => {
//         getApiData();

//     }, []);

//     function handleAddEvent() {

//         for (let i = 0; i < allEvents.length; i++) {

//             const d1 = new Date(allEvents[i].date);
//             const d2 = new Date(newEvent.time);
//             const d3 = new Date(allEvents[i].end);
//             const d4 = new Date(newEvent.end);
//             if (
//                 ((d1 <= d2)  && (d2 <= d3) ) || ( (d1  <= d4) &&
//                       (d4 <= d3) 

//                 )
//             ) {
//                 alert("CLASH");
//                 break;
//             }

//         }

  
       
//     }

//     return (
//         <div className="App page-wrapper">
//             {isError !== "" && <h2>{isError}</h2>}
//             <h1>Calendar</h1>
//             <h2>Book Your Appointment</h2>
//             <div className='datepicker'>
//                 <textarea type="textarea" placeholder="Add details" style={{ width: "40%", marginRight: "10px" }} value={newEvent.patientName} onChange={(e) => setNewEvent({ ...newEvent, patientName: e.target.value })} />
//                 <DatePicker placeholderText="Start Date" className='datepikers' selected={newEvent.date} onChange={(date) => setNewEvent({ ...newEvent, date })} />
//                 <DatePicker placeholderText="End Date" className='datepikers' selected={newEvent.date} onChange={(end) => setNewEvent({ ...newEvent, end })} />
//                 <button className='btnmargin' onClick={handleAddEvent}>
//                     Add in the Calender
//                 </button>
//                 {
//                 myData.map((post) => {
//                     const { title, allDay, start, time} = post;
//                     return (
//                         <tr key={title}>
//                         <td>{allDay}</td>
//                         <td>{start}</td>
//                         <td>{time}</td>
//                         </tr>
//                     );
//                 })
//             }
//             </div>

//             <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />

      
//             </div>
//      )
// }

// export default ClanderAppointment



