import express from 'express'
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from "./users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
console.log("mongodb connected");
const app = express();

app.use(cors());
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);