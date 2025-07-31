import './App.css'

function App() {
  return (
    <div className="container">
      <div className="wave-background"></div>
      <svg style={{ display: 'none' }}>
        <filter id="wave-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" dur="60s" values="0.01 0.01;0.015 0.008;0.01 0.012;0.01 0.01" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
      <div className="wave-overlay"></div>
      <div className="content-wrapper">
        <div className="logo-container">
          <h1 className="site-title placeholder">AhamCore<span className="domain">.com</span></h1>
          <div className="logo-wrapper">
            <img src="/logo.png" alt="AhamCore Logo" className="aham-logo" />
          </div>
        </div>
        <div className="text-container">
          <h2 className="coming-soon placeholder"> Coming Soon</h2>
          
        <p className="website-link placeholder">Explore courses, <a href="https://aham-mu.vercel.app/" target="_blank" rel="noopener noreferrer">Click Here</a></p>
          <p className="tagline placeholder">new creator era</p>
        </div>
      </div>
    </div>
  )
}

export default App
