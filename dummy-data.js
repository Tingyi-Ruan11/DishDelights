// events.js

const fs = require('fs');
const path = require('path');

// const EVENTS_FILE_PATH = path.join(__dirname, 'events.json');
const EVENTS_FILE_PATH = path.join('dummy-events.json');
function getEventsFromFile() {
  try {
    const eventsData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
    return JSON.parse(eventsData);
  } catch (error) {
    console.error('Error reading events file:', error);
    return [];
  }
}

function saveEventsToFile(events) {
  try {
    fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(events, null, 2));
  } catch (error) {
    console.error('Error saving events to file:', error);
  }
}

export function getFeaturedEvents() {
  const events = getEventsFromFile();
  return events.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return getEventsFromFile();
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const events = getEventsFromFile();

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
}

export function getEventById(id) {
  const events = getEventsFromFile();
  return events.find((event) => event.id === id);
}

export function addEvent(newEvent) {
  const events = getEventsFromFile();
  events.push(newEvent);
  saveEventsToFile(events);
  return events;
}


// const DUMMY_EVENTS = [
//   {
//     id: 'e1',
//     title: 'Programming for everyone',
//     description:
//       'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
//     location: 'Somestreet 25, 12345 San Somewhereo',
//     date: '2021-05-12',
//     image: 'images/coding-event.jpg',
//     isFeatured: false,
//   },
//   {
//     id: 'e2',
//     title: 'Networking for introverts',
//     description:
//       "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
//     location: 'New Wall Street 5, 98765 New Work',
//     date: '2021-05-30',
//     image: 'images/introvert-event.jpg',
//     isFeatured: true,
//   },
//   {
//     id: 'e3',
//     title: 'Networking for extroverts',
//     description:
//       'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
//     location: 'My Street 12, 10115 Broke City',
//     date: '2022-04-10',
//     image: 'images/extrovert-event.jpg',
//     isFeatured: true,
//   },
// ];

// export function getFeaturedEvents() {
//   return DUMMY_EVENTS.filter((event) => event.isFeatured);
// }

// export function getAllEvents() {
//   return DUMMY_EVENTS;
// }

// export function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = DUMMY_EVENTS.filter((event) => {
//     const eventDate = new Date(event.date);
//     return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
//   });

//   return filteredEvents;
// }

// export function getEventById(id) {
//   return DUMMY_EVENTS.find((event) => event.id === id);
// }
