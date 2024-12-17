import mongoose from "mongoose";

const systemSchema = new mongoose.Schema(
  {
    classification: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    title_in_nav: {
      type: String,
      required: true,
    },
    icon_in_nav: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    data: {
      systems_components: {
        M_Intro_One: {
          type: Boolean,
          required: true,
        },
        M_Intro_Two: {
          type: Boolean,
          required: true,
        },
        M_Intro_Four: {
          type: Boolean,
          required: true,
        },
        M_Steps: {
          type: Boolean,
          required: true,
        },
        M_Work_With: {
          type: Boolean,
          required: true,
        },
        M_Benefits: {
          type: Boolean,
          required: true,
        },
        M_Section_One: {
          type: Boolean,
          required: true,
        },
        M_Section_Two: {
          type: Boolean,
          required: true,
        },
        M_Slider: {
          type: Boolean,
          required: true,
        },
        M_Slider_Images: {
          type: Boolean,
          required: true,
        },
        M_Get_A_Service: {
          type: Boolean,
          required: true,
        },
      },
      M_Intro_One: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
        intro: {
          type: Boolean,
          required: false,
        },
        img: {
          type: String,
          required: false,
        },
      },
      M_Intro_Two: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
      },
      M_Intro_Four: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
        img: {
          type: String,
          required: false,
        },
      },
      M_Steps: [
        {
          title: {
            type: String,
            required: false,
          },
          para: {
            type: String,
            required: false,
          },
          steps: [
            {
              sentence: {
                type: String,
                required: false,
              },
            },
          ],
          img: {
            type: String,
            required: false,
          },
          dir: {
            type: Number,
            required: false,
          },
          whatsapp_button: { type: Boolean, required: false },
        },
      ],
      M_Benefits: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
        benefits: [
          {
            title: {
              type: String,
              required: false,
            },
            para: {
              type: String,
              required: false,
            },
          },
        ],
        img: {
          type: String,
          required: false,
        },
        icons: { type: Boolean, required: false },
      },
      M_Section_One: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
        services: [
          {
            title: {
              type: String,
              required: false,
            },
            para: {
              type: String,
              required: false,
            },
          },
        ],
        img: {
          type: String,
          required: false,
        },
      },
      M_Section_Two: [
        {
          title: {
            type: String,
            required: false,
          },
          infos: [
            {
              title: {
                type: String,
                required: false,
              },
              para: {
                type: String,
                required: false,
              },
              icon: {
                type: String,
                required: false,
              },
            },
          ],
          img: {
            type: String,
            required: false,
          },
          dir: {
            type: Boolean,
            required: false,
          },
        },
      ],
      M_Slider: {
        title: {
          type: String,
          required: false,
        },
        para: {
          type: String,
          required: false,
        },
        cards: [
          {
            title: {
              type: String,
              required: false,
            },
            para: {
              type: String,
              required: false,
            },
          },
        ],
        bg_color: {
          type: String,
          required: false,
        },
      },
      M_Slider_Images: {
        title: {
          type: String,
          required: false,
        },
        imgs: [
          {
            type: String,
            required: false,
          },
        ],
      },
      M_Get_A_Service: {
        title: {
          type: String,
          required: false,
        },
        img: {
          type: String,
          required: false,
        },
        whatsapp_button: {
          type: Boolean,
          required: false,
        },
      },
    },
  },
  { timestamps: true }
);

const System = mongoose.model("System", systemSchema);

export default System;
