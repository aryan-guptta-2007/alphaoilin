# Hamburg for Refined Oil Products Trading LLC

A Next.js 14 App Router web application for **Hamburg Refined Oil Products Trading LLC** (Dubai, UAE), featuring custom Tailwind CSS design system tokens, `next/font` Google fonts (Archivo, Newsreader, IBM Plex Mono), 0 border-radius sharp styling, interactive distillation column cut-point matrix, dynamic product template system, Zod validated quote form, and Resend email API integration.

---

## Technical Stack & Architecture

- **Framework**: Next.js 14 (App Router, Server & Client Components)
- **Language**: TypeScript (`npx tsc --noEmit` verified)
- **Styling**: Tailwind CSS (extended theme for exact brand colors, zero border-radius)
- **Typography (`next/font`)**:
  - `Archivo` (weights 500, 600, 800) — `--font-display`
  - `Newsreader` (weights 300, 400, italic) — `--font-body`
  - `IBM Plex Mono` (weights 400, 500) — `--font-mono`
- **Validation**: Zod schema validation (`lib/contactSchema.ts`)
- **Email API**: Resend API integration (`app/api/contact/route.ts`)

---

## Local Development Setup

### 1. Prerequisites
- Node.js 18.17+ or Node.js 20+
- npm 9+

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/your-username/alphainoil.git
cd alphainoil

# Install dependencies
npm install
```

### 3. Environment Variables Setup
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` to provide your Resend API Key:
```env
# .env.local
RESEND_API_KEY=re_your_resend_api_key_here
```
> **Note**: If `RESEND_API_KEY` is not set or unconfigured, the application gracefully operates in **Demo Mode**, logging form submissions to console and displaying a success message to the user.

### 4. Running Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build Verification
```bash
npm run build
npm run start
```

---

## How to Add the Client's Real Product PDFs

1. **Place PDF Files**: Drop the client's official Technical Data Sheets (TDS) and Safety Data Sheets (SDS) into `public/docs/` (e.g. `public/docs/base-oil-sn150-tds.pdf`).

2. **Update Data in `lib/products.ts`**:
   Open `lib/products.ts` and locate the `documents` array for the target product. Replace the placeholder `#` links with the relative URL path:

   ```typescript
   // lib/products.ts
   documents: [
     {
       title: "Base Oil SN 150 Technical Data Sheet (TDS)",
       type: "PDF",
       size: "240 KB",
       url: "/docs/base-oil-sn150-tds.pdf", // Updated from "#"
     },
     {
       title: "Base Oil SN 500 Technical Data Sheet (TDS)",
       type: "PDF",
       size: "245 KB",
       url: "/docs/base-oil-sn500-tds.pdf",
     },
   ],
   ```

---

## Deploying to Vercel

### Method A: Vercel Dashboard (Git Integration — Recommended)
1. Push your code to GitHub / GitLab / Bitbucket:
   ```bash
   git add .
   git commit -m "Deploy Hamburg Refined Oil Products website"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. Keep default settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
4. Under **Environment Variables**, add:
   - `RESEND_API_KEY`: `re_your_actual_resend_api_key`
5. Click **Deploy**.

### Method B: Vercel CLI Deployment
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Add Environment Variable to Vercel
vercel env add RESEND_API_KEY production

# Deploy to production
vercel --prod
```

---

## Environment Variables Reference

| Variable Name | Required | Description |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Optional (Demo fallback enabled) | API key from [Resend.com](https://resend.com) for sending quote request notification emails to `info@hamburg-int.com`. |

---

## Contact & License

- **Client**: Hamburg Refined Oil Products Trading LLC
- **Location**: Tejasvi Business Center, Office G12, Garhoud Deira, Dubai, UAE
- **Phone**: +971 55 515 6779
- **Email**: info@hamburg-int.com
