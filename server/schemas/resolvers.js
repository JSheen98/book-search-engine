const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

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
        createUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password })
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Invalid credentials')
            }

            // call isCorrectPassword method from User model to compare
            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Invalid credentials')
            }

            const token = signToken(user)

            return { token, user }
        },
        saveBook: async (parent, { authors, description, title, bookId, image, link }, context) => {
            if (context.user) {
                const userSaveBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: { authors, description, title, bookId, image, link } } },
                    { new: true }
                )
                return userSaveBook
            }
            throw new AuthenticationError('Must be logged in, in order to save books!')
        },
        deleteBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const userDeleteBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: bookId } },
                    { new: true }
                )
                return userDeleteBook
            }
            throw new AuthenticationError('Must be logged in to remove saved books!')
        }
    }
}

module.exports = resolvers