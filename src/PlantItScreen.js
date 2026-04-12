import React from 'react';
import './App.css';

export default function PlantItScreen() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="navbar-inner">
          <a href="/" className="navbar-logo">
            IRUOBE<span>.</span>
          </a>
          <div className="navbar-links">
            <a href="/">← Back to Portfolio</a>
          </div>
        </div>
      </nav>

      <section className="privacy-policy">
        <div className="privacy-inner">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">Plant IT Mobile Application</p>
          <p className="privacy-date">Last updated: April 2026</p>

          <div className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Plant IT ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information 
              when you use our mobile application.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. Information We Collect</h2>
            
            <h3>Account Information</h3>
            <p>When you create an account, we collect:</p>
            <ul>
              <li>Email address</li>
              <li>Display name</li>
              <li>Authentication credentials (managed securely by Firebase)</li>
            </ul>

            <h3>Plant Data</h3>
            <p>When you use our plant care features, we collect:</p>
            <ul>
              <li>Plant photos you upload</li>
              <li>Plant names, species, and locations you provide</li>
              <li>Care task history and completion status</li>
              <li>AI-generated health assessments</li>
            </ul>

            <h3>Location Data (Optional)</h3>
            <p>
              With your permission, we access your device's location to provide 
              weather-based plant care recommendations. This data is not stored 
              on our servers.
            </p>

            <h3>Usage Data</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>Feature usage for rate limiting purposes</li>
              <li>Error logs for improving app stability</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li>Provide AI-powered plant health analysis</li>
              <li>Generate personalized care schedules</li>
              <li>Deliver weather-based recommendations</li>
              <li>Maintain and improve our services</li>
              <li>Enforce usage limits to ensure fair access</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Data Storage & Security</h2>
            <p>Your data is stored securely using:</p>
            <ul>
              <li><strong>Firebase Authentication</strong> — for secure account management</li>
              <li><strong>Amazon Web Services (AWS)</strong> — for encrypted data storage</li>
              <li><strong>Amazon S3</strong> — for secure image storage with time-limited access</li>
            </ul>
            <p>
              All data transmission is encrypted using industry-standard HTTPS protocols.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Firebase (Google)</strong> — Authentication</li>
              <li><strong>AWS Bedrock</strong> — AI plant analysis</li>
              <li><strong>Open-Meteo</strong> — Weather data (no personal data shared)</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active. You may request 
              deletion of your account and associated data at any time by contacting us.
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for optional features (e.g., location)</li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>8. Children's Privacy</h2>
            <p>
              Plant IT is not intended for children. We do not knowingly 
              collect personal information from children.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify 
              you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date.
            </p>
          </div>

          <div className="privacy-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="privacy-contact">
              <a href="mailto:iruobe20@gmail.com">iruobe20@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-copy">© 2026 Iruobe Akpatason.</span>
      </footer>
    </>
  );
}