const express = require('express');

const api = express();
api.use(express.json());

const tasks = ["Task 1", "Task 2", "Task 3"];

api.get("/", (req, res) => {
    res.send("My First API");
});

api.get("/tasks/", (req, res) => {
    res.send(tasks);
});

api.get("/tasks/:id", (req, res) => {
    const id = req.params.id;

    res.send(tasks[id]);
});

api.post("/tasks", (req, res) => {
    const task = req.body.task;
    tasks.push(task);

    res.send(`${task} succesfully added`);

});

api.listen(3000, () => {
    console.log("API running on port 3000");
});