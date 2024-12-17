import { Dropbox } from "dropbox";

export const verifyDbx = (req, res, next) => {
  const accessToken = req.accessToken

  if (!accessToken) {
    return res.status(401).json({ error: "Not authorized" });
  }

  const dbx = new Dropbox({ accessToken });
  req.dbx = dbx;
  next();
};

