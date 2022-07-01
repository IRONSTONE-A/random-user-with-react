import "./Button.css"

const button = ({axiosUser}) => {
  return (
    <div className="button">
        <button onClick={axiosUser}>Random User</button>
    </div>
  )
}

export default button