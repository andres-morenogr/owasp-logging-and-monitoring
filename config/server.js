/**
 * NPM required packages
 */
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const winston = require('./winston');
/**
 * Routes to the different resources
 */
const routes = require('../app/routes');

/**
 * Load environment variables from .env file
 */
dotenv.config();

/**
 * Importing configuration variables
 */
const {
  port,
  morganMode,
} = require('./config');

/**
 * Sets up the server configuration to an Express app
 * @param {*} app Basic Express app
 */
const server = (app) => {
  app.disable('x-powered-by');
  app.set('port', port);
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(morganMode, { stream: winston.stream }));
  app.use(cors());
  app.use('/', routes);

};

module.exports = server;
