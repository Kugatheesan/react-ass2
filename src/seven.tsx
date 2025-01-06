import './style/seven.css'
function Seven(){
    return(
        <>
<div className="last">
    <div className="new">
<h3>About Us</h3>
<p>Vitae out explicabo fugit facere alias distinctio, exem commodi mollitia minusem dignissimos atque asperiores incidunt vel voluptate iste</p>
<div>
    <i className="fa fa-facebook"></i>
<i className="fa fa-instagram"></i>
<i className="fa fa-linkedin"></i>
<i className="fa fa-twitter"></i>


</div>

<div className="new"> 
    <h3>Address</h3>
    <p>📍Location</p>
        <p> 📞call +01 1234567890</p>
            <p> 📧demo@gmail.com</p>
</div>
</div>

<div className="new">
    <h3>Newsletter</h3> <br/>
    <form>
        <input type="email" placeholder="Enter email" style={{borderRadius: "20px"}}/> <br/>
        <button>Subscribe</button>
    </form>
</div>

<div className="new">
    <h4>Latitude:</h4>
    <h4>Longitude</h4>
</div>

</div>

 </>
)};

export default Seven