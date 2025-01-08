import banner11 from './assets/photo-4.jpg'
import './style/six.css'
function Six(){
    return(
        <>
        

<div className="five">
    
    <div className="FO">
        <h2>Contact Us</h2> 
        
    <form>
        
    

        
            <label ></label>
        <input type="text" placeholder="Name" style={{borderRadius: "20px"}}/> <br/> <br/>
    
        <label></label>
        <input type="email" placeholder="email" style={{borderRadius: "20px"}}/><br/> <br/>
        <label></label> 
         <input type="number" placeholder="Phone Number" style={{borderRadius: "20px"}}/> <br/> <br/>
        <textarea placeholder="Number" style={{borderRadius: "20px"}}>Message</textarea> <br/>
        
    </form>
        
    <button >SEND</button>
    </div>

    <img src={banner11} width="30%" height="90%"/>
</div>
        </>
    )
}

export default Six