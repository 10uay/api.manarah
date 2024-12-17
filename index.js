import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/post.route.js";
import solutionsRoutes from "./routes/solutions.route.js";
import servicesRoutes from "./routes/services.route.js";
import systemsRoutes from "./routes/systems.route.js";
import portfolioRoutes from "./routes/portfolio.route.js";
import langRoutes from "./routes/lang.routes.js";
import imageRoutes from "./routes/image.route.js";
import cookieParser from "cookie-parser";
// import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
// const prodOrigins = process.env.OUTER_URL;
// const allowedOrigins = process.env.NODE_ENV === "online" ? prodOrigins : "http://localhost:5173";

app.use(
  cors({
    origin: [
      // "https://www.dropbox.com",
      "http://localhost:5173",
      "https://m.almajdacademic.com",
      "https://manarah-al-abtkat.vercel.app",
      "https://manarah-al-abtkar.vercel.app",
      "http://89.116.51.14",
      "http://89.116.51.14:80",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("MongoDB connection error:", error));

// const __dirname = path.resolve();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// const clientId = "15z1nc9oak0qkto";
// const clientSecret = "a9zkadmxbzerpu3";
// const redirectUri = "http://localhost:3000/oauth2/callback";

// app.use("/", (req, res) => res.json("Server is working..."));
app.use("/api/post", postRoutes);
app.use("/api/solutions", solutionsRoutes);
app.use("/api/services", servicesRoutes);
app.use("/api/systems", systemsRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/locales", langRoutes);
app.use("/api/images", imageRoutes);
// app.get("/start-dropbox-auth", (req, res) => {
//   const authorizationUrl = `https://www.dropbox.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
//   res.redirect(authorizationUrl);
// });
// app.get("/oauth2/callback", async (req, res) => {
//   const code = req.query.code;

//   const response = await fetch(`https://api.dropboxapi.com/1/oauth2/token`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization:
//         "Basic " +
//         Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
//     },
//     body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}`,
//   });

//   const data = await response.json();

//   // Store the access token and refresh token securely
//   const accessToken = data.access_token;
//   const refreshToken = data.refresh_token;

//   if (accessToken) res.json({ accessToken });
// });

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
