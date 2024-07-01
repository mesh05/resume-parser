"use client";
import { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    education: {
      institute: "",
      degree: "",
      year: "",
      GPA: "",
    },
    experience: {
      company: "",
      role: "",
      year: "",
    },
    skills: "",
    projects: [{ name: "", description: "" }],
    achievements: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Github:
        <input
          type="text"
          name="github"
          placeholder="Enter your Github profile"
          value={formData.github}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Linkedin:
        <input
          type="text"
          name="linkedin"
          placeholder="Enter your Linkedin profile"
          value={formData.linkedin}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Education:
        <input
          type="text"
          name="institute"
          placeholder="Institute"
          value={formData.education.institute}
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.education.degree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.education.year}
          onChange={handleChange}
        />
        <input
          type="number"
          name="GPA"
          placeholder="GPA"
          value={formData.education.GPA}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Experience:
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.experience.company}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.experience.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.experience.year}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Skills:
        <input
          type="text"
          name="skills"
          placeholder="Enter your skills"
          value={formData.skills}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Page;
