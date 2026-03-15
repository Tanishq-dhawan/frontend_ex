import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from "@clerk/react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const renderMissingKey = () => (
  <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
    <h1 style={{ color: '#f24b7a' }}>Missing Clerk Publishable Key</h1>
    <p>Please add your <strong>VITE_CLERK_PUBLISHABLE_KEY</strong> to the <code>.env</code> file.</p>
    <p>Get this key from your <a href="https://dashboard.clerk.com" style={{color: '#236af4', textDecoration: 'underline'}}>Clerk Dashboard</a>.</p>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {!PUBLISHABLE_KEY || PUBLISHABLE_KEY === 'pk_test_...' ? (
      renderMissingKey()
    ) : (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <App />
      </ClerkProvider>
    )}
  </StrictMode>,
)
