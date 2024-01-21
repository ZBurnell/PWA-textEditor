import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Export function that allows new content to be stored in the database
export const putDb = async (content) => { 
  console.log('Content added to DB');
  const jateDB = await openDB('jate', 1);
  const trans = jateDB.transaction('jate', 'readwrite');
  const store = trans.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Content saved to database', result);
};

//Export function that gets all content stored in the database
export const getDb = async () => { 
  console.log('Content retrieved from DB');
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readonly');
  const store = trans.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('Content read from database', result);
  return result.value;
};

initdb();
