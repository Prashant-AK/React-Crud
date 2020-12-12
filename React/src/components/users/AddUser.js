import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    First_Name: "",
    Last_Name: "",
    Email_ID: "",  
    Phone_Number: "",
    Image:""
  });
  const [url,setUrl]=useState(undefined)

  const { First_Name,Last_Name,Email_ID,Phone_Number,Image} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // const uploadPic=()=>{
  //   const data=new FormData();
  //   data.append("file",image);

  // axios.post("https://api.cloudinary.com/v1_1/dvs2tvyaj/image/upload")
  //   .then(da=>{setUrl(da.url)} )
  //   .catch(err=>{console.log(err)})
  // }

  const onSubmit = async e => {
    await 

    e.preventDefault();
    
    await axios.post("http://localhost:3003/", user);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>

       {/* <div className="card">
      <div className="card-body">
      <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={Image}
              onChange={e => onInputChange(e)}
            />
          </div>
         <div className="text-center">
         <button type="submit" className="btn btn-primary btn-lg">Upload</button>
         </div>
      </div>
       </div> */}

      
       <div className="card">
       <div className="card-body">
       <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="First_Name"
              value={First_Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last name"
              name="Last_Name"
              value={Last_Name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="Email_ID"
              value={Email_ID}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="Phone_Number"
              value={Phone_Number}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <input
              type="file"
              className="form-control form-control-lg"
              
              name="Image"
              value={Image}
              onChange={e => onInputChange(e)}
            /> */}
            <div style={{marginTop:"10px"}}>
            <button type="submit" className="btn btn-primary btn-block">Add User</button>
            </div>
          
        </form>

       </div>
         </div>     
      </div>
    </div>
  );
};

export default AddUser;
