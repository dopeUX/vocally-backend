const { app, router } = require("./connection");
const createUser = require('./routes/userCreate.route');

//test-api ---------
router.route('/').get(async(req, res)=>{
    res.send('hello, this is server side');
});

////////////

router.use('/api/', createUser);

app.use(router);