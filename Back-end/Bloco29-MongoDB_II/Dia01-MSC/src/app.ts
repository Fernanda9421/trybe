import express from 'express';
import bookRoutes from './Routes/BookRoutes';
import movieRoutes from './Routes/MovieRoutes';
import createConnection from './models/connection';

class App {
  public express: express.Application;


  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    createConnection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(bookRoutes);
    this.express.use(movieRoutes);
  }
}

export default App;