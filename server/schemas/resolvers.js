const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        findMe: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('savedBooks')
            }
            throw new AuthenticationError('You need to be logged in!')
        }
    }, 
    Mutation: {

    }
}