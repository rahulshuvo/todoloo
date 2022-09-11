const asyncHandler = require('express-async-handler')

const Note = require('../models/noteModel')

// @desc Get notes
// @route Get /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find()
  res.status(200).json(notes)
})

// @desc Set note
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400)
    throw new Error('please add title')
  }
  if (!req.body.note) {
    res.status(400)
    throw new Error('please add note')
  }
  const note = await Note.create({
    title: req.body.title,
    note: req.body.note,
  })
  res.status(200).json(note)
})

// @desc Update note
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new:true
  })
  res.status(200).json(updatedNote)
})

// @desc DELETE note
// @route Delete /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id)

  if(!note){
    res.status(400)
    throw new Error('Note not found')
  }

  await Note.findByIdAndDelete(req.params.id)
  // await Note.remove() //this also work
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
}
