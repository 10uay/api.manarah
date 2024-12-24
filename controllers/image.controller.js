export const uploadImg = async (req, res) => {
  try {
    if (req.files.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No files selected!" });
    }

    const filePaths = req.files.map((file) => `uploads/${file.filename}`);
    res.json({
      message: "Files uploaded successfully!",
      files: filePaths,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image (controller)" });
  }
};
