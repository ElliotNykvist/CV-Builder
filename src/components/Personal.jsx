import { useState, useContext } from 'react';
import { UserInfoContext } from './UserInfoContext'; // Make sure the path is correct

function Personal() {
  const [isActive, setIsActive] = useState(true);
  const { userInfo, setUserInfo } = useContext(UserInfoContext); // Using context

  const toggleBox = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    if (e.target.name === 'file') {
      // Handle file input change for avatar
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setUserInfo(prevState => ({ ...prevState, avatar: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      // Handle other input changes
      setUserInfo(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    }
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
    <button type="button" className="add-img" onClick={() => document.getElementById('file').click()}>
  Add Img
</button>
<input type="file" 
       name="file" 
       id="file" 
       onChange={handleChange} 
       style={{ display: 'none' }} />

  </form>
</div>

}

export default Personal;