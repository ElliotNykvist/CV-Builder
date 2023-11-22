import { useState } from 'react';

function Personal() {

  const [isActive, setIsActive] = useState(true);

  const toggleBox = () => {
    setIsActive(!isActive);
  };

  return <div className={`box ${isActive ? 'active' : ''}`}>
  <form className="personal-form">
    <div className="header1">
      <h2 className="title">Personal Details</h2>
      <i className="fa-solid fa-chevron-up down" 
         style={{ color: "white" }} 
         onClick={toggleBox}/>
    </div>
    <div className="input-div1">
      <label htmlFor="fname">Full name:</label>
      <input
        placeholder="Enter Full Name"
        type="text"
        id="fname"
        name="fname"
        defaultValue="Otto Robinson"
      />
    </div>
    <div className="input-div1">
      <label htmlFor="email">Email:</label>
      <input
        placeholder="Enter Email"
        type="email"
        id="email"
        name="email"
        defaultValue="example@gmail.com"
      />
    </div>
    <div className="input-div1">
      <label htmlFor="tel">Phone number:</label>
      <input
        placeholder="Enter Your Number"
        type="tel"
        id="tel"
        name="tel"
        defaultValue="+44 3560 5566 5566"
      />
    </div>
    <div className="input-div1">
      <label htmlFor="address">Address:</label>
      <input
        placeholder="Enter Your Address"
        type="text"
        id="address"
        name="address"
        defaultValue="London, UK"
      />
    </div>
    <button className="add-img">Add Img</button>
  </form>
</div>

}

export default Personal;