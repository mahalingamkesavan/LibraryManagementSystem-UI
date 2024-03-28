import { useState} from "react";
import { Flip, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateIssuedBookAxios } from "../../../service/IssuedBookService/IssuedBookService";



export const IssuedBook=()=>{
 
    const [issuedBook,setIssuedBook]=useState({booKId:"",
    userId:'' ,
    name:''});
    
      const onChange=(event)=>{
        const Issued={...issuedBook}
        Issued[event.target.id]=event.target.value
        setIssuedBook(Issued)
      };
     const OnSubmitHandling=async(event)=>{
        event.preventDefault();
        await CreateIssuedBookAxios(issuedBook);
     };
      return(
        <div className="login-form">
          <ToastContainer autoClose={2000}  transition={Flip} draggable="false" />
          <h2>Book Issued</h2>
            <form onSubmit={OnSubmitHandling}>
           <label>Book Id</label><input className="form-group input" type='text' id='booKId' onInput={onChange} /><br></br>
           <label>User ID</label><input className="form-group input" type='text' id='userId' onInput={onChange} /><br></br>
           <label>Name</label><input className="form-group input" type='text' id='name' onInput={onChange} /><br></br>
            <button type='submit' >Submit</button>
            </form>
        </div>
      );
}