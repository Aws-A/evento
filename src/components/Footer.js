import "./navbar.css"
//the css is currently in the navbar.css

const Footer = () => {

  return (
    <div className="footerBox">
      <div className="footerAboutUs">
      <h1>About Us</h1>
      <h3>Our Team</h3>
      <h3>Our Story</h3>
      </div>

      <div className="footerExplore">
      <h1>Explore</h1>
      <h3>Interests</h3>
      <h3>Events</h3>
      <h3>Groups</h3>
      </div>

      <div className="footerProfile">
      <h1>My Profile</h1>
      <h3>Settings</h3>
      <h3>Sign Up/In</h3>
      <h3>Notifications</h3>
      </div>


      <div className="followUs">
      <h1>Follow Us</h1>
      <div className="socialMediaBar">
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
      <img src="/images/placeholder.png"/>
      </div>
      </div>

    </div>
  )
}
export default Footer