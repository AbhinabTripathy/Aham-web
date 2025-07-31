import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="logo-container">
          <h1 className="site-title placeholder">AhamCore<span className="domain">.com</span></h1>
          <div className="logo-wrapper">
            <img src="/logo.png" alt="AhamCore Logo" className="aham-logo" />
          </div>
        </div>
        <div className="text-container">
          <h2 className="tagline placeholder">new creator era</h2>
          <p className="coming-soon placeholder">coming soon......</p>
          <p className="website-link">Please visit our website, <a href="https://aham-mu.vercel.app/" target="_blank" rel="noopener noreferrer">Click Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default App
