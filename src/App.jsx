import { useState } from 'react';
import './App.css';

const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/test_4gw6qC7VYf8V2sQeUU'; // Placeholder, replace with your Stripe Checkout link

function App() {
  const [form, setForm] = useState({ brand: '', email: '', website: '', product: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally: send form data to a backend or service like Formspree
    window.location.href = STRIPE_CHECKOUT_URL;
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h1>Reserve Your Spot: $5 Waitlist</h1>
      <p>
        <strong>For DTC & eCommerce Brands:</strong> Reduce cart abandonment and bounce rates with our AI-powered Product Q&A. Join the waitlist for exclusive early access!
      </p>
      {!submitted ? (
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="brand"
            placeholder="Brand Name"
            value={form.brand}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Work Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Website (optional)"
            value={form.website}
            onChange={handleChange}
          />
          <input
            type="text"
            name="product"
            placeholder="Product Type (optional)"
            value={form.product}
            onChange={handleChange}
          />
          <button type="submit" className="cta-btn">
            Join Waitlist – $5
          </button>
        </form>
      ) : (
        <div className="thank-you">
          <h2>Thank you!</h2>
          <p>You're on the waitlist. We'll notify you as soon as the pipeline is ready.</p>
        </div>
      )}
      <footer>
        <small>Secure payment via Stripe. Need help? Contact us.</small>
      </footer>
    </div>
  );
}

export default App;
