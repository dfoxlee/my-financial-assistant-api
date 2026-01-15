# Financial Assistant API

An intelligent financial transaction categorization API powered by OpenAI's GPT-3.5 Turbo. This API automatically categorizes financial transactions based on merchant names using AI.

## Features

- **AI-Powered Categorization**: Uses OpenAI's GPT-3.5 Turbo model to intelligently categorize transactions
- **Batch Processing**: Efficiently processes multiple transactions in a single request
- **CORS Support**: Configured for secure cross-origin requests
- **Rate Limiting**: Built-in rate limiting for API protection
- **Error Handling**: Comprehensive error handling with Winston logging
- **Morgan Logging**: HTTP request logging for monitoring

## Tech Stack

- **Express.js**: Web framework for Node.js
- **OpenAI API**: AI-powered transaction categorization
- **Dotenv**: Environment variable management
- **CORS**: Cross-Origin Resource Sharing
- **Morgan**: HTTP request logger
- **Winston**: Logging library
- **Express Rate Limit**: Rate limiting middleware

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-financial-assistant-api
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
```

## Getting Started

### Development
```bash
npm run dev
```
This runs the server with Nodemon for automatic restarts on file changes.

### Production
```bash
npm start
```

The server will start on the configured PORT (default: 3000).

## API Endpoints

### POST `/api/transactions/categorize`

Categorizes financial transactions based on merchant names.

**Request Body:**
```json
{
  "uniqueNames": [
    "Whole Foods Market",
    "Shell Gas Station",
    "Netflix Subscription",
    "Nike Store"
  ]
}
```

**Response:**
```json
{
  "transactions": [
    "Groceries",
    "Fuel",
    "Subscription",
    "Clothing"
  ]
}
```

## Transaction Categories

The API can categorize transactions into the following categories:
- Liquor
- Shopping
- ATM Withdrawal
- Clothing
- Student Loan Payment
- Pay
- Insurance
- Utilities
- Dining
- Groceries
- Fuel
- Entertainment
- Healthcare
- Personal Care
- Travel
- Rent
- Car Wash
- TV
- Internet
- Phone
- Credit Card Payment
- Gambling
- Home Improvement
- Money Transfer
- Subscription
- Gift
- Other
- Vehicle Payment

## Project Structure

```
├── index.js                          # Main application entry point
├── package.json                      # Project dependencies
├── constants/
│   └── initialCategories.js         # Category definitions
├── controllers/
│   └── transactionsController.js    # Request handlers
├── middleware/
│   └── errorMiddleware.js           # Error handling middleware
├── routes/
│   └── transactionsRoutes.js        # API route definitions
└── services/
    └── transactionsServices.js      # Business logic for categorization
```

## Environment Variables

- `PORT`: The port on which the server runs (default: 3000)
- `OPENAI_API_KEY`: Your OpenAI API key for the GPT-3.5 Turbo model

## Requirements

- Node.js 14+
- npm or yarn
- OpenAI API key

## Error Handling

The API includes comprehensive error handling with fallback logic:
- Failed categorization requests return an "Other" category as fallback
- All errors are logged using Winston
- HTTP errors are handled by the error middleware

## Security Features

- **CORS**: Configured to only accept requests from `http://localhost:5173`
- **Rate Limiting**: Protected against excessive requests
- **Environment Variables**: Sensitive credentials are kept in `.env`

## License

ISC
