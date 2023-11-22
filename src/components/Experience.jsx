import { useState } from 'react';

function Experience() {

  const [isActive, setIsActive] = useState(false);

  const toggleBox = () => {
    setIsActive(!isActive);
  };

  return <div className={`box ${isActive ? 'active' : ''}`}>
  <form className="experience-form">
    <div className="header1">
      <h2 className="title">Experience</h2>
      <i className="fa-solid fa-chevron-up up"
         style={{ color: "white" }}
         onClick={toggleBox}/>
    </div>
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
    <div className="new-div">
      <button id="new">New</button>
    </div>
    <div className="input-div">
      <label htmlFor="cname">Company Name:</label>
      <input
        placeholder="Enter Company Name/ Other"
        type="text"
        id="cname"
        name="cname"
      />
    </div>
    <div className="input-div">
      <label htmlFor="position">Position Title:</label>
      <input
        placeholder="Enter Position"
        type="text"
        id="position"
        name="position"
      />
    </div>
    <div className="date-div">
      <div className="input-div">
        <label htmlFor="sdate">Start Date:</label>
        <input type="date" id="sdate" name="sdate" />
      </div>
      <div className="input-div">
        <label htmlFor="edate">End Date:</label>
        <input type="date" id="edate" name="edate" />
      </div>
    </div>
    <div className="input-div">
      <label htmlFor="wlocation">Location:</label>
      <input
        placeholder="Enter Location"
        type="text"
        id="wlocation"
        name="wlocation"
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
      <button className="cancel">Cancel</button>
      <button className="save" type="submit">
        Save
      </button>
    </div>
  </form>
</div>
}

export default Experience;