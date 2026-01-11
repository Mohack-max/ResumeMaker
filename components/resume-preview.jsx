export default function ResumePreview({ resumeData }) {
  const { personal, skills, education, experience } = resumeData

  const hasContent =
    personal.name || personal.email || skills.length > 0 || education.length > 0 || experience.length > 0

  return (
    <div className="resume-preview">
      {!hasContent ? (
        <div className="empty-state">
          <div className="empty-icon">📄</div>
          <h3>Your Resume Preview</h3>
          <p>Start filling out the form to see your resume come to life!</p>
        </div>
      ) : (
        <div className="resume-document" role="document" aria-label="Resume preview">
          {(personal.name || personal.email || personal.phone || personal.location) && (
            <header className="resume-header">
              {personal.name && <h1 className="resume-name">{personal.name}</h1>}
              <div className="contact-info">
                {personal.email && (
                  <span className="contact-item">
                    <span className="contact-icon">✉</span>
                    {personal.email}
                  </span>
                )}
                {personal.phone && (
                  <span className="contact-item">
                    <span className="contact-icon">☎</span>
                    {personal.phone}
                  </span>
                )}
                {personal.location && (
                  <span className="contact-item">
                    <span className="contact-icon">📍</span>
                    {personal.location}
                  </span>
                )}
              </div>
            </header>
          )}

          {personal.summary && (
            <section className="resume-section">
              <h2 className="section-title">Professional Summary</h2>
              <div className="section-divider"></div>
              <p className="summary-text">{personal.summary}</p>
            </section>
          )}

          {skills.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Skills</h2>
              <div className="section-divider"></div>
              <div className="preview-skills">
                {skills.map((skill, index) => (
                  <span key={index} className="preview-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {experience.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Experience</h2>
              <div className="section-divider"></div>
              <div className="entries">
                {experience.map((exp) => (
                  <div key={exp.id} className="preview-entry">
                    <div className="entry-header">
                      <div className="entry-main">
                        <h3 className="entry-title">{exp.role}</h3>
                        <span className="entry-company">{exp.company}</span>
                      </div>
                      <span className="entry-duration">{exp.duration}</span>
                    </div>
                    {exp.description && <p className="entry-desc">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {education.length > 0 && (
            <section className="resume-section">
              <h2 className="section-title">Education</h2>
              <div className="section-divider"></div>
              <div className="entries">
                {education.map((edu) => (
                  <div key={edu.id} className="preview-entry">
                    <div className="entry-header">
                      <div className="entry-main">
                        <h3 className="entry-title">{edu.degree}</h3>
                        <span className="entry-company">{edu.school}</span>
                      </div>
                      <span className="entry-duration">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
