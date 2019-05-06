const router = require('express').Router()
const gameController = require('../controllers/game.controller')

router.get('/games', gameController.getAll)
router.get('/games/:gameId', gameController.getById)
router.post('/games', gameController.addNewGame)

module.exports = router
