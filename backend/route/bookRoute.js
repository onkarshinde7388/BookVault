import express, { Router }  from "express";

import { getBook } from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBook);

export default router;