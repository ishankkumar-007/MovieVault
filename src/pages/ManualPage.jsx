import React from 'react';
import '../scss/ManualPage.scss'; 

const ManualPage = () => {
  return (
    <div className="manual-page">
      <div className="manual-content">
        <h1 className="manual-title">MovieVault - User Manual</h1>
        <p className="manual-description">
          Welcome to the Movie Streaming Service. This manual will guide you on how to navigate the platform and enjoy your favorite movies and shows.
        </p>
        
        {/* Getting Started */}
        <section className="manual-section">
          <h2>Getting Started</h2>
          <p>
            To get started, follow these simple steps:
          </p>
          <ul>
            <li>Sign up for an account by entering your email and creating a password.</li>
            <li>Browse through the categories or use the search bar to find movies and shows.</li>
            <li>Start watching instantly or add movies to your watchlist for later.</li>
          </ul>
        </section>

        {/* Account Setup */}
        <section className="manual-section">
          <h2>Account Setup</h2>
          <p>
            To set up your account, you need to:
          </p>
          <ol>
            <li>Visit the sign-up page and provide your basic details.</li>
            <li>Choose a subscription plan based on your preferences.</li>
            <li>Verify your email address to activate your account.</li>
          </ol>
        </section>

        {/* Common Issues */}
        <section className="manual-section">
          <h2>Common Issues</h2>
          <p>If you encounter any issues while using the service, here are some common problems and solutions:</p>
          <ul>
            <li><strong>Issue 1:</strong> Can't log in - Make sure your email and password are correct. You can reset your password if needed.</li>
            <li><strong>Issue 2:</strong> Video buffering - Ensure you have a stable internet connection and reduce streaming quality if necessary.</li>
            <li><strong>Issue 3:</strong> Can't find a movie/show - Use the search bar or check the available categories to locate the content.</li>
          </ul>
        </section>

        {/* Troubleshooting */}
        <section className="manual-section">
          <h2>Troubleshooting</h2>
          <p>If you are facing issues, here are some steps to resolve common errors:</p>
          <ol>
            <li>Check your internet connection and ensure it is stable.</li>
            <li>Update the streaming app to the latest version.</li>
            <li>Clear your browser cache or app data to fix loading issues.</li>
            <li>Contact support if the issue persists, or refer to the FAQ section for more help.</li>
          </ol>
        </section>

        {/* Frequently Asked Questions */}
        <section className="manual-section">
          <h2>Frequently Asked Questions</h2>
          <p>Here are some answers to the most common questions about the Movie Streaming Service:</p>
          <ul>
            <li><strong>How do I change my subscription plan?</strong> You can do this in the account settings under 'Subscription'.</li>
            <li><strong>How can I watch movies offline?</strong> Download movies and shows to your device from the app to watch them without an internet connection.</li>
            <li><strong>Can I stream on multiple devices?</strong> Yes, you can stream on multiple devices with your account at the same time, depending on your subscription plan.</li>
          </ul>
        </section>

        {/* Contacting Support */}
        <section className="manual-section">
          <h2>Contacting Support</h2>
          <p>If you need further assistance, reach out to our support team:</p>
          <ul>
            <li><strong>Email:</strong> support@streamingservice.com</li>
            <li><strong>Phone:</strong> +1 800 123 4567</li>
            <li><strong>Live Chat:</strong> Available 24/7 through our website.</li>
          </ul>
        </section>
        
        {/* Additional Resources */}
        <section className="manual-section">
          <h2>Additional Resources</h2>
          <p>For more help, tips, and tricks, visit our <a href="https://www.streamingservice.com/help" target="_blank" rel="noopener noreferrer">Help Center</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default ManualPage;