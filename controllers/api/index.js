const router = require('express').Router();
const userRoutes = require('./userRoutes');
const discussiontRoutes = require('./DiscussionRoutes');

router.use('/users', userRoutes);
router.use('/discussion', discussionRoutes);

module.exports = router;
