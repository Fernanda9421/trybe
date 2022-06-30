import { Router } from 'express';

import BookController from '../controllers/BookController';

const bookController = new BookController();
const bookRoutes = Router();

const booksId = '/books/:id';

bookRoutes.get('/books', bookController.getBooks);
bookRoutes.post('/books', bookController.create);
bookRoutes.put(booksId, bookController.updateBook);
bookRoutes.delete(booksId, bookController.deleteBook);
bookRoutes.get(booksId, bookController.getBookById);

export default bookRoutes;