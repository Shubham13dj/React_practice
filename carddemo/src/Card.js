import profilepic from './ProfilePic.jpg'
import './App.css'
function Card() {
    const name = "Shubham"
    const handleMouseOver = () => {
        alert(`${name}`);
    };
    return(
        <>
        <div className="card">
            <img src= {profilepic} alt="A Person with Specs"></img>
            <h2>Shubham Jadhav</h2>
            <p  onMouseOver={handleMouseOver}>CDAC Student</p>
        </div>
        </>
    );
}

export default Card;