import "./communications.css";

const CommunicationsPage = () => {

  return (
    <>
    <div class="com">
        <img src="/images/person1.png" class="prImage"/>
        <div class="comTxt">
          <h1> Amy Wilson </h1>
          <p> Member since May 2023 </p>
          <p> Mutual Interests: Volleyball, Writing, Singing </p>
        </div>
        <img src="/images/chat.png" class="chatIcon"/>
    </div>
    <hr></hr>
    <div class="com">
        <img src="/images/person2.png" class="prImage"/>
        <div class="comTxt">
          <h1> David Wong </h1>
          <p> Member since July  2021 </p>
          <p> Mutual Interests: Dinning out, swimming, chess </p>
        </div>
        <img src="/images/chat.png" class="chatIcon"/>
    </div>
    <hr></hr>
    <div class="com">
        <img src="/images/person3.png" class="prImage"/>
        <div class="comTxt">
          <h1> Rebecca Sunders </h1>
          <p> Member since October  2019 </p>
          <p> Mutual Interests: Dancing, camping, Kayaking </p>
        </div>
        <img src="/images/chat.png" class="chatIcon"/>
    </div>
    </>
  )
}
export default CommunicationsPage
