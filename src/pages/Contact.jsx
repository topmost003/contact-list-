import { useState } from "react"
import "./Contact.css"


const Contact = () => {


 const [fullName , setFullName] = useState ("")
 const [telephone , setTelephone ] = useState ("")
 const [origin , setOrigin] = useState ("")
const [users, setUsers] = useState ([])


const submitData = (e) => {
 e.preventDefault()


setUsers([...users, { fullName,telephone,origin}])

setFullName("")
setTelephone("")
setOrigin("")
}



  return (
    <div className="contact">
   <section className="left">
    <h1>CONTACT DETAILS</h1>
    <p>please enter your details</p>

    <form className="grid" onSubmit={submitData}>
   <label >Full Name</label>
   <input type="text" placeholder="Enter your full name"  value={fullName} onChange={ (e) => {
   setFullName( e.target.value)
   }

   }/>

   <label >Telephone Number</label>
   <input  type="number" placeholder="Enter your phone number" value={telephone} onChange={ (e) => {
    setTelephone( e.target.value)
   }

   } />

   <label >State of origin</label>
   <input  type="text" placeholder="Enter your state of origin"  value={origin} onChange={ (e)=>{
    setOrigin ( e.target.value)
   }
   }/>


   <button type="submit">Submit form</button>
    </form>

   </section>


  <main className="right">
   {users.map((data,i) => (

    <div className="users" key={i}>
    <p>FullName : {data.fullName}</p>
    <p>Telephone : {data.telephone}</p>
    <p>State of origin : {data.origin}</p>
    </div>



   ))
   
   }




  </main>

    </div>
  )
}

export default Contact
