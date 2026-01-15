import {
   // categorizeTransaction,
   categorizeTransactionsBatch,
} from "../services/transactionsServices.js";

export const categorizeTransactions = async (req, res, next) => {
   const { uniqueNames } = req.body;

   if (!Array.isArray(uniqueNames)) {
      return res.status(400).json({ error: "uniqueNames must be an array" });
   }

   try {
      // const categorizedTransactions = await Promise.all(
      //    transactions.map(async (transaction) => ({
      //       ...transaction,
      //       category: await categorizeTransaction(transaction),
      //       confidence: "high", // You can add confidence scoring
      //    }))
      // );

      const categorizedTransactions = await categorizeTransactionsBatch(
         uniqueNames
      );

      // res.json({ transactions: uniqueNames });
      res.json({ transactions: categorizedTransactions });
   } catch (error) {
      next(error);
   }
};
