import React, { useEffect, useState } from 'react';
import UserServices from '../Service/UserServices';

const AllUsers = ({userdetails}) => {
    
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users data from the API when the component mounts
//     UserServices.getAllUsers()
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error('Error fetching users:', error));
//   }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userdetails.map((user) => (
            <tr key={user.userID}>
              <td>{user.userID}</td>
              <td>{user.userEmail}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;