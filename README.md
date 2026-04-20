# Expenser

A full-stack expense tracking application built with React (frontend) and Node.js/Express (backend) with MongoDB.

## Project Structure

```
expenser/
├── client/          # React frontend application
│   ├── public/
│   ├── src/
│   └── package.json
├── server/          # Node.js/Express backend API
│   ├── models/
│   ├── uploads/
│   ├── server.js
│   └── package.json
└── README.md        # This file
```

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or MongoDB Atlas account)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd expenser
   ```

2. **Install server dependencies:**
   ```bash
   cd server
   npm install
   cd ..
   ```

3. **Install client dependencies:**
   ```bash
   cd client
   npm install
   cd ..
   ```

## Database Setup

1. **Start MongoDB:**
   - If using local MongoDB, ensure MongoDB is running on your system
   - If using MongoDB Atlas, update the connection string in `server/server.js`

2. **Database Configuration:**
   - The application connects to MongoDB. By default, it uses `mongodb://localhost:27017/expenser`
   - Update the connection string in `server/server.js` if needed

## Running the Application

### Development Mode

1. **Start the backend server:**
   ```bash
   cd server
   npm start
   ```
   The server will run on http://localhost:5000

2. **Start the frontend (in a new terminal):**
   ```bash
   cd client
   npm start
   ```
   The React app will run on http://localhost:3000

3. **Access the application:**
   Open your browser and navigate to http://localhost:3000

### Production Build

1. **Build the frontend:**
   ```bash
   cd client
   npm run build
   ```

2. **Start the backend server:**
   ```bash
   cd server
   npm start
   ```

The production build will be served from the `client/build` directory.

## API Endpoints

The backend provides the following main endpoints:

- `GET /api/transactions` - Get all transactions
- `POST /api/transactions` - Create a new transaction
- `PUT /api/transactions/:id` - Update a transaction
- `DELETE /api/transactions/:id` - Delete a transaction
- `POST /api/upload` - Upload CSV file for bulk transactions

## Features

- Add, edit, and delete expense transactions
- View expense summaries and charts
- Upload CSV files for bulk transaction import
- Responsive design for mobile and desktop

## Technologies Used

### Frontend
- React 19
- React Router (if applicable)
- Recharts for data visualization
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Multer for file uploads
- CORS for cross-origin requests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.