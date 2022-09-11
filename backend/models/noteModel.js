const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
    },
    note: {
      type: String,
      required: [true, 'please add the note'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Note', noteSchema)
