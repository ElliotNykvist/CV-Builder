import { useState } from 'react';
import { useContext } from 'react';
import { EducationContext } from './EducationContext';

function School() {

  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');
  const { educationItems, setEducationItems } = useContext(EducationContext);

  const toggleBox = () => {
    setIsActive(!isActive);
    setIsActive1(false);
  };

  const toggleBox1 = () => {
    if (isActive1) {
      setIsActive1(!isActive1);
      setIsActive(true); // Add 'active' when 'active1' is removed
    } else {
      setIsActive1(!isActive1);
      setIsActive(false);
    }
  };

  const handleSave = () => {

    setIsActive1(!isActive1);
    setIsActive(true);
  
    if (schoolName && degree && startDate && endDate && location) {
      const newItem = {
        schoolName,
        degree,
        location,
        startDate,
        endDate,
      };

      setEducationItems([...educationItems, newItem]);
      // Clearing the input fields
      setSchoolName('');
      setDegree('');
      setStartDate('');
      setEndDate('');
      setLocation('');
    }
  };

  const deleteBtn = (index) => {
    const updatedItems = [...educationItems];
    updatedItems.splice(index, 1);
    setEducationItems(updatedItems);
  };

  return <div className={`box ${isActive ? 'active' : ''} ${isActive1 ? 'active1' : ''}`}>
  <form className="education-form">
    <div className="header1">
      <h2 className="title">Education</h2>
      <i className={`fa-solid fa-chevron-up up ${isActive ? 'rotate' : ''} ${isActive1 ? 'rotate' : ''}`}
         style={{ color: "white" }} 
         onClick={toggleBox} />
    </div>
    <div className="input-container">
      {educationItems.map((item, index) => (
        <div className="input" key={index}>
          <div>
            <h3>{item.schoolName}</h3>
            <p>{item.startDate} - {item.endDate}</p>
          </div>
          <div className="btn">
            <i className="fa-solid fa-pen-to-square" style={{ color: "white" }} />
            <i className="fa-solid fa-trash-can" style={{ color: "#d60101" }} onClick={deleteBtn} />
          </div>
        </div>
      ))}
      <div className="input">
        <div>
          <h3>London City University</h3>
          <p>08/2020 - Present</p>
        </div>
        <div className="btn">
          <i className="fa-solid fa-pen-to-square" style={{ color: "white" }} />
          <i className="fa-solid fa-trash-can" style={{ color: "#d60101" }} />
        </div>
      </div>
    </div>
    <div className="new-div">
      <button type="button" id="new" onClick={toggleBox1}>New</button>
    </div>
    <div className="input-div">
      <label htmlFor="sname">School:</label>
      <input 
        placeholder="Enter School" 
        type="text" 
        id="sname" 
        name="sname" 
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />
    </div>
    <div className="input-div">
      <label htmlFor="degree">Degree:</label>
      <input
        placeholder="Enter Degree/ Field Of Study"
        type="text"
        id="degree"
        name="degree"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
      />
    </div>
    <div className="date-div">
      <div className="input-div">
        <label htmlFor="sdate">Start Date:</label>
        <input 
          type="date" 
          id="sdate" 
          name="sdate" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label htmlFor="edate">End Date:</label>
        <input 
          type="date" 
          id="edate" 
          name="edate" 
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
    <div className="input-div">
      <label htmlFor="slocation">Location:</label>
      <input
        placeholder="Enter School Location"
        type="text"
        id="slocation"
        name="slocation"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
    <div className="buttons">
      <button type="button" className="cancel" onClick={toggleBox1}>Cancel</button>
      <button type="button" className="save" onClick={handleSave}>
        Save
      </button>
    </div>
  </form>
</div>
}

export default School;