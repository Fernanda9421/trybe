import { model as createModel } from 'mongoose';
import { MovieSchema, IMovie } from '../schemas/MovieSchema';

class MovieModel {

  constructor(private movieModel = createModel<IMovie>('movies', MovieSchema)) {}

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.find();
    return movies;
  }

  public async createMovie(movie: IMovie):Promise<IMovie> {
    const newMovie = await this.movieModel.create(movie);
    return newMovie;
  }

  public async getMovieById(id:string):Promise<IMovie | null> {
    const movie = await this.movieModel.findOne({ _id: id });
    return movie;
  }

  public async updateMovie(id:string, movieData:object):Promise<IMovie | null> {
    const movie = await this.movieModel.findOneAndUpdate(
      { _id: id },
      { ...movieData },
      { new: true },
    );

    return movie;
  }

  public async deleteMovie(id:string):Promise<IMovie | null> {
    const movie = await this.movieModel.findOneAndDelete({ _id: id });
    return movie;
  }

}

export default MovieModel;
