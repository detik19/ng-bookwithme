
module.exports = (app) => {
    app.route('/api/rentals')
    .get(
        (req, res) => {
            res.json({'success': true});
        }
    );
}