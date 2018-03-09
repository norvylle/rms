const controller = require('./controller');

module.exports = (router) => {
	router.get('/viewall',controller.viewall);
	router.get('/search',controller.search);
	return router;
}