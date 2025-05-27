# 🧲 Simple Lead Generation System

A complete lead generation system featuring a form, a backend API, and automation using n8n.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Automation:** n8n (Hosted on [n8n.cloud](https://n8n.cloud))

---

## ✨ Features

- ✅ Clean and responsive lead form with validation (Name & Email required)
- ✅ Express backend to handle POST form submissions
- ✅ Sends form data to **n8n Webhook**
- ✅ n8n workflow sends email notifications with lead information
- ✅ (Optional) Store leads in **Google Sheets** or **Airtable** for future tracking

---

## 🚀 Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/Satturevanth/Simple-Lead-Generation-System.git
cd Simple-Lead-Generation-System
🌐 Deployment Instructions
✅ 2. Deploy the Frontend (Vercel / Netlify)
Option 1: Deploy on Vercel (Recommended)
Visit vercel.com

Click "New Project" and import your GitHub repo

Select Simple-Lead-Generation-System

Set Root Directory to frontend

Click Deploy

ℹ️ Want to use Netlify instead? Let me know, and I’ll provide a step-by-step guide.

✅ 3. Deploy the Backend (Render)
Go to render.com

Click "New Web Service"

Connect your GitHub account

Choose the repo and set:

Root Directory: backend

Start Command: node server.js

Environment: Node.js

Click Deploy

✅ 4. Final Submission Checklist
Once your app is live, make sure to submit the following:

🔗 GitHub Repository: Simple-Lead-Generation-System

🔗 Frontend Live URL: Vercel Link

🔗 Backend Live URL: Render Link

🔗 n8n Webhook URL: View Webhook

📽️ Video Walkthrough: Watch on Google Drive

📂 Project Structure
bash
Copy
Edit
Simple-Lead-Generation-System/
├── frontend/      # HTML, CSS, JS lead form
├── backend/       # Node.js + Express server
└── README.md
📌 About
This is a minimal, no-database lead generation solution designed for simplicity, extensibility, and automation. Easily extendable to support storage, CRM integration, and analytics.

🌟 Star the Project
If you find this project helpful, consider giving it a ⭐ on GitHub!

© 2025 Satturevanth – All rights reserved.
