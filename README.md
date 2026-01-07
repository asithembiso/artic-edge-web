# PixelCraft Studio - Professional Design Studio Website

A modern, fully responsive website for a web/app design studio. Built with pure HTML, CSS, and JavaScript for optimal performance.

## 🌟 Features

### Pages
- **Homepage** - Hero, services, portfolio, testimonials, FAQ, contact form with Google Maps
- **About Page** - Team profiles, mission, values, animated stats, process timeline

### Key Features
- ✅ **Fully Responsive** - Mobile-first design, optimized for all devices
- ✅ **Interactive Portfolio** - Click items for detailed modal case studies
- ✅ **Working Contact Form** - Ready for Formspree, EmailJS, or custom backend
- ✅ **Google Maps Integration** - Embedded location map in contact section
- ✅ **FAQ Accordion** - Expandable questions with smooth animations
- ✅ **Testimonials** - Customer reviews section
- ✅ **Newsletter Signup** - Email capture with validation
- ✅ **Mobile Navigation** - Collapsible menu for mobile
- ✅ **Form Validation** - Real-time input validation
- ✅ **Scroll Progress** - Visual reading progress indicator
- ✅ **Smooth Animations** - Fade-ins, hover effects, transitions

### Technical
- **No Dependencies** - Pure vanilla JavaScript, no frameworks
- **Lightweight** - Fast loading, optimized performance
- **SEO Friendly** - Semantic HTML, proper meta tags
- **Accessible** - ARIA labels, keyboard navigation

## 📁 File Structure

```
web/
├── index.html              # Main homepage
├── about.html              # About page
├── styles.css              # Main stylesheet
├── about.css               # About page styles
├── script.js               # Main JavaScript
├── about.js                # About page animations
├── data.js                 # Content data
└── README.md               # Documentation
```

## 🚀 Quick Start

1. **Open the site**: Simply open `index.html` in a browser

2. **Use local server** (recommended):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```

3. **Access**: Navigate to `http://localhost:8000`

## 📝 Setup Contact Form

The contact form supports multiple integration options:

### Option 1: Formspree (Easiest - Recommended)

1. Sign up at [formspree.io](https://formspree.io/)
2. Create a new form and get your Form ID
3. Update `index.html` form tag with your Form ID:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Done! Form submissions will be emailed to you

### Option 2: EmailJS (No Backend Needed)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Get your Service ID and Template ID
3. Add EmailJS SDK before closing `</body>` tag in `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   <script>emailjs.init("YOUR_PUBLIC_KEY");</script>
   ```
4. Uncomment EmailJS code in `script.js` (search for "Option 3")

### Option 3: Custom Backend

Uncomment and modify the backend API code in `script.js` to point to your server.

## 🗺️ Update Google Maps

Replace the `src` attribute in the iframe (in `index.html` contact section) with your location:

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in the contact section

Or generate embed URL at: `https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE`

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --primary-dark: #4f46e5;   /* Darker shade */
    --secondary: #ec4899;       /* Secondary color */
    --accent: #8b5cf6;          /* Accent color */
}
```

### Update Content

Edit `data.js` to update:
- Portfolio items
- Team members  
- Services
- Testimonials
- FAQs

### Add/Remove Sections

Each section in `index.html` is clearly marked with comments. Simply delete or duplicate sections as needed.

## 📱 Mobile Optimization

The site is optimized for mobile with:
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Touch-friendly buttons and navigation
- Optimized hero section for small screens
- Flexible stats layout that adapts to screen size
- Collapsible mobile menu
- Hidden decorative elements on small screens for better UX

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Quick Deploy Options

**Netlify** (Recommended):
1. Drag and drop the folder to [netlify.com](https://www.netlify.com/)
2. Done!

**Vercel**:
```bash
npx vercel
```

**GitHub Pages**:
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch

**Traditional Hosting**:
Upload all files via FTP to your web server.

## 📊 Features Breakdown

### Portfolio Modal
Click any portfolio item to see:
- Full project description
- Key features
- Technologies used
- Results achieved
- CTA button

### Contact Form Fields
- Name (required)
- Email (required)
- Phone (optional)
- Service selection (required)
- Budget range (optional)
- Message (required)
- Newsletter opt-in (optional)

### FAQ Section
- 6 common questions
- Smooth expand/collapse
- Auto-close other items

## 🔒 Security Notes

- Forms need backend validation in production
- Add CSRF protection
- Implement rate limiting
- Use HTTPS
- Sanitize all inputs

## 📈 Performance

- **No external dependencies** - Faster loading
- **Optimized CSS** - Minimal file size
- **Efficient JavaScript** - No unnecessary code
- **Mobile-first approach** - Better mobile performance

## 💡 Tips

1. **Images**: Replace gradient backgrounds with real project images
2. **Content**: Update all placeholder text with your actual content
3. **Links**: Update social media links in footer
4. **Analytics**: Add Google Analytics or similar tracking
5. **SEO**: Update meta descriptions for better search ranking
6. **Forms**: Configure Formspree or EmailJS for working contact form
7. **Maps**: Update Google Maps embed with your actual location

## 🆘 Troubleshooting

**Form not working?**
- Check if you've configured Formspree/EmailJS
- Open browser console for error messages
- Verify form action URL is correct

**Map not showing?**
- Check internet connection
- Verify iframe src is valid
- Check browser console for errors

**Mobile menu not opening?**
- Check script.js is loaded
- Clear browser cache
- Verify JavaScript is enabled

**Hero section looks broken on mobile?**
- Clear browser cache
- Check responsive styles are loading
- Test on actual device, not just browser resize

## 📧 Support

For customization questions:
1. Check inline HTML comments
2. Review data.js structure
3. Test on multiple devices
4. Check browser console for errors

## 📄 License

Free to use and customize for your projects.

---

**Built with ❤️ using pure HTML, CSS, and JavaScript**

No frameworks • No dependencies • Just clean code
