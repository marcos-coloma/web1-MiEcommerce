const statsService = require('../../services/api/statsService');

const statsController = {
    index: (req, res) => {
        const stats = statsService.getStats();
        res.json(stats);
    }
};

module.exports = statsController;