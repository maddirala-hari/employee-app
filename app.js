const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Employee App");
});

app.get("/employees", (req, res) => {
    res.json([
        { id: 1, name: "Hari", role: "DevOps" },
        { id: 2, name: "Ravi", role: "Developer" }
    ]);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
