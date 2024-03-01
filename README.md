**Vedaflix - Your Ultimate Soccer Video Player**

Vedaflix is a modern web application built with React.js and leveraging the power of React DnD for seamless drag-and-drop functionality. It provides users with an immersive experience to watch soccer videos, manage their playback, and customize their viewing preferences.

### Features:

1. **Watch Soccer Videos:**
   - Enjoy a vast collection of soccer videos from various sources.
   - Seamlessly play, pause, and loop videos for uninterrupted viewing pleasure.

2. **Drag and Drop Video List:**
   - Easily manage your video playlist by rearranging videos using intuitive drag-and-drop functionality.
   - Customize the order of videos according to your preference.

3. **Playback Control:**
   - Control video playback speed with options like 1x, 1.5x, and 2x to match your viewing pace.
   - Pause, play, and loop videos effortlessly for a tailored watching experience.

### Libraries Used:

- **React.js:** A powerful JavaScript library for building user interfaces.
- **React DnD:** Provides a set of React higher-order components to help implement drag-and-drop functionality.
- **React Player:** A lightweight React component for playing various media types, including videos.

### Future Updates:

1. **Light and Dark Mode:**
   - Toggle between light and dark themes for enhanced viewing comfort, regardless of the time of day.

2. **Like/Dislike Button:**
   - Engage with your favorite videos by liking or disliking them to provide feedback and personalize your recommendations.

3. **Sound Control:**
   - Adjust the volume level to your preference for an optimal audio experience.

### Mock Data:

```javascript
const videoData = [
  {
    id: "1",
    videoUrl: "https://example.com/video1",
    videoThumbnail: "thumbnail1.jpg",
    name: "Soccer Video 1",
    check: "",
  },
  // Add more video objects as needed
];
```

### Live Demo: https://vedaflix-app-1.onrender.com

Stay tuned for the live demo link to experience Vedaflix in action!

### Get Started:

1. Clone this repository.
2. Install dependencies using `yarn install`.
3. Run the development server with `yarn run dev`.
4. Explore the exciting world of soccer videos with Vedaflix!

For any inquiries or feedback, please contact okrahul.dev.

**Enjoy your soccer watching experience with Vedaflix!** 📺⚽️


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
