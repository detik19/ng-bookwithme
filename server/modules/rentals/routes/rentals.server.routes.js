const rentals = require('../controllers/rentals.server.controller');

module.exports = (app) => {
    app.route('/api/rentals')
    .get(rentals.list)
    .post(rentals.create);
}