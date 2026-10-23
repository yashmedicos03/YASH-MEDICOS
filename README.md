# Yash Medicos - Healthcare & Pharmacy Website

Official website for **Yash Medicos**, a modern community healthcare and pharmacy store located in **Golegaon Bk, Sillod - 431112**, Maharashtra.

---

## 📋 Business Profile

* **Business Name:** Yash Medicos
* **Business Type:** Healthcare & Wellness / Pharmacy & Medical Store
* **Location:** Golegaon Bk, Sillod, Maharashtra - 431112
* **Phone / WhatsApp:** [+91 9860384278](tel:+919860384278) / [WhatsApp Chat](https://wa.me/919860384278)
* **Working Hours:** Monday to Sunday, 8:00 AM – 10:00 PM (Emergency calls supported)

---

## 🏥 13 Dedicated Services Featured

1. **Prescription Medicine Sale** – Genuine, batch-verified doctor prescriptions with cold-chain storage.
2. **Over the Counter (OTC) Medicine** – Quick relief remedies for cold, fever, cough, digestion, and pain.
3. **Healthcare & Wellness Products** – Immunity tonics, vitamins, minerals, and herbal supplements.
4. **First-Aid Supplies** – Antiseptics, bandages, burn care, and complete emergency kits.
5. **Personal Care Products** – Medicated skincare, hair care, oral health, and daily hygiene products.
6. **Baby Care Products** – Doctor-recommended formulas, gentle lotions, wipes, and diapers.
7. **Nutritional Products** – High-protein supplements, diabetic nutrition drinks, and geriatric formulas.
8. **Medicine Availability & Ordering** – Pre-order specialty or rare medicines with rapid turnaround.
9. **Medicine Usage Guidance** – Free pharmacist consultations on dosage, timing, and food interactions.
10. **Basic Health Monitoring** – Walk-in Blood Pressure (BP), Blood Glucose (Sugar), and SpO2 checks.
11. **Health & Hygiene Awareness** – Preventive seasonal health tips and antibiotic safety education.
12. **Chronic Disease Medication Support** – Monthly refill scheduling and reminders for BP/Diabetes.
13. **Medical Equipment Sales** – Digital BP monitors, glucometers, nebulizers, vaporizers, and walking aids.

---

## 📁 Project Structure

```text
├── index.html        # Semantic HTML5 homepage with Schema.org pharmacy markup
├── style.css         # Modern, fluid CSS with custom properties & responsive media queries
├── script.js         # Vanilla JavaScript (hamburger menu, filtering, modal, validation)
└── README.md         # Documentation & GitHub Pages deployment guide
```

* **No frameworks required:** Zero external npm or build dependencies. Pure HTML5, CSS3, and modern vanilla JavaScript.
* **Responsive across all devices:** Tested from ultra-small mobile (320px, 360px, 375px, 390px, 430px) through tablets (768px, 1024px) to desktop monitors (1280px, 1440px+).

---

## 🚀 How to Publish on GitHub Pages (Step-by-Step)

Publishing this website is 100% free with GitHub Pages:

### Step 1: Create a GitHub Account and Repository
1. Go to [github.com](https://github.com/) and sign in (or create a free account).
2. Click the **+** (plus icon) in the top-right corner and select **New repository**.
3. Name your repository (for example: `yash-medicos` or `<your-username>.github.io`).
4. Set visibility to **Public**.
5. Do not check "Add a README file" (as one is already present here).
6. Click **Create repository**.

### Step 2: Upload Project Files
There are two easy methods:

#### Method A: Direct Web Upload (Easiest)
1. On your new repository page, click the **uploading an existing file** link.
2. Drag and drop all files from this folder (`index.html`, `style.css`, `script.js`, `README.md`).
3. Under *Commit changes*, type a short message (e.g. `Initial commit of Yash Medicos website`).
4. Click **Commit changes**.

#### Method B: Git Command Line
```bash
git init
git add .
git commit -m "Initial commit of Yash Medicos website"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on the **Settings** tab (gear icon).
2. In the left navigation menu, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select `main` (or `master`) and leave the folder set to `/(root)`.
5. Click **Save**.
6. Refresh the page after 1–2 minutes. You will see a banner:
   > *Your site is live at `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`*

---

## 📬 Connecting the Contact Form to Receive Emails

The form already includes **instant WhatsApp forwarding** directly to `+91 9860384278` out of the box.

If you also wish to receive email notifications when a customer fills the form, you can link it to **Formspree** or **Web3Forms** in 60 seconds:

### Option 1: Formspree (Free & Popular)
1. Visit [formspree.io](https://formspree.io/) and create a free account.
2. Click **New Form** and name it `Yash Medicos Inquiry`. Enter your notification email.
3. Formspree will provide an endpoint URL like `https://formspree.io/f/mqkbrwzy`.
4. Open `index.html` and locate line:
   ```html
   <form id="contactForm" class="contact-form" novalidate>
   ```
5. Update it with your Formspree endpoint:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/mqkbrwzy" method="POST" novalidate>
   ```
6. Save and commit. Submissions will now be delivered straight to your email inbox!

### Option 2: Web3Forms (No Login Required)
1. Visit [web3forms.com](https://web3forms.com/) and enter your email address to receive an Access Key.
2. Open `index.html`, set the action to `https://api.web3forms.com/submit`, and add a hidden field inside `<form>`:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

---

## 🧪 Responsive & Browser Testing

This website has been tested and styled to ensure:
* Zero horizontal overflow or content cutoff on narrow screens (tested down to 320px).
* Touch targets for all buttons and links are at least 44px for smooth mobile navigation.
* WhatsApp links auto-format pre-filled messages for prescription orders and inquiries.
* Sticky navigation with backdrop blur and smooth sliding mobile drawer.
* High-contrast typography and semantic ARIA attributes for accessibility.
