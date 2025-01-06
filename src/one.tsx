import banner1 from './assets/bg.jpg'
import './style/one.css'

function One(){
    return(
        <>
        

<div className="one">
        <div>
            <div className="OS">
        <p>Bookstore</p>
            </div>
        <h1>For All Your Reading Needs</h1>
        <div className  ="OS1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores repudiandae molestias laudantium quia sequi
            odit adipisci molestiae saepe quo similique!</p>
            </div>
        <button>Read More</button>
            
        
        </div>
        <div>
        <img src={banner1} width="500px"/>
        </div>
    </div>
    <br/>

        </>
    )
}

export default One