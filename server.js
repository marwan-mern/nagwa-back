import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
// import path from 'path';


// import TestData from "./TestData.json"

const TestData = {
    "wordList": [
        {
            "id": 1,
            "word": "slowly",
            "pos": "adverb"
        },
        {
            "id": 2,
            "word": "ride",
            "pos": "verb"
        },
        {
            "id": 3,
            "word": "bus",
            "pos": "noun"
        },
        {
            "id": 4,
            "word": "commute",
            "pos": "verb"
        },
        {
            "id": 5,
            "word": "emissions",
            "pos": "noun"
        },
        {
            "id": 6,
            "word": "walk",
            "pos": "verb"
        },
        {
            "id": 7,
            "word": "fast",
            "pos": "adjective"
        },
        {
            "id": 8,
            "word": "car",
            "pos": "noun"
        },
        {
            "id": 9,
            "word": "crowded",
            "pos": "adjective"
        },
        {
            "id": 10,
            "word": "arrival",
            "pos": "noun"
        },
        {
            "id": 11,
            "word": "emit",
            "pos": "verb"
        },
        {
            "id": 12,
            "word": "independent",
            "pos": "adjective"
        },
        {
            "id": 13,
            "word": "convenient",
            "pos": "adjective"
        },
        {
            "id": 14,
            "word": "lane",
            "pos": "noun"
        },
        {
            "id": 15,
            "word": "heavily",
            "pos": "adverb"
        }
    ],
    "scoresList": [20,90,100,50,10,50,60,0,60,10,90,30,100,30,20,90,40,20,10,60,50,100,50,80,50,80,60,80,10,40]
}

const app = express();
dotenv.config()


app.use(bodyParser.json({ limit: `30mb`, extended: true }));
app.use(bodyParser.urlencoded({ limit: `30mb`, extended: true }));

app.use(cors());

app.get(`/Data`, async (req, res) => {
    try {
        //Send The Json Data
        res.status(200).json(TestData)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
})

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     })
// }


const PORT = process.env.PORT || 6030;
app.listen(PORT, () => { console.log(`Server Runs On Port : ${PORT}`) })

