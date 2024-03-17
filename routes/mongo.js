const express = require("express")
const router = express.Router()

const mongoClient = require("../config/db.js")

// localhost:3000/db/
router.get("/", (req, res) => {
    res.send("<h1>Ayush Hasmukhbhai Patel</h1>")
})

// TODO Add a "/collections" route handler that lists the collections available in the sample_mflix database
router.get("/collections",async (req,res) => {
    let connection = await mongoClient.connect();
    let db = await connection.db("sample_mflix");
    let collection = await db.listCollections().toArray();

    let data = {
        collections: collection,
    }

    res.render("collections",data);
    //res.json(data);
});

// TODO Adding the "/movies " route handler
    router.get("/movies",async (req,res) => {
        let connection = await mongoClient.connect();
        let criteria = {};
        if(req.query.genres) criteria.genres = req.query.genres;
        let db = await connection.db("sample_mflix");
        let moviesCollection = db.collection("movies");

        let movie = await moviesCollection.find(criteria).limit(50).toArray();
        let data = {
            movies: movie,
        }
        res.render("movies",data);
        //res.json(data);
    });

    router.get("/years",async (req,res) => {
        let connection = await mongoClient.connect();
        let criteria = {};
        if(req.query.years) criteria.year = req.query.years;
        let db = await connection.db("sample_mflix");
        let moviesCollection = db.collection("movies");

        let year = await moviesCollection.find(criteria).limit(50).toArray();
        let data = {
             years: year,
        }
        res.render("years",data);
        //res.json(data);
    });

    router.get("/languages",async (req,res) => {
        let connection = await mongoClient.connect();
        let criteria = {};
        if(req.query.languages) criteria.language = req.query.languages;
        let db = await connection.db("sample_mflix");
        let moviesCollection = db.collection("movies");

        let language = await moviesCollection.find(criteria).limit(50).toArray();
        let data = {
            languages: language,
        }
        res.render("languages",data);
        //res.json(data);
    });

    
    module.exports = router
