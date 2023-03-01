import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context";
import { ProjectProviderWrapper } from './context/projects.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper> 
        <ProjectProviderWrapper>
          <App />
        </ProjectProviderWrapper>
      </ThemeProviderWrapper> 
    </Router>
  </React.StrictMode>,
)
