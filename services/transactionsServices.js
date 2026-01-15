import OpenAI from "openai";
import { initialCategories } from "../constants/initialCategories.js";

const openai = new OpenAI({
   apiKey:
      process.env.OPENAI_API_KEY,
});

export const categorizeTransaction = async (transaction) => {
   const { name } = transaction;

   const prompt = `Categorize this financial transaction into one of these categories:  ${initialCategories.join(
      ", "
   )}.
  
      Transaction details: 
      - Merchant/Name: ${name}

      Respond with ONLY the category name, nothing else.`;

   try {
      const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
            {
               role: "system",
               content:
                  "You are a financial transaction categorization assistant.  Categorize transactions accurately based on merchant name.",
            },
            {
               role: "user",
               content: prompt,
            },
         ],
         temperature: 0.3, // Lower temperature for more consistent results
         max_tokens: 50,
      });

      const category = response.choices[0].message.content.trim();
      return category;
   } catch (error) {
      console.error("Error categorizing transaction:", error);
      return "Other"; // Fallback category
   }
};

// Batch processing for multiple transactions
export const categorizeTransactionsBatch = async (uniqueNames) => {
   const transactionList = uniqueNames
      .map((name, i) => `${i + 1}. Merchant: ${name}`)
      .join("\n");

   const prompt = `Categorize these merchant names that come from financial transactions.  Respond with a JSON array of categories in the same order. 

   Categories: ${initialCategories.join(", ")}

   Transactions:
   ${transactionList}

   Respond with ONLY a JSON array like: ["Groceries", "Dining & Restaurants", ...]`;

   console.log(prompt);

   const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
         {
            role: "system",
            content:
               "You are a financial transaction categorization assistant. Return only valid JSON arrays.",
         },
         {
            role: "user",
            content: prompt,
         },
      ],
      temperature: 0.3,
      response_format: { type: "json_object" }, // For newer models
   });

   const categories = JSON.parse(response.choices[0].message.content);

   return categories;
};
