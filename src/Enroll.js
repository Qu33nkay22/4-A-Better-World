import React, { useState } from "react";
import "./Enroll.css"; // 

export default function EnrollmentForm() {
  const [role, setRole] = useState("self");
  const [form, setForm] = useState({
    parentName: "",
    participantName: "",
    age: "",
    email: "",
    phone: "",
    program: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for enrolling! We’ll be in touch soon.");
    setForm({
      parentName: "",
      participantName: "",
      age: "",
      email: "",
      phone: "",
      program: "",
      notes: "",
    });
    setRole("self");
  };

  return (
    <div>    
        <h2 className="enrollment-title">Enroll in Our Summer Camp or Workshops</h2>
      <p className="enrollment-description">
        Whether you're signing up your child or yourself, we're excited to have you join
        us at For a Better World for a season full of learning, animals, nature, and fun!
      </p>
        <div className="enrollment-container">
        

        <form onSubmit={handleSubmit} className="enrollment-form">
            <label className="enrollment-label">I am enrolling:</label>
            <div className="enrollment-role-options">
            <label>
                <input
                type="radio"
                name="role"
                value="self"
                checked={role === "self"}
                onChange={() => setRole("self")}
                />
                <span className="checkmark"></span>
                Myself
            </label>
            <label>
                <input
                type="radio"
                name="role"
                value="child"
                checked={role === "child"}
                onChange={() => setRole("child")}
                />
                <span className="checkmark"></span>
                My Child
            </label>
            </div>

            {role === "child" && (
            <>
                <label className="enrollment-label" htmlFor="parentName">
                Parent/Guardian Name
                </label>
                <input
                className="enrollment-input"
                type="text"
                id="parentName"
                name="parentName"
                value={form.parentName}
                onChange={handleChange}
                required
                />
            </>
            )}

            <label className="enrollment-label" htmlFor="participantName">
            {role === "child" ? "Child's Full Name" : "Your Full Name"}
            </label>
            <input
            className="enrollment-input"
            type="text"
            id="participantName"
            name="participantName"
            value={form.participantName}
            onChange={handleChange}
            required
            />

            <label className="enrollment-label" htmlFor="age">
            Age
            </label>
            <input
            className="enrollment-input"
            type="number"
            id="age"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            min="1"
            />

            <label className="enrollment-label" htmlFor="email">
            Email
            </label>
            <input
            className="enrollment-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <label className="enrollment-label" htmlFor="phone">
            Phone Number
            </label>
            <input
            className="enrollment-input"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            />

            <label className="enrollment-label" htmlFor="program">
            Program Interested In
            </label>
            <select
            className="enrollment-input"
            id="program"
            name="program"
            value={form.program}
            onChange={handleChange}
            required
            >
            <option value="">-- Select a Program --</option>
            <option value="Summer Camp">Summer Camp</option>
            <option value="Gardening Workshop">Gardening Workshop</option>
            <option value="Science Fair">Science Fair</option>
            <option value="Animal Observation">Animal Observation</option>
            <option value="Computer Room Activities">Computer Room Activities</option>
            </select>

            <label className="enrollment-label" htmlFor="notes">
            Additional Notes (optional)
            </label>
            <textarea
            className="enrollment-textarea"
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            ></textarea>

            <button type="submit" className="enrollment-button">
            Submit Enrollment
            </button>
        </form>
        </div>
    </div>
  );
}