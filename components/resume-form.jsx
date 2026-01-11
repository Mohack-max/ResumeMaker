"use client"

import { useState } from "react"

export default function ResumeForm({
  resumeData,
  updatePersonal,
  addSkill,
  removeSkill,
  addEducation,
  removeEducation,
  addExperience,
  removeExperience,
}) {
  const [newSkill, setNewSkill] = useState("")
  const [newEducation, setNewEducation] = useState({
    school: "",
    degree: "",
    year: "",
  })
  const [newExperience, setNewExperience] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
  })

  const handleAddSkill = (e) => {
    e.preventDefault()
    addSkill(newSkill)
    setNewSkill("")
  }

  const handleAddEducation = (e) => {
    e.preventDefault()
    if (newEducation.school && newEducation.degree) {
      addEducation(newEducation)
      setNewEducation({ school: "", degree: "", year: "" })
    }
  }

  const handleAddExperience = (e) => {
    e.preventDefault()
    if (newExperience.company && newExperience.role) {
      addExperience(newExperience)
      setNewExperience({ company: "", role: "", duration: "", description: "" })
    }
  }

  return (
    <div className="resume-form">
      <div className="form-card">
        <h3 className="form-card-title">
          <span className="form-icon">👤</span>
          Personal Details
        </h3>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={resumeData.personal.name}
              onChange={(e) => updatePersonal("name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              value={resumeData.personal.email}
              onChange={(e) => updatePersonal("email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="+1 (555) 123-4567"
              value={resumeData.personal.phone}
              onChange={(e) => updatePersonal("phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="New York, NY"
              value={resumeData.personal.location}
              onChange={(e) => updatePersonal("location", e.target.value)}
            />
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="summary">Professional Summary</label>
          <textarea
            id="summary"
            placeholder="Write a brief summary about yourself..."
            rows="4"
            value={resumeData.personal.summary}
            onChange={(e) => updatePersonal("summary", e.target.value)}
          />
        </div>
      </div>

      <div className="form-card">
        <h3 className="form-card-title">
          <span className="form-icon">⚡</span>
          Skills
        </h3>
        <form onSubmit={handleAddSkill} className="add-item-form">
          <input
            type="text"
            placeholder="Enter a skill (e.g., JavaScript)"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <div className="skills-list">
          {resumeData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button type="button" className="remove-tag" aria-label={`Remove skill ${skill}`} title={`Remove skill ${skill}`} onClick={() => removeSkill(index)}>
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="form-card">
        <h3 className="form-card-title">
          <span className="form-icon">🎓</span>
          Education
        </h3>
        <form onSubmit={handleAddEducation} className="entry-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="school">School/University</label>
              <input
                type="text"
                id="school"
                placeholder="Harvard University"
                value={newEducation.school}
                onChange={(e) => setNewEducation({ ...newEducation, school: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                placeholder="Bachelor of Science"
                value={newEducation.degree}
                onChange={(e) => setNewEducation({ ...newEducation, degree: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                type="text"
                id="year"
                placeholder="2020 - 2024"
                value={newEducation.year}
                onChange={(e) => setNewEducation({ ...newEducation, year: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="add-entry-btn">
            + Add Education
          </button>
        </form>
        <div className="entries-list">
          {resumeData.education.map((edu) => (
            <div key={edu.id} className="entry-item">
              <div className="entry-info">
                <strong>{edu.school}</strong>
                <span>{edu.degree}</span>
                <span className="entry-date">{edu.year}</span>
              </div>
              <button type="button" className="remove-entry" aria-label={`Remove education ${edu.school}`} title={`Remove education ${edu.school}`} onClick={() => removeEducation(edu.id)}>
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-card">
        <h3 className="form-card-title">
          <span className="form-icon">💼</span>
          Experience
        </h3>
        <form onSubmit={handleAddExperience} className="entry-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                placeholder="Google"
                value={newExperience.company}
                onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                id="role"
                placeholder="Software Engineer"
                value={newExperience.role}
                onChange={(e) => setNewExperience({ ...newExperience, role: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                id="duration"
                placeholder="Jan 2022 - Present"
                value={newExperience.duration}
                onChange={(e) => setNewExperience({ ...newExperience, duration: e.target.value })}
              />
            </div>
          </div>
          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Describe your responsibilities and achievements..."
              rows="3"
              value={newExperience.description}
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="add-entry-btn">
            + Add Experience
          </button>
        </form>
        <div className="entries-list">
          {resumeData.experience.map((exp) => (
            <div key={exp.id} className="entry-item">
              <div className="entry-info">
                <strong>{exp.company}</strong>
                <span>{exp.role}</span>
                <span className="entry-date">{exp.duration}</span>
                {exp.description && <p className="entry-description">{exp.description}</p>}
              </div>
              <button type="button" className="remove-entry" aria-label={`Remove experience at ${exp.company}`} title={`Remove experience at ${exp.company}`} onClick={() => removeExperience(exp.id)}>
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
