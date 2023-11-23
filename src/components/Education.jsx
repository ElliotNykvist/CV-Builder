import { useContext } from 'react';
import { EducationContext } from './EducationContext';

function Education() {
  const { educationItems } = useContext(EducationContext);

  return <div className="education">
  <div className="education-div">
    <div className="cv-title">
      <h1>Education</h1>
    </div>
    <div className="edu-container">
    {educationItems.map((item, index) => (
      <div className="experience-item" key={index}>
        <div className="school">
          <h4>{item.schoolName}</h4>
          <p>{item.degree}</p>
        </div>
      <div className="school-date">
        <h3>{item.startDate} - {item.endDate}</h3>
        <h3>{item.location}</h3>
      </div>
    </div>
  ))}
    </div>
  </div>
</div>
}

export default Education;