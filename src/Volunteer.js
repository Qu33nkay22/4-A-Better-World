import React, { useState } from "react";
import "./Volunteer.css"; 

export default function VolunteerSignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    availability: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for signing up to volunteer!");
    setForm({ name: "", email: "", availability: "", message: "" });
  };

  return (
    <div>
        <h2 className="volunteer-title">Volunteer At Our Clinton Township Location!</h2>
        <p>At For a Better World, we believe that everyone has something special to offer—and we’d love to have you on board. Whether you're helping kids explore nature, tending to the garden, spending time with our animals (think turtles, frogs, birds, and furry friends), or lending a hand at one of our science fairs or community events, there’s a role for you here. Our space is full of life, learning, and laughter—with observation rooms, a lake, a playground, shops, and more—and it all runs better with kind, curious people like you. Volunteering here isn’t just about giving your time—it’s about being part of something meaningful. Come join us!
        </p>

        <div className="volunteer-container">
        
        
        <form onSubmit={handleSubmit} className="volunteer-form">
            <label htmlFor="name" className="volunteer-label">Name</label>
            <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="volunteer-input"
            />

            <label htmlFor="email" className="volunteer-label">Email</label>
            <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="volunteer-input"
            />

            <label htmlFor="availability" className="volunteer-label">Availability</label>
            <input
            id="availability"
            name="availability"
            value={form.availability}
            onChange={handleChange}
            className="volunteer-input"
            />

            <label htmlFor="message" className="volunteer-label">Message</label>
            <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="volunteer-textarea"
            rows="4"
            ></textarea>

            <button type="submit" className="volunteer-button">Sign Up</button>
        </form>
        </div>
    </div>
  );
}
