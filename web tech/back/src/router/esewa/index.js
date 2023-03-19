import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    var path = "https://uat.esewa.com.np/epay/main";
    let date = new Date();
    var params = {
        amt: 100,
        psc: 0,
        pdc: 0,
        txAmt: 0,
        tAmt: 100,
        pid: `ee2c3ca1-${Math.floor(Math.random() * 100000)}-${date.getTime()}`,
        scd: "EPAYTEST",
        su: "http://merchant.com.np/page/esewa_payment_success",
        fu: "http://merchant.com.np/page/esewa_payment_failed",
    };
    try {
        const resData = await axios.post(path, params);
        res.status(200).json(resData.data);
    } catch (err) {
        console.log(err);
    }
});

export default router;
