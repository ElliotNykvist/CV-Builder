import { useContext } from 'react';
import { ExperienceContext } from './ExperienceContext';

function Job() {

  const { ExperienceItems } = useContext(ExperienceContext);
  return <div className="experience">
  <div className="education-div">
    <div className="cv-title">
      <h1>Experience</h1>
    </div>
    <div className="edu-container">
    {ExperienceItems.map((item, index) => (
  <div className="experience-item" key={index}>
    <div className="school">
      <h4>{item.companyName}</h4>
      <p>{item.position}</p>
      <p className="info">
        {item.description} {/* Assuming 'description' is a property of your item */}
      </p>
    </div>
    <div className="school-date">
      <h3>{item.sDate} - {item.eDate}</h3>
      <h3>{item.elocation}</h3>
    </div>
  </div>
))}
    </div>
  </div>
</div>
}

export default Job;
