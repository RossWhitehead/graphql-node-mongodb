const { buildSchema } = require('graphql')

// GraphQL schema
const schema = buildSchema(`
    type Query {
        customer(id: String!): CustomerType
        customers(city: String): [CustomerType]
    }

    type CustomerType {
        id: String!
        name: String!
        city: String!
        hello: String!
    }
`)

function CustomerType(id, name, city) {
    this.id = id
    this.name = name
    this.city = city
    this.hello = 'world'
}

module.exports.schema = schema
module.exports.CustomerType = CustomerType