import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'  // ✅ Add Font Awesome CSS

createRoot(document.getElementById("root")!).render(
  <App />
)

/*
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
*/