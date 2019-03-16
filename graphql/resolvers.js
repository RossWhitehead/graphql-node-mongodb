const Customer = require('../data/models/customer')
const CustomerType = require('./schema').CustomerType

async function getCustomer(args) { 
    const id = args.id;
    const filter = {'customerID':id}
    const result = await Customer.find(filter) 
    return new CustomerType(result[0].customerID, result[0].contactName, result[0].city) 
}

async function getCustomers(args) {
    const city = args.city;
    const filter = {'city':city} 
    const result = await Customer.find(filter) 
    return result.map(c => new CustomerType(c.customerID, c.contactName, c.city))
}

const root = {
    customer: getCustomer,
    customers: getCustomers
}

module.exports = root