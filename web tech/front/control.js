var path = "https://uat.esewa.com.np/epay/main";
var params = {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed",
};

function submit() {
    try {
        fetch(path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    } catch (err) {
        console.log(err);
    }
}

let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
});
