import https from "https";

export default async function fetch(url, id) {
    return new Promise((resolve, reject) => {
        let request = https.get(url, (response) => {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(
                    new Error(
                        `Failed to load page, status code: ${response.statusCode}`
                    )
                );
            }
            var body = "";
            response.on("data", (chunk) => {
                // console.log(chunk);
                body += chunk.toString();
            });

            response.on("end", () => {
                // console.log(body);
                if (id) {
                    let request = https.get(`${url}/${id}`, (response) => {
                        if (
                            response.statusCode < 200 ||
                            response.statusCode > 299
                        ) {
                            reject(
                                new Error(
                                    `Failed to load page, status code: ${response.statusCode}`
                                )
                            );
                        }
                        var body1 = "";
                        response.on("data", (chunk) => {
                            // console.log(chunk);
                            body1 += chunk.toString();
                        });
                        response.on("end", () => {
                            // console.log(body);
                            resolve(body1);
                        });
                    });
                    request.on("error", (error) => {
                        reject(
                            new Error(`Failed to load page: ${error.message}`)
                        );
                    });
                    request.end();
                } else {
                    resolve(body);
                }
                // resolve(body);
            });
        });
        request.on("error", (error) => {
            reject(new Error(`Failed to load page: ${error.message}`));
        });
        request.end();
    });
}

// Path: nodefetch\index.js
async function main() {
    try {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            1
        );
        const data = JSON.parse(res);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
main();
