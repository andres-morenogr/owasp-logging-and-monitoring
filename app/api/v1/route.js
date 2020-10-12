const { Router } = require('express');

const router = new Router();

/*
 * References to each resource routers
 */
const login = require('./components/login/route');

router.use('/login', login);

module.exports = router;
