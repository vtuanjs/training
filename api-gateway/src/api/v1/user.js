const router = require('express').Router();
const apiHelper = require('../../api-helper');
const userManager = require('../../grpc/service-creator').create('UserManager');

router.post('/users', async (req, res) => {
  try {
    let user = await userManager.request('create', req.body);
    apiHelper.reply(res, user);
  } catch (error) {
    apiHelper.replyFailure(res, error);
  }
});

module.exports = router;