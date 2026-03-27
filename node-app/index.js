import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import 'dotenv/config';

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`)

const itemSchema = new mongoose.Schema({
    id: Number,
    task: String}
);
const todoCollection = mongoose.model('todoApi', itemSchema);


const api = express();

api.use(cors());
api.use(express.json());

let tasks = [
    {id: 1, task: "Task 1"}, 
    {id: 2, task: "Task 2"},
    {id: 3, task: "Task 3"},
    {id: 4, task: "Task 4"}
];

await todoCollection.create(tasks);


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

api.post("/tasks", async (req, res) => {
    const newTask = {
    id: Date.now(),
    task: req.body.task,
    };

    tasks.push(newTask);
    res.json(newTask);
    res.send(tasks);

    await todoCollection.create(tasks);
});

api.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid task id' });
  }

  tasks = tasks.filter((t) => t.id !== id);
});

api.delete("/tasks", (req, res) => {
    tasks = [];
});

api.listen(3000, () => {
    console.log("API running on port 3000");
});