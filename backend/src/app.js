import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import contactRoutes from './routes/contact.routes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// Allowed CORS origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes('*')) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev, can restrict for strict production
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root info route
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'A2ZDM Backend API',
    status: 'online',
    version: '1.0.0',
    documentation: {
      healthCheck: 'GET /api/health',
      contactSubmit: 'POST /api/contact'
    }
  });
});

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/contact', contactRoutes);

// 404 and Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
