import fs from 'fs';
import path from 'path';

const EVENTS_FILE_PATH = path.join('dummy-comments.json');

export async function connectDatabase() {
  // For file storage, there's no database connection to establish
  return null;
}

export async function insertDocument(_client, _collection, document) {
  const events = await getAllDocuments();
  events.push(document);
  saveEventsToFile(events);
  return { insertedId: document.id }; // Mocking MongoDB's insertOne result
}

export async function getAllDocuments() {
  try {
    const eventsData = fs.readFileSync(EVENTS_FILE_PATH, 'utf-8');
    console.log(eventsData)
    return JSON.parse(eventsData);
  } catch (error) {
    console.error('Error reading events file:', error);
    return [];
  }
}

// Function to save events data to file
function saveEventsToFile(events) {
  try {
    fs.writeFileSync(EVENTS_FILE_PATH, JSON.stringify(events, null, 2));
  } catch (error) {
    console.error('Error saving events to file:', error);
  }
}


// import { MongoClient } from 'mongodb';

// export async function connectDatabase() {
//   const client = await MongoClient.connect(
//     'mongodb+srv://maximilian:8ZO3ycZqJ23kWBQx@cluster0.ntrwp.mongodb.net/events?retryWrites=true&w=majority'
//   );

//   return client;
// }

// export async function insertDocument(client, collection, document) {
//   const db = client.db();

//   const result = await db.collection(collection).insertOne(document);

//   return result;
// }

// export async function getAllDocuments(client, collection, sort) {
//   const db = client.db();

//   const documents = await db
//     .collection(collection)
//     .find()
//     .sort(sort)
//     .toArray();

//   return documents;
// }