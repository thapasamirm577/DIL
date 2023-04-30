import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import url from "url";
import EsewaRouter from "./src/router/esewa/index.js";
import FetchRouter from "./src/router/Fetch/index.js";
import JsonRouter from "./src/router/uploadJson/index.js";
import { connection } from "./db/config.js";

const app = express();
const port = 5001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.set(bodyParser.json());
app.set(bodyParser.urlencoded({ extended: true }));

// app.post("/", async (req, res) => {
//     console.log(req.body);
// });

app.use("/esewa", EsewaRouter);
app.use("/fetch", FetchRouter);
app.use("/json", JsonRouter);

app.get("/test", (req, res) => {
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    console.log(__dirname);
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connection();
});
