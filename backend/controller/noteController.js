const asyncHandler = require('express-async-handler')

// @desc Get notes
// @route Get /api/notes
// @access Private
const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: 'get Notes' })
})

// @desc Set note
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add text')
  }
  console.log(req.body)
  res.status(200).json({ massage: 'create note' })
})

// @desc Update note
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: `update notes ${req.params.id}` })
})

// @desc DELETE note
// @route Delete /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  res.status(200).json({ massage: `delete notes ${req.params.id}` })
})

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
}
