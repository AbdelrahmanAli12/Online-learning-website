const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courses = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    instructor: {
      // type: Schema.Types.ObjectId,
      type: String,
      ref: "instructor",
      required: true,
    },
    totalHours: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 5,
    },
    price: {
      type: Number,
      required: true,
    },
    subtitles: [
      {
        name: {
          type: String,
          required: true,
          default: "",
        },
        description: {
          type: String,
          required: true,
          default: "",
        },
        video: {
          type: String,
          default: "",
          required: true,
        },
      },
    ],

    exercises: {
      type: Array,
      default: [],
    },

    summary: {
      type: String,
      required: [true, "Summary Required"],
      minLength: 5,
      maxLength: 100,
    },
    discount: {
      value: {
        type: Number,
        required: true,
        default: 0,
      },
      endDate: {
        type: String,
        required: true,
        default: "",
      },
    },
    image: {
      type: String,
      default: "",
    },
    prerequisite: {
      type: String,
      default: "",
    },
    views: {
      type: Number,
      default: 0,
    },
    review: {
      type: Array,
      default: [],
    },
    numberOfSubscribers: {
      type: Number,
      default: 0,
    },
    preview: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Courses = mongoose.model("courses", courses);
module.exports = Courses;
