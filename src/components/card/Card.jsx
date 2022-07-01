import emailLogo from "../../assets/email.svg"
import phoneLogo from "../../assets/phone.png"
import locationLogo from "../../assets/location.svg"

import "./Card.css"

const Card = ({user}) => {
  return (
    <>
      {user?.map((item, index) => (
      <div key={index} className="card-container">
        <h1 className="user">USER</h1>
        <div className="card-name">
          <img src={item.picture.large} alt="user" />
          <h1>{item.name.title} {item.name.first} {item.name.last}</h1>
        </div>
        <div className="card-email">
          <img className="emailLogo" src={emailLogo} alt="emailLogo" />
          <p> {item.email}</p>
        </div>
        <div className="card-phone">
          <img  className="phoneLogo"src={phoneLogo} alt="phoneLogo" />
          <p> {item.cell}</p>
        </div>
        <div className="card-location">
          <img  className="locationLogo"src={locationLogo} alt="" />
          <p> {item.location.city} - {item.location.country}</p>
        </div>
        <div className="card-age">
          <p>Age: {item.dob.age}</p>
        </div>
        <div className="card-register">
          <p>Register Date: {item.registered.date.substr(0, 10)}</p>
        </div>

      </div>
      ))}
    </>
   
    
  )
}

export default Card