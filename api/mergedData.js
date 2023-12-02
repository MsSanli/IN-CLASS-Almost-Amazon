// for merged promises
import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';
// TODO: Get data for viewBook
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleBook(firebaseKey).then((bookObject) => { // returns single book object
    getSingleAuthor(bookObject.author_id) // we nest this promise so that we can use the book object
      .then((authorObject) => resolve({ ...bookObject, authorObject }));
    // ... represents all the key value pairs for books and then will create new obj
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});

export default getBookDetails;
