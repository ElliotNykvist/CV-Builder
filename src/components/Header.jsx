import avatarImage from '../assets/sample-avatar.jpg';

function Header() {
return <header>
  <div className="left-header">
    <img src={avatarImage} alt="Avatar" />
    <h2>Brandon Parker</h2>
  </div>
  <div className="right-header">
    <h3>example@gmail.com</h3>
    <h3>+44 3560 5566 5566</h3>
    <h3>London, UK</h3>
  </div>
</header>
}

export default Header;