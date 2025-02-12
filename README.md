# Modern Portfolio Website

A modern, responsive portfolio website built with React and cutting-edge web technologies. Features a sleek cyberpunk-inspired design with smooth animations, 3D elements, and a dark mode interface.

![Portfolio Preview](public/preview.png)

## ✨ Features

- 🎨 Modern UI/UX with Cyberpunk-inspired design
- 🌗 Dark mode optimized interface
- 🎭 Smooth page transitions and animations using Framer Motion
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎯 Interactive sections with scroll-based animations
- 🔮 3D model viewer integration
- 🚀 Optimized performance with code-splitting and lazy loading
- 🎨 Custom UI components with shadcn/ui
- 🌈 Beautiful gradient effects and animations

## 🛠️ Technologies Used

- **Frontend Framework**: React + Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **UI Components**: shadcn/ui
- **Icons**: Lucide Icons
- **Code Quality**: ESLint + Prettier
- **Performance**: Code splitting, lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
portfolio/
├── public/              # Static files
│   ├── models/         # 3D models
│   └── resume.pdf      # Resume file
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   └── magicui/   # Special effect components
│   ├── lib/           # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── assets/        # Images and other assets
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
└── package.json       # Project dependencies
```

## 🎯 Key Features Explained

### Responsive Navigation
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Active section highlighting
- Animated navigation indicators

### Interactive 3D Model
- Custom 3D model viewer
- Interactive animations
- Optimized loading and performance

### Performance Optimizations
- Debounced scroll handlers
- Code splitting for optimal loading
- Image optimization
- Efficient state management

### Modern UI Elements
- Custom animated buttons
- Gradient effects
- Smooth transitions
- Loading animations

## 🎨 Customization

### Colors and Theme
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      neon: {
        cyan: '#00fff5',
        purple: '#bf00ff',
        pink: '#ff00ff',
      }
    }
  }
}
```

### Content
Update your personal information in the respective component files:
- `src/components/Hero.jsx` - Main introduction
- `src/components/Experience.jsx` - Work experience
- `src/components/Projects.jsx` - Portfolio projects
- `src/components/Skills.jsx` - Technical skills
- `src/components/Contact.jsx` - Contact information

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The site can be deployed to any static hosting service:

1. Build the project
```bash
npm run build
# or
yarn build
```

2. Deploy the `dist` folder to your hosting service of choice:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@your_X](https://x.com/navneet35442604?s=21)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/navi1322/portfolio)

---

Made with ❤️ by [Your Name]
