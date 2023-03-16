import React from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 2, 1),
        end: new Date(2023, 2, 2),
    },
    {
        title: "Vacation",
        start: new Date(2023, 1, 7),
        end: new Date(2023, 1, 10),
    },
    {
        title: "Conference",
        start: new Date(2023, 1, 20),
        end: new Date(2023, 1, 23),
    },
];


const ClanderAppointment = () => {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        
        for (let i=0; i<allEvents.length; i++){

            const d1 = new Date (allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);
            if (
                ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
                  (d4 <= d3) )
                )
              {   
                  alert("CLASH"); 
                  break;
               }
      
          }
          
          
          setAllEvents([...allEvents, newEvent]);
      }
  
  return (
    <div className="App page-wrapper">
    <h1>Calendar</h1>
    <h2>Book Your Appointment</h2>
    <div className='datepicker'>
        <textarea type="textarea" placeholder="Add details" style={{ width: "40%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
        <DatePicker placeholderText="Start Date" className='datepikers'  selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date" className='datepikers' selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
        <button className='btnmargin' onClick={handleAddEvent}>
            Add in the Calender
        </button>
    </div>
    <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px"}} />
</div>
  )
}

export default ClanderAppointment
