import { useState, useContext } from 'react';
import { UserInfoContext } from './UserInfoContext'; // Make sure the path is correct

function Personal() {
  const [isActive, setIsActive] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserInfoContext); // Using context

  const toggleBox = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    // Update context state based on input name and value
    setUserInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
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
        defaultValue={userInfo.fname} // Using context value
        onChange={handleChange} // Setting up change handler
      />
    </div>
    <div className="input-div1">
      <label htmlFor="email">Email:</label>
      <input
        placeholder="Enter Email"
        type="email"
        id="email"
        name="email"
        defaultValue={userInfo.email} // Using context value
        onChange={handleChange} // Setting up change handler
      />
    </div>
    <div className="input-div1">
      <label htmlFor="tel">Phone number:</label>
      <input
        placeholder="Enter Your Number"
        type="tel"
        id="tel"
        name="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        defaultValue={userInfo.tel} // Using context value
        onChange={handleChange} // Setting up change handler
      />
    </div>
    <div className="input-div1">
      <label htmlFor="address">Address:</label>
      <input
        placeholder="Enter Your Address"
        type="text"
        id="address"
        name="address"
        defaultValue={userInfo.address} // Using context value
        onChange={handleChange} // Setting up change handler
      />
    </div>
    <button className="add-img">Add Img</button>
  </form>
</div>

}

export default Personal;