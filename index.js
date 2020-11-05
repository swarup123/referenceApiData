const app = require("./config/express");
const port = 3000;
/**
 * It starts the server on port
 */
function startServer() {
  // listen to requests
  app.listen(port, () => {
    console.log(`server started on port ${port} `);
  });
}

startServer();

/**
 * Exports express
 * @public
 */
module.exports = app;
