import React, { useState } from "react";
import "./Donation.css"; // Link your own styles

export default function DonationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your generous donation!");
    setForm({ name: "", email: "", amount: "", message: "" });
  };

  return (
    <div>
        <h2 className="donation-title">Support For a Better World</h2>
      <p className="donation-description">
        Every contribution helps us grow our mission of connecting people with nature,
        animals, science, and sustainable living. Your support makes workshops,
        animal care, science education, and community programs possible.
      </p>

        <div className="donation-container">
        

        <form onSubmit={handleSubmit} className="donation-form">
            <label className="donation-label" htmlFor="name">Name</label>
            <input
            className="donation-input"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            />

            <label className="donation-label" htmlFor="email">Email</label>
            <input
            className="donation-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <label className="donation-label" htmlFor="amount">Donation Amount ($)</label>
            <input
            className="donation-input"
            type="number"
            id="amount"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            required
            min="1"
            />

            <label className="donation-label" htmlFor="message">Message (Optional)</label>
            <textarea
            className="donation-textarea"
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            ></textarea>

            <button type="submit" className="donation-button">Donate Now</button>
        </form>
        </div>
    </div>
  );
}