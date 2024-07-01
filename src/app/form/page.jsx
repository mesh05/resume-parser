"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    skills: "",
    projects: [{ name: "", description: "" }],
    achievements: [],
  });
  const [education, setEducation] = useState({
    institute: "",
    degree: "",
    year: "",
    GPA: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    role: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeEdu = (e) => {
    const { name, value } = e.target;
    setEducation((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeExp = (e) => {
    const { name, value } = e.target;
    setExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    axios.post("http://localhost:3000/api/userdetails", {
      username: session.user.name,
      formData,
      education,
      experience,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Fill out your information
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="github" className="sr-only">
                Github
              </label>
              <input
                type="text"
                name="github"
                placeholder="Enter your Github profile"
                value={formData.github}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="linkedin" className="sr-only">
                Linkedin
              </label>
              <input
                type="text"
                name="linkedin"
                placeholder="Enter your Linkedin profile"
                value={formData.linkedin}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-6 mb-4">
              Education
            </h3>
            <div>
              <label htmlFor="institute" className="sr-only">
                Institute
              </label>
              <input
                type="text"
                name="institute"
                placeholder="Institute"
                value={education.institute}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="degree" className="sr-only">
                Degree
              </label>
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                value={education.degree}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="year" className="sr-only">
                Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={education.year}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="GPA" className="sr-only">
                GPA
              </label>
              <input
                type="number"
                name="GPA"
                placeholder="GPA"
                value={education.GPA}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-6 mb-4">
              Experience
            </h3>
            <div>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={experience.company}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={experience.role}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="year" className="sr-only">
                Year
              </label>
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={experience.year}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="skills" className="sr-only">
              Skills
            </label>
            <input
              type="text"
              name="skills"
              placeholder="Enter your skills"
              value={formData.skills}
              onChange={handleChange}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
