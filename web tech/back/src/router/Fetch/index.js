import { Router } from "express";
import fetch from "node-fetch";
const router = Router();

router.get("/", async (req, res) => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");

    const data = await users.json();
    // console.log(data);
    res.render("user", { data });
});

export default router;
