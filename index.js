import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// middleware
import { errorMiddleware } from "./middleware/errorMiddleware.js";

// routes
import transactionsRouter from "./routes/transactionsRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
   origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/transactions", transactionsRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
