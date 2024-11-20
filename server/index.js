const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./models/todo");

const app = express();
//This way we can allow all the port to access the data
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

//END POINT OR API
app.post("/add", (req, res) => {
  const task = req.body.task;

  TodoModel.create({
    task: task,
  })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/get", (req, res) => {
  TodoModel.find()
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  // console.log(id);
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server running successfully");
});
