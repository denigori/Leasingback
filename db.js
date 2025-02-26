import pg from 'pg';
import env from 'dotenv';

env.config(); // Load environment variables from .env file

const db = new pg.Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Failed to connect to the database:', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

// Handle database connection errors
db.on('error', (err) => {
  console.error('Database error:', err.stack);
  // Optionally, you can add logic to handle reconnection or other actions
});

export const query = (text, params) => db.query(text, params);