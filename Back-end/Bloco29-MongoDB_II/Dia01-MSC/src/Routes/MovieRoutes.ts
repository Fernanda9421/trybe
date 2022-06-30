import { Router } from 'express';
import MovieController from '../controllers/MovieController';

const movieController = new MovieController();
const movieRoutes = Router();

const moviesId = '/movies/:id';

movieRoutes.get('/movies', movieController.getMovies);
movieRoutes.post('/movies', movieController.createMovie);
movieRoutes.get(moviesId, movieController.getMovieById);
movieRoutes.put(moviesId, movieController.updateMovie);
movieRoutes.delete(moviesId, movieController.deleteMovie);

export default movieRoutes;
