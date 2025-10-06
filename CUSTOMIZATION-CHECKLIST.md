# 🎯 Quick Customization Checklist

Use this checklist to customize your portfolio website step by step.

## ✅ Essential Setup (Do These First!)

### 1. Personal Information
- [ ] Open `src/data/personalInfo.js`
- [ ] Update your name
- [ ] Update your title/role
- [ ] Update your email
- [ ] Update your phone number
- [ ] Update your location
- [ ] Update your tagline/bio
- [ ] Update social media links (GitHub, LinkedIn, Twitter)

### 2. Education & Certifications
- [ ] Open `src/data/education.js`
- [ ] Add your education details
- [ ] Add your certifications
- [ ] Add your achievements

### 3. Skills
- [ ] Open `src/data/skills.js`
- [ ] Review and update Frontend skills
- [ ] Review and update Backend skills
- [ ] Review and update DevOps skills
- [ ] Review and update Tools
- [ ] Adjust skill levels (percentage)

### 4. Work Experience
- [ ] Open `src/data/experience.js`
- [ ] Add/update your work experiences
- [ ] Update job titles, companies, durations
- [ ] Update responsibilities and achievements
- [ ] Update technologies used

### 5. Projects
- [ ] Open `src/data/projects.js`
- [ ] Add your actual projects
- [ ] Update project titles and descriptions
- [ ] Add GitHub repository links
- [ ] Add live demo links
- [ ] Update technologies used
- [ ] Mark featured projects

---

## 🖼️ Add Images

### Required Images (Add to `public/` folder)

- [ ] **profile.jpg** - Your professional photo (512x512px)
  - Current: See `public/profile.jpg.txt` for placeholder options

- [ ] **about-image.jpg** - About section image (800x600px)
  - Current: See `public/about-image.jpg.txt` for placeholder options

- [ ] **og-image.jpg** - Social media preview (1200x630px)
  - Create using: [Canva](https://canva.com) or [Figma](https://figma.com)

- [ ] **resume.pdf** - Your resume/CV
  - Place your PDF resume file here

### Project Images (Add to `public/projects/` folder)

For each project, add:
- [ ] Thumbnail: `projectname-thumb.jpg` (400x300px)
- [ ] Screenshots: `projectname-1.jpg`, `projectname-2.jpg` (1200x800px)

**💡 Tip:** Update image paths in `src/data/projects.js` to match your actual filenames

---

## 📧 Contact Form Setup

### EmailJS Configuration

1. [ ] Go to [EmailJS.com](https://www.emailjs.com/) and sign up
2. [ ] Create a new Email Service (connect Gmail, Outlook, etc.)
3. [ ] Create an Email Template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
4. [ ] Get your credentials:
   - Service ID
   - Template ID
   - Public Key
5. [ ] Open `src/components/sections/Contact.jsx`
6. [ ] Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY` (around line 29-31)
7. [ ] Uncomment the `emailjs.send()` code (lines 34-43)
8. [ ] Test the contact form!

---

## 🎨 Optional Customization

### Change Color Scheme
- [ ] Decide on primary color (default: blue)
- [ ] Search and replace in all files:
  - `blue-600` → `yourcolor-600`
  - `blue-500` → `yourcolor-500`
  - `blue-400` → `yourcolor-400`

Popular options: `purple`, `green`, `red`, `indigo`, `pink`, `teal`

### Update Metadata (SEO)
- [ ] Open `src/app/layout.js`
- [ ] Update page title
- [ ] Update description
- [ ] Update keywords
- [ ] Update Open Graph image URL
- [ ] Update Twitter handle

### Add Favicon
- [ ] Create favicon using [Favicon Generator](https://realfavicongenerator.net/)
- [ ] Add `favicon.ico` to `src/app/` folder
- [ ] Add `apple-touch-icon.png` (180x180px) to `src/app/` folder

---

## 🧪 Testing

### Before Launch
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile device (or Chrome DevTools)
- [ ] Test dark mode toggle
- [ ] Test all navigation links
- [ ] Test project modals
- [ ] Test contact form submission
- [ ] Test all external links (GitHub, LinkedIn, etc.)
- [ ] Check resume download link works

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Optimize large images if needed
- [ ] Ensure all images are in WebP or optimized format

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. [ ] Create GitHub repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. [ ] Go to [vercel.com](https://vercel.com)
3. [ ] Click "New Project"
4. [ ] Import your GitHub repository
5. [ ] Click "Deploy"
6. [ ] Wait for deployment to complete
7. [ ] Get your live URL!

### After Deployment
- [ ] Test live site
- [ ] Update `robots.txt` with your domain
- [ ] Update `src/app/layout.js` with your actual domain in OpenGraph
- [ ] Share your portfolio! 🎉

---

## 📱 Social Media

### Share Your Portfolio
- [ ] Update LinkedIn profile with portfolio link
- [ ] Update GitHub profile with portfolio link
- [ ] Tweet about your new portfolio
- [ ] Share on relevant communities (Dev.to, Hashnode, etc.)

---

## 🔄 Ongoing Maintenance

### Regular Updates
- [ ] Add new projects as you build them
- [ ] Update skills as you learn new technologies
- [ ] Add new work experience
- [ ] Update certifications
- [ ] Keep resume up to date

---

## 📚 Additional Resources

### Design Inspiration
- [Awwwards](https://www.awwwards.com/)
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/)

### Image Resources
- [Unsplash](https://unsplash.com/) - Free high-quality images
- [Pexels](https://www.pexels.com/) - Free stock photos
- [Remove.bg](https://www.remove.bg/) - Remove image backgrounds

### Tools
- [Canva](https://www.canva.com/) - Create og-image and graphics
- [TinyPNG](https://tinypng.com/) - Compress images
- [Favicon Generator](https://realfavicongenerator.net/) - Create favicons

---

## 🆘 Need Help?

### Common Issues

**Q: Dark mode not saving?**
A: Check browser's localStorage. Clear cache and try again.

**Q: Images not loading?**
A: Ensure images are in `public/` folder and paths are correct (case-sensitive).

**Q: Contact form not working?**
A: Verify EmailJS credentials and check browser console for errors.

**Q: Site looks broken?**
A: Run `npm install` again and restart dev server.

---

## ✨ You're All Set!

Once you've completed this checklist:
1. Your portfolio is personalized
2. All features are working
3. Images are in place
4. Contact form is configured
5. Site is deployed

**🎉 Congratulations on your new portfolio website!**

Share it with the world and land those opportunities! 🚀

---

_Last Updated: October 2025_
