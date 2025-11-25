import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  return (
    <div className="app">
      {/* SECTION 1: NAV + HERO */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">AdShark</div>
          <div className="nav-menu">
            <a href="#features">Features</a>
            <a href="#problem">Problem</a>
            <a href="#solutions">Solutions</a>
            <a href="#setup">Setup</a>
            <a href="#audience">Audience</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="nav-right">
            <a href="#login" className="login-link">Login</a>
            <button className="cta-button">Book Demo</button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb"></div>
          <div className="orbit-ring orbit-1"></div>
          <div className="orbit-ring orbit-2"></div>
          <div className="orbit-ring orbit-3"></div>
        </div>

        <div className="hero-content">
          <div className="badge">★ Smarter spend. Better returns</div>
          <h1 className="hero-headline">Unlock Clarity on Every Ad Dollar</h1>
          <p className="hero-subtext">
            AdShark is your single source of truth for marketing attribution. Track every touchpoint, measure real ROI, and optimize spend across all channels.
          </p>

          <div className="hero-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button className="cta-button">Book Demo</button>
          </div>

          {/* Floating Logo Tiles */}
          <div className="floating-logos">
            <div className="logo-tile tile-1">
              <svg viewBox="0 0 100 100" className="logo-icon">
                <rect x="10" y="10" width="35" height="35" fill="#FF9900"/>
                <rect x="55" y="10" width="35" height="35" fill="#FF9900"/>
                <rect x="10" y="55" width="35" height="35" fill="#FF9900"/>
                <rect x="55" y="55" width="35" height="35" fill="#FF9900"/>
              </svg>
              <span>Amazon</span>
            </div>
            <div className="logo-tile tile-2">
              <svg viewBox="0 0 100 100" className="logo-icon">
                <circle cx="50" cy="30" r="15" fill="#96669F"/>
                <path d="M 50 50 Q 30 60 25 80 L 75 80 Q 70 60 50 50" fill="#96669F"/>
              </svg>
              <span>Meta</span>
            </div>
            <div className="logo-tile tile-3">
              <svg viewBox="0 0 100 100" className="logo-icon">
                <path d="M 50 20 L 80 80 L 50 65 L 20 80 Z" fill="#000000"/>
              </svg>
              <span>TikTok</span>
            </div>
            <div className="logo-tile tile-4">
              <svg viewBox="0 0 100 100" className="logo-icon">
                <rect x="20" y="20" width="15" height="60" fill="#4285F4"/>
                <rect x="42" y="35" width="15" height="45" fill="#EA4335"/>
                <rect x="64" y="25" width="15" height="55" fill="#FBBC04"/>
              </svg>
              <span>Google</span>
            </div>
            <div className="logo-tile tile-5">
              <svg viewBox="0 0 100 100" className="logo-icon">
                <path d="M 30 40 Q 50 20 70 40 Q 50 70 30 40" fill="#96BE3D" strokeWidth="3" stroke="#96BE3D" fill="none"/>
              </svg>
              <span>Shopify</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED LOGOS */}
      <section className="trusted-logos">
  <div className="logos-row">
    <img src="./logos/amazon-svgrepo-com.svg" className="logo" alt="Amazon" />
    <img src="./logos/shopify-svgrepo-com.svg" className="logo" alt="Shopify" />
    <img src="./logos/meta-logo-facebook-2-svgrepo-com.svg" className="logo" alt="Meta" />
    <img src="./logos/google-ads-svgrepo-com.svg" className="logo" alt="Google Ads" />
    <img src="./logos/tiktok-svgrepo-com.svg" className="logo" alt="TikTok" />
    <img src="./logos/amazon-svgrepo-com.svg" className="logo" alt="Amazon" />
  </div>
</section>


      {/* SECTION 3: PROBLEM SECTION */}
      <section className="problem-section" id="problem">
        <div className="problem-container">
          <div className="problem-left">
            <div className="badge">★ Smarter spend. Better returns</div>
            <h2>The Attribution Problem Nobody Solved Well</h2>
            <p>
              iOS 14.5 broke tracking. Cookies are dying. Your dashboards don't match your bank account. You're left with a patchwork of tools, conflicting data, and no clear path to optimization.
            </p>
            <ul className="problem-list">
              <li>Hacked-together spreadsheets that break every month</li>
              <li>Inflated dashboards that don't match</li>
              <li>Vanity tools with pretty charts but no actionable direction</li>
            </ul>
          </div>
          <div className="problem-right">
            <div className="illustration-card">
             <svg viewBox="0 0 300 300" className="problem-illustration">
  {/* Circular clipping mask */}
  <clipPath id="imageCircle">
    <circle cx="150" cy="150" r="80" />
  </clipPath>

  {/* Centered Image */}
  <image
  href="/emotions/Confused.png"
  x="0"
  y="0"
  width="300"
  height="300"
/>

</svg>


            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SOLUTIONS */}
      <section className="solutions-section" id="solutions">
        <div className="section-header">
          <div className="badge">★ Our Solutions</div>
          <h2>A Clearer Picture = Better Decisions</h2>
          <p>We don't just show numbers. We guide action.</p>
        </div>

        <div className="solutions-grid">
          <div className="solution-card fade-up-1">
            <div className="solution-icon-box">
              <svg viewBox="0 0 100 100" className="solution-icon">
                <rect x="20" y="30" width="20" height="40" fill="#7C3AED"/>
                <rect x="50" y="20" width="20" height="50" fill="#A78BFA"/>
                <rect x="80" y="35" width="20" height="35" fill="#DDD6FE"/>
              </svg>
            </div>
            <h3>Unified Attribution Models</h3>
            <p>Track every customer interaction across all channels with accuracy that actually works.</p>
          </div>

          <div className="solution-card fade-up-2">
            <div className="solution-icon-box">
              <svg viewBox="0 0 100 100" className="solution-icon">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#7C3AED" strokeWidth="3"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="#A78BFA" strokeWidth="2"/>
                <circle cx="50" cy="50" r="10" fill="#7C3AED"/>
              </svg>
            </div>
            <h3>First-Party Transparent Data</h3>
            <p>Privacy-safe, platform-independent tracking that you actually own and control.</p>
          </div>

          <div className="solution-card fade-up-3">
            <div className="solution-icon-box">
              <svg viewBox="0 0 100 100" className="solution-icon">
                <rect x="25" y="30" width="50" height="40" fill="none" stroke="#7C3AED" strokeWidth="2" rx="4"/>
                <line x1="35" y1="40" x2="65" y2="40" stroke="#7C3AED" strokeWidth="2"/>
                <line x1="35" y1="50" x2="65" y2="50" stroke="#A78BFA" strokeWidth="2"/>
                <line x1="35" y1="60" x2="50" y2="60" stroke="#DDD6FE" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Easy-to-Read Dashboards</h3>
            <p>Insights that make sense at a glance. No confusion. No endless clicking.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: CORE FEATURES */}
      <section className="core-features" id="features">
        <div className="section-header">
          <div className="badge">★ Core Features</div>
          <h2>Everything You Need to Measure What Matters</h2>
          <p>Trusted by growth leaders who demand real results…</p>
        </div>

        <div className="features-grid">
          <div className="feature-block">
            <h3>Multi-Touch Attribution</h3>
            <p>Track every interaction across Meta, Google, TikTok, Shopify, and more. See which touchpoints actually drive conversions.</p>
            <div className="feature-graphic">
              <div className="platform-icons">
                <div className="icon-platform">M</div>
                <div className="icon-platform">G</div>
                <div className="icon-platform">T</div>
                <div className="icon-platform central">🛒</div>
                <div className="icon-platform">S</div>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <h3>Channel-Agnostic ROAS</h3>
            <p>Return on ad spend without platform bias. Compare performance across all channels fairly and accurately.</p>
            <div className="feature-graphic">
              <svg viewBox="0 0 200 150" className="dashboard-preview">
                <rect x="10" y="10" width="180" height="130" fill="#F3F0FF" rx="8"/>
                <line x1="30" y1="100" x2="170" y2="100" stroke="#D4C5F9" strokeWidth="2"/>
                <line x1="30" y1="100" x2="30" y2="20" stroke="#D4C5F9" strokeWidth="2"/>
                <polyline points="40,80 60,50 80,65 100,35 120,55 140,40 160,70" fill="none" stroke="#7C3AED" strokeWidth="2"/>
                <circle cx="40" cy="80" r="3" fill="#7C3AED"/>
                <circle cx="60" cy="50" r="3" fill="#7C3AED"/>
                <circle cx="80" cy="65" r="3" fill="#7C3AED"/>
              </svg>
            </div>
          </div>

          <div className="feature-block">
            <h3>First-Party Pixel</h3>
            <p>Privacy-safe tracking that works. No cookies needed. Full control, zero compliance issues.</p>
            <div className="feature-graphic">
              <svg viewBox="0 0 100 100" className="pixel-icon">
                <rect x="20" y="20" width="60" height="60" fill="none" stroke="#7C3AED" strokeWidth="2" rx="4"/>
                <path d="M 35 50 L 50 65 L 65 35" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CREATIVE INSIGHTS + PROFITABILITY */}
      <section className="insights-section">
        <div className="insights-container">
          <div className="insights-card">
            <h3>Creative-Level Insights</h3>
            <p>Identify winning creatives instantly. See which ads drive ROI and which drain budget.</p>
            <div className="creative-preview">
              <div className="creative-badge">Winner</div>
              <div className="creative-metric">3.5% CTR</div>
              <div className="creative-metric">250% ROAS</div>
              <div className="profitable-badge">Profitable Ads</div>
            </div>
          </div>

          <div className="metrics-card">
            <h3>Profitability Metrics</h3>
            <p>Track CAC, AOV, LTV and get a true picture of unit economics.</p>
            <div className="metrics-float">
              <div className="metric-item">
                <div className="metric-label">CAC</div>
                <div className="metric-value">$400</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">LTV</div>
                <div className="metric-value">$4500</div>
              </div>
              <div className="metric-item">
                <div className="metric-label">Margin</div>
                <div className="metric-value">35%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TARGET AUDIENCE */}
      <section className="audience-section">

  <div className="audience-header">
    <div className="badge">★ Target Audience</div>
    <h2>Built for Performance-Obsessed Teams</h2>
    <p>Trusted by growth leaders who demand real results, not just pretty reports.</p>
  </div>

  <div className="audience-radial">

    {/* Center + rings */}
    <div className="radial-rings">
      <div className="ring ring-1"></div>
      <div className="ring ring-2"></div>
      <div className="ring ring-3"></div>
    </div>

    <div className="center-node">
      <span>AdShark</span>
    </div>

    {/* TOP LEFT */}
    <div className="audience-card top-left">
      <div className="icon-box">
        <img src="/icons/building.png" alt="icon" />
      </div>
      <h4>DTC Brands ($100k+/mo)</h4>
      <p>Scale profitably with confidence in your attribution data.</p>
    </div>

    {/* TOP RIGHT */}
    <div className="audience-card top-right">
      <div className="icon-box">
        <img src="/icons/chart.png" alt="icon" />
      </div>
      <h4>Performance Marketers</h4>
      <p>Make data-driven optimizations that actually move the needle.</p>
    </div>

    {/* BOTTOM LEFT */}
    <div className="audience-card bottom-left">
      <div className="icon-box">
        <img src="/icons/target.png" alt="icon" />
      </div>
      <h4>Agencies</h4>
      <p>Deliver transparent reporting and prove ROI to your clients.</p>
    </div>

    {/* BOTTOM RIGHT */}
    <div className="audience-card bottom-right">
      <div className="icon-box">
        <img src="/icons/crown.png" alt="icon" />
      </div>
      <h4>Founders & CMOs</h4>
      <p>Get the clear picture you need to allocate budget with confidence.</p>
    </div>

    {/* Divider lines */}
    <div className="vertical-line"></div>
    <div className="horizontal-line"></div>

  </div>

</section>


      {/* SECTION 8: SETUP PROCESS */}
      <section className="setup-section" id="setup">
        <div className="setup-container">
          <div className="setup-left">
            <h2>Setup That Doesn't Suck</h2>
            <p>Trusted by growth leaders worldwide. Get insights in minutes, not months.</p>
          </div>

          <div className="setup-right">
            <div className="setup-timeline">
              <div className="timeline-item">
                <div className="timeline-number">1</div>
                <div className="timeline-label">Connect Platforms</div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-item">
                <div className="timeline-number">2</div>
                <div className="timeline-label">Install Pixel</div>
              </div>
              <div className="timeline-dot"></div>
              <div className="timeline-item">
                <div className="timeline-number">3</div>
                <div className="timeline-label">Get Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header">
          <div className="badge">★ Testimonials</div>
          <h2>What Our Clients Say</h2>
          <p>Trusted by growth leaders across industries.</p>
        </div>

        <div className="testimonials-carousel" onScroll={handleScroll}>
          <div className="testimonial-card">
            <div className="testimonial-logo">Meta</div>
            <div className="testimonial-quote">"AdShark gave us clarity on our ad spend for the first time. Our ROAS improved by 40% in the first month."</div>
            <div className="testimonial-author">
              <div className="author-name">Mike Johnson</div>
              <div className="author-role">Performance Marketing Lead</div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-logo">TikTok</div>
            <div className="testimonial-quote">"Finally, a tool that actually works across our channels. No more conflicting reports. Just truth."</div>
            <div className="testimonial-author">
              <div className="author-name">James Patel</div>
              <div className="author-role">Growth Manager</div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-logo">Amazon</div>
            <div className="testimonial-quote">"The insights we get from AdShark have transformed how we allocate budget. ROI tracking is now effortless."</div>
            <div className="testimonial-author">
              <div className="author-name">Oliver Scott</div>
              <div className="author-role">E-commerce Director</div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-logo">Shopify</div>
            <div className="testimonial-quote">"Our agency couldn't live without AdShark now. Client reporting is transparent and data-backed."</div>
            <div className="testimonial-author">
              <div className="author-name">Isabella Brooks</div>
              <div className="author-role">Agency Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="final-cta">
        <div className="cta-background">
          <svg viewBox="0 0 1000 400" className="wave-graphic" preserveAspectRatio="none">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#F3F0FF', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#E9D5FF', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            <path d="M 0 200 Q 250 100 500 200 T 1000 200 L 1000 400 L 0 400 Z" fill="url(#waveGradient)"/>
          </svg>
        </div>

        <div className="cta-content">
          <div className="badge">★ Next Step</div>
          <h2>Ready to Grow Smarter?</h2>
          <p>AdShark gives you the clarity to scale profitably.</p>

          <div className="cta-buttons">
            <button className="cta-button primary">Start Free Trial</button>
            <button className="cta-button secondary">Book Demo</button>
          </div>

          <div className="cta-logos">
            <span className="cta-logo">Google</span>
            <span className="cta-logo">TikTok</span>
            <span className="cta-logo">Amazon</span>
            <span className="cta-logo">Shopify</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">AdShark</div>
            <p>Your single source of truth for marketing attribution.</p>
            <div className="footer-email-form">
              <input type="email" placeholder="Enter your email" />
              <button className="cta-button">Book Demo</button>
            </div>
          </div>

          <div className="footer-column">
            <h4>Products</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#api">API</a>
            <a href="#integrations">Integrations</a>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#support">Support</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>

          <div className="footer-right">
            <div className="support-contact">
              <p>support@adshark.io</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="social-icons">
              <a href="#tiktok">f</a>
              <a href="#x">𝕏</a>
              <a href="#linkedin">in</a>
              <a href="#instagram">📷</a>
              <a href="#facebook">fb</a>
            </div>
          </div>
        </div>
        <div className="footer-divider"></div>
      </footer>
    </div>
  )
}

export default App
