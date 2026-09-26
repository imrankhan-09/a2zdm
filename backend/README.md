# A2ZDM Backend API

A clean, modular, and production-ready Node.js + Express backend service for the A2ZDM web platform.

---

## 📁 Project Structure

```
backend/
├── .env                  # Local environment configuration (git-ignored)
├── .env.example          # Template for environment variables
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── README.md             # Documentation and usage guide
└── src/
    ├── server.js         # Entry point: starts the HTTP server and loads .env
    ├── app.js            # Express application setup, CORS, and route mounting
    ├── controllers/
    │   └── contact.controller.js # Form validation & response handling
    ├── middleware/
    │   └── errorHandler.js       # 404 and global error handling
    └── routes/
        ├── health.routes.js      # GET /api/health
        └── contact.routes.js     # POST /api/contact
```

---

## 🚀 Getting Started

### 1. Navigate to the backend folder
```bash
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
The `.env` file is already pre-configured for local development. If needed, you can adjust settings:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

### 4. Start the server

* **Development mode (auto-reloads on file changes):**
  ```bash
  npm run dev
  ```

* **Production mode:**
  ```bash
  npm start
  ```

---

## 🔌 API Endpoints

### 1. Health Check
* **Route:** `GET /api/health`
* **Description:** Verifies that the backend server is online and operational.
* **Sample Response (`200 OK`):**
  ```json
  {
    "success": true,
    "message": "Backend server is running smoothly",
    "timestamp": "2026-09-21T07:48:00.000Z",
    "uptimeSeconds": 14,
    "environment": "development"
  }
  ```

---

### 2. Contact Form Submission
* **Route:** `POST /api/contact`
* **Headers:** `Content-Type: application/json`
* **Body Format:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I would like a quotation for SEO services.",
    "service": "seo",
    "budget": "1000-2500"
  }
  ```

* **Validation Rules:**
  - `name`: Required, string, minimum 2 characters.
  - `email`: Required, valid email format.
  - `message`: Required, string, minimum 5 characters.
  - `service` / `budget`: Optional strings.

* **Sample Success Response (`200 OK`):**
  ```json
  {
    "success": true,
    "message": "Thank you! Your message has been received successfully.",
    "data": {
      "name": "John Doe",
      "email": "john@example.com",
      "message": "I would like a quotation for SEO services.",
      "service": "seo",
      "budget": "1000-2500",
      "receivedAt": "2026-09-21T07:48:00.000Z"
    }
  }
  ```

* **Sample Error Response (`400 Bad Request`):**
  ```json
  {
    "success": false,
    "message": "Validation failed. Please check the provided fields.",
    "errors": [
      { "field": "name", "message": "Name is required" },
      { "field": "email", "message": "Please provide a valid email address" }
    ]
  }
  ```

---

## 🗄️ Connecting a Database in the Future

When you are ready to permanently store contact inquiries or user data, follow these simple steps:

### Option A: MongoDB (Mongoose)
1. Install Mongoose:
   ```bash
   npm install mongoose
   ```
2. Add your connection string in `.env`:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/a2zdm
   ```
3. Create a model in `src/models/Contact.js`:
   ```javascript
   import mongoose from 'mongoose';

   const contactSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true },
     message: { type: String, required: true },
     service: String,
     budget: String,
     createdAt: { type: Date, default: Date.now }
   });

   export default mongoose.model('Contact', contactSchema);
   ```
4. Save the submission in `src/controllers/contact.controller.js`:
   ```javascript
   import Contact from '../models/Contact.js';
   // Inside submitContactForm:
   const savedContact = await Contact.create(submissionData);
   ```

---

### Option B: PostgreSQL / MySQL (Prisma or pg)
1. Install Prisma or pg / mysql2:
   ```bash
   npm install @prisma/client
   npx prisma init
   ```
2. Define the schema in `prisma/schema.prisma` and call `prisma.contact.create({ data: submissionData })` in `src/controllers/contact.controller.js`.

---

### Option C: Supabase
1. Install Supabase JS:
   ```bash
   npm install @supabase/supabase-js
   ```
2. Insert into your table:
   ```javascript
   const { data, error } = await supabase.from('contacts').insert([submissionData]);
   ```
