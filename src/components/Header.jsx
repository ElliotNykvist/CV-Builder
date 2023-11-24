import { useContext } from 'react';
import { UserInfoContext } from './UserInfoContext';

function Header() {
  const { userInfo } = useContext(UserInfoContext);

return <header>
  <div className="left-header">
    <img src={userInfo.avatar} alt="Avatar" />
    <h2>{userInfo.fname}</h2>
  </div>
  <div className="right-header">
    <h3>{userInfo.email}</h3>
    <h3>{userInfo.tel}</h3>
    <h3>{userInfo.address}</h3>
  </div>
</header>
}

export default Header;