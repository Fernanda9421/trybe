import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {

  constructor(private bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }

  public async createBook(book: IBook): Promise<IBook> {
    const newBook = await this.bookModel.create(book);
    return newBook;
  }

  public async getBookById(id:string): Promise<IBook | null> {
    const book = await this.bookModel.findOne({ _id: id });
    return book;
  }

  public async editBook(id:string, bookData:object): Promise<IBook | null> {
    const updateBook = await this.bookModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      { new: true }, // mostra o documento atualizado na requisição
    );

    return updateBook;
  }

  public async deleteBook(id:string):Promise<IBook | null> {
    const deleteBook = await this.bookModel.findOneAndDelete({ _id: id });
    return deleteBook;
  }
  
}

export default BookModel;