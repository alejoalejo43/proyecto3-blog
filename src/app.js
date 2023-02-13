const express = require("express");
const postsRourter = require("./posts/posts.router");
const db = require("./utils/database");
const app = express();

app.use(express.json());
db.authenticate()
    .then(() => {
        console.log("The database credentials are correct");
    })
    .catch((err) => {
        console.log(err);
    });
db.sync()
    .then(() => {
        console.log("Database has been updated");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.json({
        message: "server ok",
    });
});

app.use("/api/v1", postsRourter);

app.listen(9000, () => {
    console.log("Server started at: http://localhost:9000");
});
module.exports = app;
