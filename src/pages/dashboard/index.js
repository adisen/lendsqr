import React from 'react';
import TopNav from '../../components/top-nav';
import SideNav from '../../components/side-nav';
import './dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import UsersTable from '../../components/users-table';

const Dashboard = () => {
  return (
    <main>
      <TopNav />
      <SideNav />
      <div className='dashboard'>
        <section className='dashboard__body'>
          <h2>Users</h2>
          <div className='dashboard__cards'>
            <div className='dashboard__card'>
              <FontAwesomeIcon icon={faUserGroup} className='icon' />
              <h3>Users</h3>
              <p>2,453</p>
            </div>
            <div className='dashboard__card'>
              <FontAwesomeIcon icon={faUserGroup} className='icon' />
              <h3>Active Users</h3>
              <p>2,453</p>
            </div>
            <div className='dashboard__card'>
              <FontAwesomeIcon icon={faCoins} className='icon' />
              <h3>Users with Loans</h3>
              <p>12,453</p>
            </div>
            <div className='dashboard__card'>
              <FontAwesomeIcon icon={faCoins} className='icon' />
              <h3>Users with Savings</h3>
              <p>102,453</p>
            </div>
          </div>
          <UsersTable />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
