import {useState} from "react";
import  formatDate from "@fullcalendar/react";
import FullCalendar from "@fullcalendar/react";
//import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box, List, ListItem, ListItemText, Typography, useTheme} from "@mui/material";
import Header from "../../components/Header";
import {tokens} from "../../theme";


const Calendar = () =>{
 const theme = useTheme();
 const colors = tokens(theme.palette.mode);
 const [currentEvents, setcurrentEvents] = useState([]);
 
 const handleDateClick = (selected) =>{
   const title = prompt("Please enter a new title for your event")
   const calendarApi = selected.view.calendar;
   calendarApi.unselect();

   if(title){
    calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
    });
   }
 };

 const handleEventClick = (selected) => {
    if(window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)){
       selected.event.remove();
    }
 }

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="CALENDAR" subtitle="Full Calender Interactive Page"/>
            </Box>
            <Box display="flex" justifyContent="space-between">
                {/* Calender Sidebar */}
                <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
                    <Typography variant="h5">Event</Typography>
                    <List>
                        {currentEvents.map((event) =>{
                            <ListItem
                              key = {event.id}
                              sx = {{backgroundColor: colors.greenAccent[500], margin:"10px 0", borderRadius: "2px"}}
                            >
                                <ListItemText 
                                primary={event.title}
                                secondary={
                                    <Typography>
                                        {formatDate(event.startStr,{
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        }
                                            )}
                                    </Typography>
                                }
                                />
                            </ListItem>
                        })}
                    </List>

                </Box>

                <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                height="75vh"
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin
                ]}
                headerToolbar={{
                    left: "prev, next today",
                    center: "title",
                    right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
                }}
                initialView="dayGridMonth"
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick}
                eventClick={handleEventClick}
                eventsSet={(events) => setcurrentEvents(events)}
                // initialEvents={[
                // { id: "1234", title: "General Break Day", date: "2023-12-25", start: new Date()},
                // { id: "167", title: "Cross Over Night", date: "2023-12-31", start: new Date()},
                // ]}

                />

                </Box>
            </Box>
        </Box>
    )
}
export default Calendar;