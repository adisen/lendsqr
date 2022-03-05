import React, { useEffect, useState } from 'react';
import './users-table.scss';
import axios from 'axios';
import TableRow from './table-row';

const UsersTable = () => {
  const [aData, setAData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      setAData(res.data);
    });
  }, []);

  return (
    <section className='users-table'>
      <div>
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date Joined</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {aData.map(user => {
              return <TableRow user={user} key={user.id} />;
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UsersTable;
