function School() {
  <div className="box">
  <form className="education-form">
    <div className="header1">
      <h2 className="title">Education</h2>
      <i className="fa-solid fa-chevron-up up" style={{ color: "white" }} />
    </div>
    <div className="input-container">
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
      <button id="new">New</button>
    </div>
    <div className="input-div">
      <label htmlFor="sname">School:</label>
      <input placeholder="Enter School" type="text" id="sname" name="sname" />
    </div>
    <div className="input-div">
      <label htmlFor="degree">Degree:</label>
      <input
        placeholder="Enter Degree/ Field Of Study"
        type="text"
        id="degree"
        name="degree"
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
      <label htmlFor="slocation">Location:</label>
      <input
        placeholder="Enter School Location"
        type="text"
        id="slocation"
        name="slocation"
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

export default School;