import "./contact.css";

const ContactUs = () => {

  return (
    <> 
    <h1 class="titlePage">Contact Us</h1>
    <img src="/images/line.png" class="curve"/>
    <div class="team">
      <div class="william">
        <img src="/images/William.svg"/>
        <h3> William Vo</h3>
        <p> williamvo@gmail.com </p>
        <p> 6477777777 </p>
      </div>
      <div class="warda">
        <h3> Warda Nur</h3>
        <p> wardanur@gmail.com </p>
        <p> 6477777777 </p>
        <img src="/images/Warda.svg"/>
      </div>
      <div class="aws">
        <img src="/images/Aws.svg"/>
        <h3> Aws Al-Raheem </h3>
        <p>  awsalrahim@gmail.com </p>
        <p> 6477777777 </p>
      </div>
    </div>
    <h1 class="titleCon"> Follow Us</h1>
    <div className="socialMedia">
      <img src="/images/facebookIcon.svg"/>
      <img src="/images/twitterIcon.svg"/>
      <img src="/images/youtubeIcon.svg"/>
      <img src="/images/instagramIcon.svg"/>
    </div>
    </>
   
  )
}
export default ContactUs
