/**
 * Email validation regex helper
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(email).trim());
};

/**
 * Handle Contact Form Submission
 * POST /api/contact
 */
export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message, service, budget } = req.body || {};

    const errors = [];

    // Validation: name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push({ field: 'name', message: 'Name is required' });
    } else if (name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters long' });
    }

    // Validation: email
    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      errors.push({ field: 'email', message: 'Email address is required' });
    } else if (!isValidEmail(email)) {
      errors.push({ field: 'email', message: 'Please provide a valid email address' });
    }

    // Validation: message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      errors.push({ field: 'message', message: 'Message is required' });
    } else if (message.trim().length < 5) {
      errors.push({ field: 'message', message: 'Message must be at least 5 characters long' });
    }

    // If validation fails, return 400 Bad Request
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed. Please check the provided fields.',
        errors
      });
    }

    // Sanitized payload
    const submissionData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      service: typeof service === 'string' ? service.trim() : null,
      budget: typeof budget === 'string' ? budget.trim() : null,
      receivedAt: new Date().toISOString()
    };

    /*
     * --------------------------------------------------------------------------
     * NOTE: Database Integration Placeholder
     * --------------------------------------------------------------------------
     * When you are ready to connect a database (e.g. MongoDB, PostgreSQL, Supabase):
     * 1. Import your database model / client (e.g. `import Contact from '../models/Contact.js'`)
     * 2. Save the submission:
     *    const savedDoc = await Contact.create(submissionData);
     * 3. (Optional) Trigger email notifications via Nodemailer, SendGrid, Resend, etc.
     * --------------------------------------------------------------------------
     */

    console.log('[Contact Submission Received]:', submissionData);

    // Return successful response (temporarily without DB persistence)
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received successfully.',
      data: submissionData
    });
  } catch (error) {
    next(error);
  }
};
