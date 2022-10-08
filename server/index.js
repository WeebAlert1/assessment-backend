const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require("./controller")
const { postName } = require("./controller")
const { postGoal } = require('./controller')
const { getLucky } = require("./controller")

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/names", postName);

app.get("/api/goal", postGoal);

app.get("/api/lucky", getLucky);

app.listen(4000, () => console.log("Server running on 4000"));
