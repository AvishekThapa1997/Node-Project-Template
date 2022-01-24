import express from "express";
import __rootDirName from "./rootDirectory.js";
import * as pathUtils from "./utils/pathUtil.js";
const app = express();
app.set("view engine", "ejs");
app.set("views", pathUtils.mergePaths(__rootDirName, "views"));
app.use(express.static(pathUtils.mergePaths(__rootDirName, "..", "public")));
app.listen(process.env.PORT || 8000);
