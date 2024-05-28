const express = require('express');
const axios = require('axios');
const redis = require('ioredis');

// Create Redis client
const client = redis.createClient({
  host: 'redis', // Assuming Redis is running as a service named 'redis' in Docker network
  port: 6379
});

const app = express();

// Middleware to cache the response using Redis
const cacheMiddleware = (req, res, next) => {
  const cacheKey = 'todos';
  client.get(cacheKey, (err, data) => {
    if (err) {
      console.error('Error in cacheMiddleware:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (data !== null) {
      console.log('Cache hit!');
      return res.json(JSON.parse(data));
    }

    console.log('Cache miss!');
    next(); // Proceed to the route handler if cache is not found
  });
};

app.get('/', cacheMiddleware, async (req, res) => {
  try {
    // Fetch data from external API
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

    // Cache the fetched data in Redis for 30 seconds
    client.setex('todos', 30, JSON.stringify(data));

    return res.json(data);
  } catch (error) {
    console.error('Error in GET /:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
