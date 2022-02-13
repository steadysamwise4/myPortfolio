const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Contact {
        _id: ID
        contactName: String
        email: String
        message: String
    }
    type Query {
        contacts: [Contact]
    }
    type Mutation {
        addContact(contactName: String!, email: String!, message: String!): Contact
    }
`;

module.exports = typeDefs;