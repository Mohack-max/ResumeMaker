"use client"

import { useState } from "react"
import ResumeForm from "../components/resume-form"
import ResumePreview from "../components/resume-preview"
import "./resume-builder.css"

const initialData = {
  personal: {
    name: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  skills: [],
  education: [],
  experience: [],
}

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState(initialData)

  const updatePersonal = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }

  const addSkill = (skill) => {
    if (skill.trim()) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, skill.trim()],
      }))
    }
  }

  const removeSkill = (index) => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const addEducation = (education) => {
    setResumeData((prev) => ({
      ...prev,
      education: [...prev.education, { ...education, id: Date.now() }],
    }))
  }

  const removeEducation = (id) => {
    setResumeData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
  }

  const addExperience = (experience) => {
    setResumeData((prev) => ({
      ...prev,
      experience: [...prev.experience, { ...experience, id: Date.now() }],
    }))
  }

  const removeExperience = (id) => {
    setResumeData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }))
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="resume-builder">
      <header className="header">
        <h1>Resume Builder</h1>
        <p>Create your professional resume in minutes</p>
      </header>

      <main className="main-content">
        <section className="form-section no-print">
          <ResumeForm
            resumeData={resumeData}
            updatePersonal={updatePersonal}
            addSkill={addSkill}
            removeSkill={removeSkill}
            addEducation={addEducation}
            removeEducation={removeEducation}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
        </section>

        <section className="preview-section">
          <div className="preview-header no-print">
            <h2>Live Preview</h2>
            <button type="button" className="download-btn" aria-label="Print or download resume as PDF" title="Print or download resume as PDF" onClick={handleDownloadPDF}>
              <span className="download-icon" aria-hidden="true">↓</span>
              Print / Download PDF
            </button>
          </div>
          <ResumePreview resumeData={resumeData} />
        </section>
      </main>
    </div>
  )
}
