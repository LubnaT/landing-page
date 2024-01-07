import React from 'react';
import "./landingpage.css";

const AllUsers = ({ userdetails }) => {
  return (
    <div>
      <h1 className="text-center mb-4">User List</h1>
      <div className="">
        <table className="min-w-full border ">
          <thead>
            <tr className="bg-gray-200">
              <th className="tablecell">User ID</th>
              <th className="tablecell">Email</th>
              <th className="tablecell">Password</th>
            </tr>
          </thead>
          <tbody>
            {userdetails.map((user) => (
              <tr key={user.userID} className="bg-white">
                <td className="tablecell">{user.userID}</td>
                <td className="tablecell">{user.userEmail}</td>
                <td className="tablecell">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
