# Jammming 🎵

A responsive, dynamic music playlist creator built with React and styled with modern CSS Flexbox. This application was developed as a core portfolio project to master component architecture, unidirectional data flow, and advanced local state management.

## 🚀 Live Features

- **Interactive Search:** Browse a curated collection of track data locally.
- **Custom Playlist Builder:** Seamlessly add and remove tracks to a personalized playlist workspace.
- **Smart Duplicate Prevention (Custom Extension):** Built an automated filtering system that instantly hides songs from the search results once they are added to the playlist, ensuring a clean, duplicate-free user workflow.
- **Fully Responsive Layout:** Used custom Flexbox alignments and spacing to ensure a crisp, uncluttered user experience across modern devices.

## 🛠️ Tech Stack & Architecture

- **Front-End:** React 18+ (Functional Components, Hooks)
- **Styling:** Vanilla CSS3 (Flexbox Layout Module)
- **Environment:** Vite / Node.js
- **Version Control:** Git & GitHub (with rigorous commit message guidelines)

## 📐 Technical Design & Mock Architecture

Because this project is designed for localized portfolio review and testing environments, it utilizes a custom static data architecture (`mockData.js`) to rigorously test state and prop communication. 

Prior to implementing the duplicate filtering feature, a formal **Technical Design Document** was authored to analyze the computational efficiency of combining JavaScript `.filter()` with `.some()` during the React render phase, ensuring optimal front-end performance and maintaining a strict single source of truth.

## ⚙️ Local Setup Instructions

To run this project locally on your machine:

1. Clone the repository: `git clone https://github.com/MayaKirken/Jammming.git`
2. Navigate into the project directory: `cd jammming`
3. Install dependencies: `npm install`
4. Start the local development server: `npm run dev`
5. Open your browser and navigate to the localhost port indicated in your terminal (typically `http://localhost:5173`).
