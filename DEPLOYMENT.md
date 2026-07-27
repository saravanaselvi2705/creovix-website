# Creovix Stack: Complete Production Deployment Guide

This guide provides step-by-step instructions to deploy the complete **Creovix Stack** platform, including the **Next.js 15 Frontend Client**, the **Express.js CRM Backend Server**, and the **MongoDB Atlas Cloud Database**.

---

## 🏗️ Architecture Overview

| Component | Technology | Recommended Hosting Provider | Alternative Hosting |
| :--- | :--- | :--- | :--- |
| **Frontend** | Next.js 15, React 19, Tailwind CSS v4 | **Vercel** (Global Edge CDN) | Netlify / AWS Amplify |
| **Backend API** | Node.js, Express, TypeScript | **Render** or **Railway** | Hetzner / DigitalOcean VPS |
| **Database** | MongoDB NoSQL | **MongoDB Atlas Cloud** | Self-hosted MongoDB |

---

## 🔑 Environment Variables Reference

### Frontend (`client`)
Create these variables in your Vercel Project Settings:

```env
NEXT_PUBLIC_API_URL=https://your-server-domain.onrender.com
```

### Backend (`server`)
Create these variables in your Render / Railway Environment Settings:

```env
PORT=5000
NODE_ENV=production
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/creovix_db?retryWrites=true&w=majority
JWT_SECRET=your_secure_jwt_secret_key_here
CLIENT_URL=https://your-frontend-domain.vercel.app

# Nodemailer SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
```

---

## 🚀 Option 1: Managed Cloud Deployment (Recommended)

### Step 1: Push Codebase to GitHub
If you haven't connected your remote GitHub repository yet, run the following commands in your terminal:

```bash
# Set your GitHub remote repository URL
git remote add origin https://github.com/YOUR_USERNAME/creovix-website.git

# Push the main branch
git push -u origin main
```

---

### Step 2: Set Up MongoDB Atlas Database
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign in/sign up.
2. Click **Create Cluster** (Select the Free M0 tier).
3. Under **Database Access**, create a user (e.g., `creovix_admin`) with a strong password.
4. Under **Network Access**, click **Add IP Address** and select **Allow Access from Anywhere (`0.0.0.0/0`)** so server hosting can connect.
5. Click **Connect** -> **Drivers**, and copy your `MONGO_URI` connection string.
   - Example: `mongodb+srv://creovix_admin:<password>@cluster0.mongodb.net/creovix_db?retryWrites=true&w=majority`

---

### Step 3: Deploy Express Backend Server to Render.com
1. Go to [Render.com Dashboard](https://dashboard.render.com/) and click **New +** -> **Web Service**.
2. Connect your GitHub repository `creovix-website`.
3. Configure the Web Service settings:
   - **Name:** `creovix-api`
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
4. Add the **Environment Variables** listed above (`MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`, `SMTP_*`).
5. Click **Create Web Service**.
6. Copy your server URL (e.g., `https://creovix-api.onrender.com`).

---

### Step 4: Deploy Next.js Frontend to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/new) and select **Import Project**.
2. Select your `creovix-website` GitHub repository.
3. In the project settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** Edit and set to `client`
4. Expand **Environment Variables** and add:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://creovix-api.onrender.com` (Your Render server URL from Step 3)
5. Click **Deploy**.
6. Vercel will build and deploy your frontend to a production domain (e.g., `https://creovix-website.vercel.app`).

---

### Step 5: Final Cross-Origin Verification
1. Return to **Render** (Backend Server settings).
2. Update the `CLIENT_URL` environment variable to your exact live Vercel URL (e.g., `https://creovix-website.vercel.app`).
3. Render will auto-redeploy with updated CORS rules.

---

## 🐳 Option 2: Docker / VPS Single-Server Deployment

If deploying to a VPS (DigitalOcean, AWS EC2, Hetzner, Hostinger VPS):

### Docker Compose Configuration (`docker-compose.yml`)

Create a `docker-compose.yml` in the root folder:

```yaml
version: '3.8'

services:
  mongo:
    image: mongo:latest
    container_name: creovix-db
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

  server:
    build:
      context: ./server
      dockerfile: Dockerfile
    container_name: creovix-server
    restart: always
    ports:
      - "5000:5000"
    environment:
      PORT: 5000
      MONGO_URI: mongodb://mongo:27017/creovix_db
      JWT_SECRET: your_secure_jwt_secret
      CLIENT_URL: http://your-vps-ip:3000
    depends_on:
      - mongo

volumes:
  mongo_data:
```

Run on VPS:
```bash
docker compose up -d --build
```
