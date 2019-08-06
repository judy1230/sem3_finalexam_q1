module.exports = {
	middleHandler: (req, res, next) => {
		console.log(new Date() + ' ' + '|' + ' ' + req.method + ' ' + 'From' + ' ' + req.url)
		next()
	},
}