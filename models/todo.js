const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const todoSchema = new Schema({
	name:{
		type: String,
		require: true
	},
	done: {
		type:Boolean,
		default:false
	}

})

module.exports = mongoose.model('Todo', todoSchema)



