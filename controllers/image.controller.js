import Image from "../models/image.model.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// import { Dropbox } from "dropbox";
import fs from "fs";

const __filename = fileURLToPath("file:///D:/Al-Manara/api/index.js");
const __dirname = dirname(__filename);


export const uploadImg = async (req, res) => {
  try {
    
    const file = req.file;
    const filePath = path.join(__dirname, "uploads", file.filename);

    // Upload file to Dropbox
    const result = await dbx.filesUpload({
      path: `/images/${file.filename}`,
      contents: fs.readFileSync(filePath),
      mode: "overwrite",
    });

    const thumbnailLink = await dbx.files.getThumbnail({
      path: filePath,
    });

    console.log(thumbnailLink);

    // Get the full URL of the uploaded image
    // console.log(result);
    const imageUrl = result.url;

    res.json({ imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error uploading image (controller)" });
  }
};



// const upload = async (file, path) => {
//   try {
//     // Read the content of the file from the local file system
//     const fileContent = fs.readFileSync(file.path, "utf8");
//     // console.log(fileContent);

//     if (fileContent) {
//       // Upload the file content to Dropbox at the specified path
//       const fileuploaded = await dbx.filesUpload({
//         path,
//         contents: fileContent,
//       });

//       // Return the response from the upload operation
//       return fileuploaded;
//     } else {
//       // Return false if there was no content in the file
//       return false;
//     }
//   } catch (error) {
//     // Log any errors that occur
//     console.error("Error:", error);
//   }
// };
