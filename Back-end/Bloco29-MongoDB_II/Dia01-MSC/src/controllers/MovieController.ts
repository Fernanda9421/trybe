import MovieService from "../services/MovieService";
import { Request, Response } from 'express';

class MovieController {

  constructor(private movieService = new MovieService()) {};

  internalError = 'Internal server error';

  notFound = 'Book not found';

  public getMovies = async (req:Request, res:Response):Promise<Response> => {
    try {
      const movies = await this.movieService.getMovies();

      return res.status(200).send(movies);
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }

  public createMovie = async (req:Request, res:Response):Promise<Response> => {
    try {
      const newMovie = await this.movieService.createMovie(req.body);

      return res.status(201).send(newMovie);
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }

  public getMovieById = async (req:Request, res:Response):Promise<Response> => {
    try {
      const { id } = req.params;
      const movie = await this.movieService.getMovieById(id);

      if (movie) {
        return res.status(200).send(movie);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }

  public updateMovie = async (req:Request, res:Response):Promise<Response> => {
    try {
      const { id } = req.params;
      const movie = await this.movieService.updateMovie(id, req.body);

      if(movie) {
        return res.status(200).send(movie);
      }
      return res.status(404).send({ message: this.notFound });
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }

  public deleteMovie = async (req:Request, res:Response):Promise<Response> => {
    try {
      const { id } = req.params;
      const movie = await this.movieService.deleteMovie(id);

      if(movie) {
        return res.status(200).send({ message: 'Successfully deleted' });
      }
      return res.status(404).send({ message: this.notFound });
    } catch (error: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  }
  
}

export default MovieController;
