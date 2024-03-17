const { MongoClient } = require("mongodb")

const protocol = "mongodb+srv"

const credentials = "cpa:comp206"

const host = "cluster0.mdyzuie.mongodb.net"

const url = `${protocol}://${credentials}@${host}`

console.log(url)

const mongoClient = new MongoClient(url)

module.exports = mongoClient
