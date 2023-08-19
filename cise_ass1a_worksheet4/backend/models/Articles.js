const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: [String],
    required: true
  },
  source: {
    type: String
  },
  pubYear: {
    type: Number
  },
  doi: {
    type: String
  },
  summary: {
    type: String
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);