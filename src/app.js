const express = require('express');
const notemodel = require('./models/note.model')

const app = express();
app.use(express.json())

//notes

app.post("/notes", async (req, res) => {

    const data = req.body
    await notemodel.create({
        title: data.title,
        description: data.description
    })

    res.status(201).json({
        message: "Note created successfully"
    })
})

app.get("/notes", async (req, res) => {

    const notes = await notemodel.find({

        title: "test_title"
    })
    res.status(200).json({
        message: "Notes fetched successfully",
        notes: notes
    })

});

app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const desccription = req.body.description
    await notemodel.findOneAndUpdate({ _id: id }, { description: desccription })

    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app