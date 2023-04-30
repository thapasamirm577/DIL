import express, { Router } from "express";
const router = Router();
import fs from "fs";
import path from "path";
import url from "url";

router.get("/createJson", (req, res) => {
    res.render("createJson");
});
router.post("/createJson", async (req, res) => {
    const fileName = req.body.filename;
    const data = req.body;
    const jsonData = JSON.stringify([data]);
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    if (
        !fs.existsSync(
            path.join(__dirname, "../../..", "public", "uploads", "data")
        )
    ) {
        fs.mkdirSync(
            path.join(__dirname, "../../..", "public", "uploads", "data")
        );
    }
    if (
        req.body.filename.trim() === "" ||
        req.body.filename === undefined ||
        req.body.filename === null
    ) {
        res.send("Please enter a valid file name");
        return;
    }
    const fileToBeInsertedPath = path.join(
        __dirname,
        "../../..",
        "public",
        "uploads",
        "data",
        `${fileName}.json`
    );

    fs.writeFile(`${fileToBeInsertedPath}`, jsonData, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data written to file");
        }
    });
    res.send("Data written to file");
});

router.get("/getJson/:name", async (req, res) => {
    const fileName = req.body.fileName;
    const name = req.params.name;
    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const fileToBeInsertedPath = path.join(
        __dirname,
        "../../..",
        "public",
        "uploads",
        "data",
        `${name}.json`
    );
    fs.readFile(`${fileToBeInsertedPath}`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data read from file");
            // res.send(data);
            const obj = JSON.parse(data);
            // console.log(obj);
            res.render("viewJson", { data: obj });
        }
    });
});

router.get("/updateJson", (req, res) => {
    res.render("updateJson");
});

router.post("/updateJson", async (req, res) => {
    const fileName = req.body.filename;
    const formData = req.body;
    console.log(formData);
    res.send("Data written to file");

    const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
    const fileToBeInsertedPath = path.join(
        __dirname,
        "../../..",
        "public",
        "uploads",
        "data",
        `${fileName}.json`
    );

    fs.readFile(`${fileToBeInsertedPath}`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Data read from file");
            // res.send(data);
            const obj = JSON.parse(data);
            console.log(obj);

            obj.push(formData);
            console.log(obj);
            const jsonData = JSON.stringify(obj);
            fs.writeFile(`${fileToBeInsertedPath}`, jsonData, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Data updated to file");
                }
            });
        }
    });
});

export default router;
