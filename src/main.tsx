import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Always reopen at the top on reload: mobile browsers (notably Chrome on iOS)
// restore a slightly-off scroll position, which leaves the sticky header over
// the hero. Links to a section (#work etc.) still jump to that section.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
if (!location.hash) window.scrollTo(0, 0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
