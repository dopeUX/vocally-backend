const { app, router } = require("./connection");
const createUser = require('./routes/userCreate.route');

router.use('/api/', createUser);

app.use(router);