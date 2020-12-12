import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/");
    console.log(result);
    setUser(result.data);
  };

  const deleteUser = async id => {
    await axios.get(`http://localhost:3003/users/delete/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              
              <th scope="col">Email</th>
              <th scope="col">Ph No.</th>
              
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
             
              <tr>
                <th scope="row">{index + 1}</th>
                <td></td>
                <td>{user.First_Name}</td>
                <td>{user.Last_Name}</td>
                <td>{user.Email_ID}</td>
                <td>{user.Phone_Number}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/users/${user._id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
