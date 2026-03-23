// Shared nav HTML - call renderNav() in each page
function renderNav() {
  document.getElementById('nav-placeholder').innerHTML = `
  <nav id="navbar">
    <a href="index.html" class="logo">
      <div class="logo-symbol">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#00d4ff" stroke-width="1.5"/>
          <path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M16 13v6M13 16h6" stroke="#00d4ff" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
      <span class="logo-text">Code<span>Infinity</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="work.html">Work</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="team.html">Team</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="contact.html" class="nav-cta">Get a Quote</a>
    <div class="mobile-menu-btn" id="mobileMenuBtn"><span></span><span></span><span></span></div>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-close" id="mobileNavClose">✕</div>
    <a href="index.html">Home</a>
    <a href="services.html">Services</a>
    <a href="work.html">Work</a>
    <a href="about.html">About</a>
    <a href="team.html">Team</a>
    <a href="contact.html">Contact</a>
  </div>`;
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
  <footer>
    <div class="footer-infinity">∞</div>
    <div class="footer-top">
      <div>
        <a href="index.html" class="logo">
          <div class="logo-symbol">
            <svg viewBox="0 0 32 32" fill="none"><path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="#00d4ff" stroke-width="1.5"/><path d="M10 16c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round"/><path d="M16 13v6M13 16h6" stroke="#00d4ff" stroke-width="1.5" stroke-linecap="round"/></svg>
          </div>
          <span class="logo-text">Code<span>Infinity</span></span>
        </a>
        <p class="footer-desc">Building the digital future, one line of code at a time. Chennai's premier IT solutions partner.</p>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul class="footer-links">
          <li><a href="services.html">Web Development</a></li>
          <li><a href="services.html">Mobile Apps</a></li>
          <li><a href="services.html">Cloud & DevOps</a></li>
          <li><a href="services.html">AI & ML</a></li>
          <li><a href="services.html">Cybersecurity</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="work.html">Our Work</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Connect</h4>
        <ul class="footer-links">
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter / X</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2026 Code Infinity IT Solutions. All rights reserved. Made with ♥ in Chennai.</div>
      <div class="footer-socials">
        <a class="social-btn" href="#">in</a>
        <a class="social-btn" href="#">gh</a>
        <a class="social-btn" href="#">tw</a>
        <a class="social-btn" href="#">ig</a>
      </div>
    </div>
  </footer>`;
}
