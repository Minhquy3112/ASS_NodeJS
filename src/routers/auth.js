import express from "express";
import { getAll, signin, signup } from "../controllers/auth.js";


const routerAuth = express.Router();

routerAuth.post("/signup", signup);
routerAuth.get("/users", getAll);
routerAuth.post("/signin", signin);


export default routerAuth;