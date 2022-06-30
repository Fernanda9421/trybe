import MovieModel from "../models/MovieModel";
import { IMovie } from '../schemas/MovieSchema';

class MovieService {

  constructor(private movieModel = new MovieModel()) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getMovies();
    return movies;
  }

  public async createMovie(movie: IMovie):Promise<IMovie> {
    const newMovie = await this.movieModel.createMovie(movie);
    return newMovie;
  }

  public async getMovieById(id:string):Promise<IMovie | null> {
    const movie = await this.movieModel.getMovieById(id);
    return movie;
  }

  public async updateMovie(id:string, movieData:object):Promise<IMovie | null> {
    const movie = await this.movieModel.updateMovie(id, movieData);
    return movie;
  }

  public async deleteMovie(id:string):Promise<IMovie | null> {
    const movie = await this.movieModel.deleteMovie(id);
    return movie;
  }

}

export default MovieService;
