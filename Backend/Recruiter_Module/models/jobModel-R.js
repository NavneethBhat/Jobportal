const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: {
      type: String,
      required: true,
      validate: (value) => value.trim() !== "",
    },
    tags: [{ type: String }],
  },
  {
    collection: "jobs",
    versionKey: false,
  }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

module.exports = Job;
