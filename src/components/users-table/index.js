import React, { useEffect, useState } from 'react';
import './users-table.scss';
import axios from 'axios';
import TableRow from './table-row';

const data = [
  {
    id: 1,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 2,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 3,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 4,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 5,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 6,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 7,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 8,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  },
  {
    id: 9,
    organization: 'Lendsqr',
    username: 'Adedeji',
    email: 'adedeji@lendsqr.com',
    phoneNumber: '08078903721',
    dateJoined: 'May 15, 2020 10:00 AM',
    status: 'Inactive'
  }
];

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
