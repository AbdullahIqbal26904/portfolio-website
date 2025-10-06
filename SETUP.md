# Portfolio Website Setup Instructions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone and Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Your Browser**
   Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.js          # Root layout with metadata
│   │   ├── page.js            # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx     # Navigation with dark mode
│   │   │   └── Footer.jsx     # Footer component
│   │   └── sections/          # Page sections
│   │       ├── Hero.jsx       # Hero section
│   │       ├── About.jsx      # About section
│   │       ├── Skills.jsx     # Skills section
│   │       ├── Experience.jsx # Experience timeline
│   │       ├── Projects.jsx   # Projects grid
│   │       ├── ProjectModal.jsx # Project detail modal
│   │       └── Contact.jsx    # Contact form
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode context
│   └── data/                  # Content data files
│       ├── personalInfo.js    # Your personal info
│       ├── education.js       # Education & certifications
│       ├── skills.js          # Skills & tech stack
│       ├── experience.js      # Work experience
│       └── projects.js        # Projects data
├── public/                    # Static assets
└── package.json
```

---

## 🎨 Customization Guide

### 1. Update Personal Information

**File:** `src/data/personalInfo.js`

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all fields
};
```

### 2. Add Your Education & Certifications

**File:** `src/data/education.js`

Add your educational background and certifications.

### 3. Update Skills

**File:** `src/data/skills.js`

Modify the skills arrays with your tech stack.

### 4. Add Work Experience

**File:** `src/data/experience.js`

Add your professional experience details.

### 5. Add Your Projects

**File:** `src/data/projects.js`

Add your project details with descriptions, tech stack, and links.

---

## 🖼️ Adding Images

### Required Images

Place these images in the `public/` folder:

1. **profile.jpg** - Your professional headshot (recommended: 512x512px)
2. **about-image.jpg** - About section image
3. **og-image.jpg** - Social media preview image (1200x630px)
4. **resume.pdf** - Your resume PDF

### Project Images

For each project in `src/data/projects.js`, add images to `public/projects/`:

- `projectname-thumb.jpg` - Thumbnail (400x300px)
- `projectname-1.jpg`, `projectname-2.jpg` - Additional screenshots

**Quick Image Placeholders:**

You can use placeholder services temporarily:
- https://via.placeholder.com/512x512
- https://picsum.photos/512/512

---

## 📧 EmailJS Setup (Contact Form)

1. **Sign up at [EmailJS](https://www.emailjs.com/)**

2. **Create a Service**
   - Connect your email provider (Gmail, Outlook, etc.)

3. **Create a Template**
   - Use variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`

4. **Get Your Credentials**
   - Service ID
   - Template ID
   - Public Key

5. **Update Contact Form**

**File:** `src/components/sections/Contact.jsx`

Replace these lines (around line 29-31):
```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

Uncomment the emailjs.send call (lines 34-43).

---

## 🌗 Dark Mode

Dark mode is automatically enabled! Users can toggle between light and dark themes using the button in the navigation.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click Deploy
   - Done! ✨

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

---

## 🎨 Color Customization

The site uses Tailwind CSS with a blue primary color. To change colors:

**Primary Color Customization:**

Search and replace in all component files:
- `blue-600` → your color
- `blue-500` → your lighter shade
- `blue-400` → even lighter shade

Common color options:
- Purple: `purple-600`, `purple-500`, `purple-400`
- Green: `green-600`, `green-500`, `green-400`
- Red: `red-600`, `red-500`, `red-400`
- Indigo: `indigo-600`, `indigo-500`, `indigo-400`

---

## 📱 Features Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark mode with toggle
✅ Smooth scrolling and animations
✅ SEO optimized with meta tags
✅ Fast loading with Next.js Image optimization
✅ Contact form with EmailJS integration
✅ Project modal with detailed views
✅ Skills with progress bars
✅ Experience timeline
✅ Social media links
✅ Modern, professional UI

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15.5.4
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Email:** EmailJS
- **Font:** Inter (Google Fonts)

---

## 📝 Additional Customization

### Add a Blog Section

Create `src/components/sections/Blog.jsx` and add blog posts data.

### Add Testimonials

Create `src/components/sections/Testimonials.jsx` with client feedback.

### Analytics

Add Google Analytics or other analytics in `src/app/layout.js`.

---

## 🐛 Troubleshooting

**Issue:** Images not loading
- Ensure images are in the `public/` folder
- Check file names match exactly in code

**Issue:** Contact form not working
- Verify EmailJS credentials
- Check browser console for errors
- Ensure EmailJS code is uncommented

**Issue:** Dark mode not working
- Clear browser cache
- Check localStorage in DevTools

---

## 📞 Support

For questions or issues:
- Review the code comments
- Check Next.js documentation
- Review Tailwind CSS docs

---

## 🎉 Launch Checklist

Before going live:

- [ ] Update all personal information in data files
- [ ] Add all images (profile, about, projects, og-image)
- [ ] Upload your resume PDF
- [ ] Configure EmailJS for contact form
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Test all project links
- [ ] Update SEO metadata in layout.js
- [ ] Add favicon (see below)
- [ ] Test contact form
- [ ] Deploy to Vercel/Netlify

---

## 🎨 Adding Favicon

1. Create a `favicon.ico` file (16x16 and 32x32px)
2. Optionally create `apple-touch-icon.png` (180x180px)
3. Place in `src/app/` folder
4. Next.js will automatically detect and use them

Or use online tools:
- https://realfavicongenerator.net/
- https://favicon.io/

---

## 📄 License

This portfolio template is free to use. Customize it and make it your own!

---

**Built with ❤️ using Next.js and Tailwind CSS**

Happy coding! 🚀
