import Lang from "../models/lang.model.js";

export const getLang = async (req, res) => {
  try {
    // console.log(req.params);
    const { lng } = req.params;
    const translation = await Lang.findOne({ _id: "670d7bacd477fb076b5bc551" });
    if (translation && translation[lng]) {
      res.json(translation[lng].translation);
    } else {
      res.status(404).send({ message: "Language not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
};

export const uploadLang = async (req, res) => {
  const { lng } = req.params;
  const newTranslations = req.body.translation;
  // console.log(req.body.translation);
  // console.log(`New translations for ${lng}:`, newTranslations);

  try {
    const existingLang = await Lang.findById("670d7bacd477fb076b5bc551");

    if (!existingLang) {
      return res.status(404).json({ message: "Document not found" });
    }

    // Check if the language field exists
    if (!existingLang[lng]) {
      return res
        .status(400)
        .json({ message: `Language ${lng} not found in document` });
    }

    // Get existing translations
    let existingTranslations = existingLang[lng].translation;

    // Convert the Map to a plain JavaScript object if necessary
    if (existingTranslations instanceof Map) {
      existingTranslations = Object.fromEntries(existingTranslations);
    }

    // Ensure all new translations are strings
    const sanitizedNewTranslations = {};
    for (const key in newTranslations) {
      sanitizedNewTranslations[key] = String(newTranslations[key]);
    }

    // Merge new translations with existing ones
    const updatedTranslations = {
      ...existingTranslations,
      ...sanitizedNewTranslations,
    };

    // Update the document with merged translations
    const update = {
      $set: {
        [`${lng}.translation`]: updatedTranslations,
      },
    };

    const options = { new: true };

    const updatedLang = await Lang.findByIdAndUpdate(
      "670d7bacd477fb076b5bc551",
      update,
      options
    );

    if (!updatedLang) {
      return res.status(500).json({ message: "Failed to update translations" });
    }

    res.status(201).json(updatedLang);
  } catch (err) {
    console.error("Error updating translations:", err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

