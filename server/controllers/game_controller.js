import Game from '../models/game_model.js';
import ApiUtils from '../utils/api_utils.js';
import { asyncErrorHandler } from '../utils/async_error_handler.js';

const createGame = asyncErrorHandler(async (req, res, next) => {
    const game = await Game.create(req.body);
    return res.status(201).json(game);
});

const findGames = asyncErrorHandler(async (req, res, next) => {
    const apiUtils = new ApiUtils(Game.find(), req.query)
        .filter();
    let games = await apiUtils.query;
    return res.status(200).json(games);
});

const findGameById = asyncErrorHandler(async (req, res, next) => {
    const game = await Game.findById(req.params.id);

    if (!game) {
        return next(new Error('Game not found!'));
    }

    return res.status(200).json(game);

});

const updateGameById = asyncErrorHandler(async (req, res, next) => {
    const updatedGame = await Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedGame) {
        return next(new Error('Game not found!'));
    }

    return res.status(200).json(updatedGame);
});

const deleteGameById = asyncErrorHandler(async (req, res, next) => {
    const deletedGame = await Game.findByIdAndDelete(req.params.id);

    if (!deletedGame) {
        return next(new Error('Game not found!'));
    }

    return res.status(200).json(deletedGame);
});

const getAllPublishedGames = asyncErrorHandler(async (req, res, next) => {
    req.query.is_published = true;
    next();
});


export { createGame, findGames as findGames, findGameById, updateGameById, deleteGameById, getAllPublishedGames };