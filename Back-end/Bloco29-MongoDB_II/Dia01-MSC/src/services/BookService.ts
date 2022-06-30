import BookModel from '../models/BookModel';
import { IBook } from '../schemas/BookSchema';

class BookService {
  constructor(private bookModel = new BookModel()) { }

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.getBooks();
    return books;
  }

  public async createBook(book: IBook): Promise<IBook> {
    const newBook = await this.bookModel.createBook(book);
    return newBook;
  }

  public async getBookById(id: string): Promise<IBook | null> {
    const book = await this.bookModel.getBookById(id);
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const data = await this.bookModel.editBook(id, bookData);
    return data;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const data = await this.bookModel.deleteBook(id);
    return data;
  }
}

export default BookService;