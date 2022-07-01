import ReactGif from "../../assets/react.gif"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://https://github.com/IRONSTONE-A"
        target="_blank"
        rel="noopener noreferrer"
        >

        </a>
      
        <p>Ironstone</p>
        <img className="reactLogo" src={ReactGif} alt="" />
        <p>Copyright {new Date().getFullYear()}</p>
      

    </div>
  )
}

export default Footer