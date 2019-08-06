// routes/todo.js
const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')
const { middleHandler } = require('../verification/logger.js')



// 新增一筆 Todo 頁面
router.get('/new', middleHandler, (req, res) => {
	console.log('get new item')
	return res.render('new')
})

// 顯示一筆 Todo 的詳細內容
router.get('/:id', middleHandler, (req, res) => {
	Todo.findOne( (err, todo) => {
		if (err) return console.error(err)
		return res.render('detail', { todo: todo })
	})
})
// 新增一筆  Todo
router.post('/', middleHandler, (req, res) => {
	const todo = Todo()
	todo.save(err => {
		if (err) return console.error(err)
		return res.redirect('/')
	})
})
// 修改 Todo 頁面
router.get('/:id/edit', middleHandler, (req, res) => {
	Todo.findOne((err, todo) => {
		return res.render('edit', { todo: todo })
	})
})

// 修改 Todo
router.put('/:id', middleHandler, (req, res) => {
	Todo.findOne((err, todo) => {
		if (err) return console.error(err)
		if (req.body.done === 'on') {
			todo.done = true
		} else {
			todo.done = false
		}
		todo.save(err => {
			if (err) return console.error(err)
			return res.redirect(`/todos/${req.params.id}`)
		})
	})
})
// 刪除 Todo
router.delete('/:id/delete', middleHandler, (req, res) => {
	Todo.findOne((err, todo) => {
		if (err) return console.error(err)
		todo.remove(err => {
			if (err) return console.error(err)
			return res.redirect('/')
		})
	})
})
module.exports = router