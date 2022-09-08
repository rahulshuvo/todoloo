const express = require('express')
const {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
} = require('../controller/noteController')
const router = express.Router()

router.route('/').get(getNotes).post(setNote)
router.route('/:id').put(updateNote).delete(deleteNote)

module.exports = router
