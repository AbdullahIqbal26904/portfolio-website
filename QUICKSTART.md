# 🚀 Quick Start Guide - Portfolio Website

## Your Portfolio is Ready! 🎉

Your Next.js portfolio website is now set up and running at: **http://localhost:3000**

---

## 📋 What's Been Built

### ✅ Core Features Implemented

1. **Hero Section** - Full-screen intro with your name, title, and CTA buttons
2. **About Section** - Bio, education, certifications, and achievements
3. **Skills Section** - Categorized tech stack with progress bars
4. **Experience Section** - Professional timeline with job details
5. **Projects Section** - Grid with modal views and filtering
6. **Contact Section** - Working form with EmailJS integration
7. **Dark Mode** - Toggle between light and dark themes
8. **Responsive Design** - Works on all devices
9. **SEO Optimization** - Meta tags and Open Graph support
10. **Smooth Animations** - Framer Motion animations throughout

---

## 🎯 Next Steps (In Order)

### Step 1: Personalize Your Content (30 minutes)

1. **Update Personal Info**
   ```bash
   # Open and edit:
   src/data/personalInfo.js
   ```
   - Change name, title, email, phone
   - Update social media links
   - Update bio and tagline

2. **Add Your Experience**
   ```bash
   src/data/experience.js
   ```
   - Replace with your actual work experience

3. **Update Skills**
   ```bash
   src/data/skills.js
   ```
   - Add/remove skills based on your expertise

4. **Add Projects**
   ```bash
   src/data/projects.js
   ```
   - Add your real projects with links and descriptions

5. **Update Education**
   ```bash
   src/data/education.js
   ```
   - Add your education, certifications, achievements

### Step 2: Add Images (15 minutes)

Run the image setup helper:
```bash
./create-image-placeholders.sh
```

Then add these images to `public/` folder:
- `profile.jpg` (512x512px) - Your professional photo
- `about-image.jpg` (800x600px) - About section image
- `og-image.jpg` (1200x630px) - Social media preview
- `resume.pdf` - Your resume

For projects, add images to `public/projects/`:
- `projectname-thumb.jpg`
- `projectname-1.jpg`, etc.

**Temporary placeholders available at:**
- https://via.placeholder.com/512x512
- https://i.pravatar.cc/512
- https://picsum.photos/800/600

### Step 3: Setup Contact Form (10 minutes)

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create a template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Get your credentials (Service ID, Template ID, Public Key)
5. Update `src/components/sections/Contact.jsx`:
   - Line 29-31: Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
   - Uncomment lines 34-43 (the emailjs.send code)

### Step 4: Deploy to Vercel (5 minutes)

```bash
# 1. Initialize git
git init
git add .
git commit -m "Initial portfolio commit"

# 2. Push to GitHub
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main

# 3. Deploy on Vercel
# Go to vercel.com → Import your GitHub repo → Deploy
```

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with SEO
│   │   ├── page.js            # Main homepage
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx     # Navigation
│   │   │   └── Footer.jsx     # Footer
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Experience.jsx
│   │       ├── Projects.jsx
│   │       ├── ProjectModal.jsx
│   │       └── Contact.jsx
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode
│   └── data/                  # 👈 EDIT THESE FILES
│       ├── personalInfo.js
│       ├── education.js
│       ├── skills.js
│       ├── experience.js
│       └── projects.js
└── public/                    # 👈 ADD IMAGES HERE
```

---

## 🛠️ Available Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📚 Documentation Files

- **README.md** - Project overview
- **SETUP.md** - Detailed setup instructions
- **CUSTOMIZATION-CHECKLIST.md** - Step-by-step customization guide (use this!)

---

## 🎨 Customization Tips

### Change Color Scheme

The site uses **blue** as the primary color. To change:

1. Search for `blue-600` in all files
2. Replace with your color (e.g., `purple-600`, `green-600`, `red-600`)
3. Also replace `blue-500` and `blue-400`

### Modify Sections

Each section is a separate component in `src/components/sections/`. Edit them individually to customize layout, content, or styling.

### Add New Sections

1. Create new component in `src/components/sections/`
2. Import and add to `src/app/page.js`

---

## ✨ Key Features Explained

### Dark Mode
- Automatic based on system preference
- Manual toggle in navigation
- Persists using localStorage

### Smooth Scrolling
- Click navigation links to smooth scroll
- Scroll spy highlights active section

### Project Modals
- Click any project card to see full details
- Shows images, videos, tech stack, and links

### Contact Form
- Validates input
- Sends email via EmailJS
- Shows success/error messages

---

## 🐛 Troubleshooting

**Site won't start?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Images not loading?**
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/` folder
- Check browser console for errors

**Dark mode not working?**
- Clear browser cache
- Check localStorage in DevTools

**Contact form not working?**
- Verify EmailJS credentials
- Uncomment the emailjs.send() code
- Check browser console

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] All personal info updated in data files
- [ ] Images added (profile, about, og-image, resume)
- [ ] Project images added
- [ ] EmailJS configured
- [ ] Tested on mobile
- [ ] Dark mode tested
- [ ] All links work
- [ ] Resume downloads

---

## 📞 Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **EmailJS:** https://www.emailjs.com/docs/

---

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your work. Follow the steps above to personalize it and deploy!

**Current Status:**
- ✅ All components built
- ✅ Dark mode working
- ✅ Animations added
- ✅ Responsive design complete
- ⏳ Waiting for your content and images
- ⏳ Waiting for EmailJS setup
- ⏳ Ready to deploy

---

**Happy coding! 🚀**

Questions? Check SETUP.md or CUSTOMIZATION-CHECKLIST.md for more details.
