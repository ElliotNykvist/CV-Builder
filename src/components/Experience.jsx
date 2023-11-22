import { useState } from 'react';

function Experience() {

  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [itemsJob, setItems] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [sDate, setStartDate] = useState('');
  const [eDate, setEndDate] = useState('');
  const [elocation, setELocation] = useState('');

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
  
    if (companyName && position && sDate && eDate && elocation) {
      const newItem = {
        companyName,
        position,
        elocation,
        sDate,
        eDate,
      };
      setItems([...itemsJob, newItem]);
      setCompanyName('');
      setPosition('');
      setStartDate('');
      setEndDate('');
      setELocation('');
    }
  };

  const deleteBtn = (index) => {
    const updatedItems = [...itemsJob];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };


  
  return <div className={`box ${isActive ? 'active' : ''} ${isActive1 ? 'active1' : ''}`}>
  <form className="experience-form">
    <div className="header1">
      <h2 className="title">Experience</h2>
      <i className="fa-solid fa-chevron-up up"
         style={{ color: "white" }}
         onClick={toggleBox}/>
    </div>
    <div className="input-container">
    {itemsJob.map((item, index) => (
        <div className="input" key={index}>
          <div>
            <h3>{item.companyName}</h3>
            <p>{item.sDate} - {item.eDate}</p>
          </div>
          <div className="btn">
            <i className="fa-solid fa-pen-to-square" style={{ color: "white" }} />
            <i className="fa-solid fa-trash-can" style={{ color: "#d60101" }} onClick={deleteBtn} />
          </div>
        </div>
      ))}
      <div className="input">
        <div>
          <h3>Microsoft</h3>
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
      <label htmlFor="cname">Company Name:</label>
      <input
        placeholder="Enter Company Name/ Other"
        type="text"
        id="cname"
        name="cname"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
    </div>
    <div className="input-div">
      <label htmlFor="position">Position Title:</label>
      <input
        placeholder="Enter Position"
        type="text"
        id="position"
        name="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
      />
    </div>
    <div className="date-div">
      <div className="input-div">
        <label htmlFor="sdate">Start Date:</label>
        <input 
          type="date" 
          id="sdate" 
          name="sdate"
          value={sDate}
          onChange={(e) => setStartDate(e.target.value)} 
        />
      </div>
      <div className="input-div">
        <label htmlFor="edate">End Date:</label>
        <input 
        type="date" 
        id="edate" 
        name="edate" 
        value={eDate}
        onChange={(e) => setEndDate(e.target.value)} />
      </div>
    </div>
    <div className="input-div">
      <label htmlFor="wlocation">Location:</label>
      <input
        placeholder="Enter Location"
        type="text"
        id="wlocation"
        name="wlocation"
        value={elocation}
        onChange={(e) => setELocation(e.target.value)} 
      />
    </div>
    <div className="textarea-div">
      <label htmlFor="Description">Description:</label>
      <textarea
        placeholder="Enter Description"
        type="text"
        id="description"
        name="description"
        cols={30}
        rows={10}
        defaultValue={""}
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

export default Experience;