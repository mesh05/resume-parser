"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    skills: "",
    achievements: "",
    place: "",
  });
  const [education, setEducation] = useState({
    institute: "",
    instituteYear: "",
    school: "",
    schoolYear: "",
  });

  const [projects, setProjects] = useState({
    project1: "",
    project2: "",
    project3: "",
  });

  const [experience, setExperience] = useState({
    role: "",
    company: "",
    companyYear: "",
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

  const handleChangeProj = (e) => {
    const { name, value } = e.target;
    setProjects((prevData) => ({
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
      projects,
    });
    router.push("/");
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
              <label htmlFor="place" className="sr-only">
                Place
              </label>
              <input
                type="text"
                name="place"
                placeholder="Enter your Place"
                value={formData.place}
                onChange={handleChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              <label htmlFor="instituteYear" className="sr-only">
                Year
              </label>
              <input
                type="number"
                name="instituteYear"
                placeholder="Institute Year"
                value={education.instituteYear}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="school" className="sr-only">
                School
              </label>
              <input
                type="text"
                name="school"
                placeholder="School"
                value={education.school}
                onChange={handleChangeEdu}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="schoolYear" className="sr-only">
                Year
              </label>
              <input
                type="number"
                name="schoolYear"
                placeholder="schoolYear"
                value={education.schoolYear}
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
              <label htmlFor="role" className="sr-only">
                Role
              </label>
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={experience.role}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="Company" className="sr-only">
                Company
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={experience.company}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="companyYear" className="sr-only">
                Year
              </label>
              <input
                type="text"
                name="companyYear"
                placeholder="Company Year"
                value={experience.companyYear}
                onChange={handleChangeExp}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>

          <div className="rounded-md shadow-sm -space-y-px">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-6 mb-4">
              Projects
            </h3>
            <div>
              <label htmlFor="project1" className="sr-only">
                Project1
              </label>
              <input
                type="text"
                name="project1"
                placeholder="Project1"
                value={projects.project1}
                onChange={handleChangeProj}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="project2" className="sr-only">
                Project2
              </label>
              <input
                type="text"
                name="project2"
                placeholder="Project2"
                value={projects.project2}
                onChange={handleChangeProj}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="project3" className="sr-only">
                Project3
              </label>
              <input
                type="text"
                name="project3"
                placeholder="project3"
                value={projects.project3}
                onChange={handleChangeProj}
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

          <div className="rounded-md shadow-sm -space-y-px">
            <label htmlFor="skills" className="sr-only">
              Achievements
            </label>
            <input
              type="text"
              name="achievements"
              placeholder="Enter your achievements"
              value={formData.achievements}
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
