const express = require('express');
const router = express.Router();

const { createTodo } = require('../controllers/createTodo.js');
const { getTodo } = require('../controllers/getTodo.js');
const { deleteTodo }= require('../controllers/deleteTodo.js');
const { updateTodo } = require('../controllers/updateTodo.js');

router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.delete('/deleteTodo/:id',deleteTodo);
router.put('/updateTodo/:id',updateTodo);

module.exports = router;  