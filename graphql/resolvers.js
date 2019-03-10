const Customer = require('../models/customer')

async function getCustomer(args) { 
    const id = args.id;
    const filter = {'CustomerID':id}
    const result = await Customer.find(filter) 
    return result
}

async function getCustomers(args) {
    const city = args.city;
    const filter = {'city':city} 
    const result = await Customer.find(filter) 
    return result
}

const root = {
    customer: getCustomer,
    customers: getCustomers
}

module.exports = root