import express from "express";
import { categorizeTransactions } from "../controllers/transactionsController.js";

const transactionsRouter = express.Router();

transactionsRouter.post("/categorize", categorizeTransactions);

export default transactionsRouter;
