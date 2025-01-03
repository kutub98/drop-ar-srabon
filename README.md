# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# drop-ar-srabon

Prerequisites
Before you begin, ensure you have the following installed:
Node.js (LTS version recommended)
npm or yarn (comes with Node.js)

1. run npm install
2. file structure
   ├── src
   │ ├── components # Reusable components
   │ ├── pages # Page components
   │ ├── styles # Tailwind CSS configurations
   │ ├── App.tsx # Main application component
   │ └── index.tsx # Entry point
   ├── public # Static assets
   ├── tailwind.config.js # Tailwind CSS configuration file
   ├── tsconfig.json # TypeScript configuration file
   └── package.json # Project metadata and scripts
   Useful Commands
   Running the Application

Start the development server:
If you're using npm:

npm start

Or if you're using yarn:

yarn start

This will start the development server and the app will be available at http://localhost:3000.

Build the production version:
If you're using npm:

npm run build

Or if you're using yarn:

yarn build

The build files will be generated in the build directory.

Run tests (if any):
If you're using npm:

npm test

Or if you're using yarn:
