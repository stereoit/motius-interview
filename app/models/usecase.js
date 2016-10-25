var mongoose = require('mongoose')
  , Schema = mongoose.Schema;


var MilestoneSchema = new Schema({
  usecase: Number,
  name: String,
  name_de: String,
  name_en: String,
  start_date: String,
  end_date: String
});

var UsecaseSchema = new Schema({
  title: String,
  body: String,
  milestones: [MilestoneSchema]
});


module.exports = mongoose.model('Usecase', UsecaseSchema);
