import express from 'express';
import * as games from '../controllers/game_controller.js';

const router = express.Router();

router.route('/published')
    .get(games.getAllPublishedGames, games.findGames)

router.route('/')
    .post(games.createGame)
    .get(games.findGames);

router.route('/:id')
    .get(games.findGameById)
    .patch(games.updateGameById)
    .delete(games.deleteGameById);

export default router;