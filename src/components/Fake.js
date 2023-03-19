import React from "react";
import {useForm} from "react-hook-form"
import { useState } from "react";
import "./Fake.css";


function Fake(){
    let {register,handleSubmit}= useForm()
    let [users,setusers] = useState([])
    

    function isValidURL(str) {
        if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
             console.log('YES');
             //document.write("<h1>Yes</h1>")
             return true
         } else {
             console.log('NO');
             //document.write("<h1>IT IS A FAKE URL</h1>")
             return false
         }
     }



    let formsubmit=(userobj)=>{
        setusers([...users,userobj])
    }

    return(
        <div>
            <p className="display-5 text-info" align="center">
                Check weather the URL is Fake or Real
            </p>
        {/* desig a user registration form */}
          <div className="row row-cols-12 row-cols-sm-6 row-cols-md-6">
            <form className="mx-auto" onSubmit={handleSubmit(formsubmit)}>
            <div className="mb-3">
                <label htmlFor="" id="Username">URL</label>
                <input 
                type="text"  
                id="Username" 
                className="form-control"
                {...register("username")}
                ></input>
            </div>
            <button type="submit" className="btn btn-success">check</button>
            </form>
            <div className="table">
             <p className="display-3 text-center text-primary mt-5">Registered users</p>
                <table className="table text-center">
                <thead>
                    <tr>
                        <th>OUTPUT</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((albumobj)=><tr>
                            <td className="text-danger text-center">{isValidURL(albumobj.username)?<h1 className="text-success">Yes you can proceed with the link</h1>:<h1 className="text-danger">No its a fake link</h1>}</td>
                        </tr>)
                    }
                </tbody>
                </table>
          </div>
          </div>
          </div>
    )
}

    export default Fake;