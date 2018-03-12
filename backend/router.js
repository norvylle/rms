const controller = require('./controller');

module.exports = (router) => {
	router.get('/viewall',controller.viewall);
	router.get('/search',controller.search);
	router.get('/insert',controller.insert);
	return router;
}