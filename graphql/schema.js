const { buildSchema } = require('graphql')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        customer(id: String!): Customer
        customers(city: String): [Customer]
    },
    type Customer {
        customerID: String
        contactName: String
        city: String
    }
`)

module.exports = schema