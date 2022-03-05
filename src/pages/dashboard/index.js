import React from 'react';
import TopNav from '../../components/top-nav';
import SideNav from '../../components/side-nav';
import './dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faCoins,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
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
          <div className='dashboard__footer'>
            <div>
              <p>Showing</p>
              <select name='items'>
                <option value='100'>100</option>
                <option value='50'>50</option>
                <option value='20'>20</option>
                <option value='10'>10</option>
              </select>
              <p>out of 100</p>
            </div>
            <div className='pagination'>
              <FontAwesomeIcon icon={faAngleLeft} className='icon' />
              <div>
                <span className='active'>1</span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>15</span>
                <span>16</span>
              </div>
              <FontAwesomeIcon icon={faAngleRight} className='icon' />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
