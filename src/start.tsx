import banner from './assets/photo-4.jpg'
import './style/start.css'

function Start(){
    return(
        <>
        {/* <div>
            <img src={banner} alt="" />
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Categories</h3>
            <h3>Our blog</h3>
            <h3>Contact Us</h3>
            <h3>Profile</h3>
            <h3>Lock Out</h3>
        </div> */}

<div className="start">
        <div className="SO">
            <img src={banner} width="60px"/>
        </div>
        <div>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Categories +</h3>
        <h3>Our blog</h3>
        <h3>Contact Us</h3>
        <h3>Profile</h3>
        <h3>Lock Out</h3>
</div>
    
</div>
        </>
    )
}

export default Start