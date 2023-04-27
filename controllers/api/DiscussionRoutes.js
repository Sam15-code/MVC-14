const router = require('express').Router();
const { Discussion } = require('../../../../Week 20-React/UofM-VIRT-FSF-PT-11-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project/Develop/models');
const withAuth = require('../../Utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newDiscussion = await Discussion.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log(newDiscussion)
        res.status(400).json(err);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const newDiscussion = await Discussion.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!newDiscussion) {
            res.status(404).json({ message: 'No discussion found with this id!' });
            return;
        }
        res.status(200).json(newDiscussion);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;