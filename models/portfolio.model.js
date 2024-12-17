import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    classification: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
    main_img: {
      type: String,
      required: true,
    },
    downloads: {
      type: Number,
      required: false,
    },
    region: {
      name: {
        type: String,
        required: false,
      },
      flag: {
        type: String,
        required: false,
      },
    },
    platforms: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: true,
    },

    portfolio_hero: {
      secondary_title: {
        type: String,
        required: true,
      },
      secondary_para: {
        type: String,
        required: true,
      },
      secondary_img: {
        type: String,
        required: true,
      },
    },

    first_slider: {
      title: {
        type: String,
        required: true,
      },
      para: {
        type: String,
        required: false,
      },
      features: [
        {
          name: {
            type: String,
            required: false,
          },
          icon: {
            type: String,
            required: false,
          },
        },
      ],
      images: [
        {
          type: String,
          required: true,
        },
      ],
    },

    portfolio_section: {
      ratings: {
        type: Number,
        required: false,
      },
      found_in: {
        type: Number,
        required: false,
      },
    },

    second_slider: {
      title: {
        type: String,
        required: true,
      },
      para: {
        type: String,
        required: false,
      },
      features: [
        {
          name: {
            type: String,
            required: false,
          },
          icon: {
            type: String,
            required: false,
          },
        },
      ],
      images: [
        {
          type: String,
          required: true,
        },
      ],
    },

    technologies: {
      title: {
        type: String,
        required: true,
      },
      para: {
        type: String,
        required: false,
      },
      icons: [
        {
          type: String,
          required: true,
        },
      ],
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
