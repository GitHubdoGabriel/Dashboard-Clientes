module.exports.load = (app) => {
    
    const client = require('../routes/clientRoutes')
    
    app.use('/client', client)
};

