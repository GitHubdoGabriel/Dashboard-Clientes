const clientsDB = require('../clients.mock')

exports.getAllClients = (req, res) => {   
    return res.status(200).json(clientsDB) 
}

exports.getById = (req, res) => {   
    const dataClients = clientsDB.filter(function(db) {
        return db._id == req.query.id
    })
    console.log(dataClients)
    return res.status(200).json(dataClients[0].enterprises) 
}

exports.getTotalsByCompany = (req, res) => {
    const dataClients = clientsDB.map((item) => {
        const totalRealties = item.enterprises.reduce((sum, enterprise) => sum + parseInt(enterprise.realties || 0), 0);
        return{
            _id: item._id,
            image_src: item.image_src,
            name: item.name,
            totalEnterprises: item.enterprises.length,
            totalRealties,
        }
    })
    return res.status(200).json(dataClients)
}