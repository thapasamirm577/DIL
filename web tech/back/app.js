import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import EsewaRouter from "./src/router/esewa/index.js";
import FetchRouter from "./src/router/Fetch/index.js";

const app = express();
const port = 5001;

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set(bodyParser.json());
app.set(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {});

app.use("/esewa", EsewaRouter);
app.use("/fetch", FetchRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
