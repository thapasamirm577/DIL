const URL = "mongodb://localhost:27017";
const dbName = "test-db";
import mongoose from "mongoose";

export const connection = () => {
    mongoose
        .connect(`${URL}/${dbName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected!");
        })
        .catch((error) => {
            console.log("Could not connect to database:" + error);
        });
};
