import { Router } from 'express';

const router = Router();

/**
 * Health Check Endpoint
 * GET /api/health
 */
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend server is running smoothly',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development'
  });
});

export default router;
