import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';

const router = Router();

/**
 * Contact Form Submission Route
 * POST /api/contact
 */
router.post('/', submitContactForm);

export default router;
