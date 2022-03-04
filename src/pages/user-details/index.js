import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from '../../components/top-nav';
import SideNav from '../../components/side-nav';
import './user-details.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  faStar as faStarReg,
  faUser
} from '@fortawesome/free-regular-svg-icons';

const UserDetails = () => {
  return (
    <main>
      <TopNav />
      <SideNav />
      <div className='user-details'>
        <section className='user-details__head'>
          <div>
            <div className='user-details__header'>
              <Link to='/dashboard' className='nav-back'>
                <FontAwesomeIcon icon={faArrowLeftLong} /> Back to Users
              </Link>
              <div className='body'>
                <h2>User Details</h2>
                <div>
                  <button className='red'>Blacklist User</button>
                  <button className='green'>Activate User</button>
                </div>
              </div>
            </div>
            <div className='user-details__header--user'>
              <div className='body'>
                <div className='name'>
                  <FontAwesomeIcon icon={faUser} className='image' />
                  <div>
                    <h3>Grace Effiom</h3>
                    <p>LSQFf587g90</p>
                  </div>
                </div>
                <div className='rating'>
                  <p>User’s Tier</p>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarReg} />
                    <FontAwesomeIcon icon={faStarReg} />
                  </div>
                </div>
                <div className='financial-details'>
                  <h3>₦200,000.00</h3>
                  <p>9912345678/Providus Bank</p>
                </div>
              </div>
              <div className='footer'>
                <a href='#!' className='active'>
                  General Details
                </a>
                <a href='#!'>Documents</a>
                <a href='#!'>Bank Details</a>
                <a href='#!'>Bank Details</a>
                <a href='#!'>Savings</a>
                <a href='#!'>App and System</a>
              </div>
            </div>
          </div>
          <div className='user-details__body'>
            <div>
              <h4>Personal Information</h4>
              <div className='user-details__body--details'>
                <div>
                  <p className='title'>full Name</p>
                  <p className='info'>Grace Effiom</p>
                </div>
                <div>
                  <p className='title'>Phone Number</p>
                  <p className='info'>07060780922</p>
                </div>
                <div>
                  <p className='title'>Email Address</p>
                  <p className='info'>grace@gmail.com</p>
                </div>
                <div>
                  <p className='title'>Bvn</p>
                  <p className='info'>07060780922</p>
                </div>
                <div>
                  <p className='title'>Gender</p>
                  <p className='info'>Female</p>
                </div>
                <div>
                  <p className='title'>Marital status</p>
                  <p className='info'>Single</p>
                </div>
                <div>
                  <p className='title'>Children</p>
                  <p className='info'>None</p>
                </div>
                <div>
                  <p className='title'>Type of residence</p>
                  <p className='info'>Parent’s Apartment</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Education and Employment</h4>
              <div className='user-details__body--details'>
                <div>
                  <p className='title'>level of education</p>
                  <p className='info'>B.Sc</p>
                </div>
                <div>
                  <p className='title'>employment status</p>
                  <p className='info'>Employed</p>
                </div>
                <div>
                  <p className='title'>sector of employment</p>
                  <p className='info'>FinTech</p>
                </div>
                <div>
                  <p className='title'>Duration of employment</p>
                  <p className='info'>2 years</p>
                </div>
                <div>
                  <p className='title'>office email</p>
                  <p className='info'>grace@lendsqr.com</p>
                </div>
                <div>
                  <p className='title'>Monthly income</p>
                  <p className='info'>₦200,000.00- ₦400,000.00</p>
                </div>
                <div>
                  <p className='title'>loan repayment</p>
                  <p className='info'>40,000</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Socials</h4>
              <div className='user-details__body--details'>
                <div>
                  <p className='title'>Twitter</p>
                  <p className='info'>@grace_effiom</p>
                </div>
                <div>
                  <p className='title'>Facebook</p>
                  <p className='info'>Grace Effiom</p>
                </div>
                <div>
                  <p className='title'>Instagram</p>
                  <p className='info'>@grace_effiom</p>
                </div>
              </div>
            </div>
            <div>
              <h4>Guarantor</h4>
              <div className='user-details__body--details'>
                <div>
                  <p className='title'>full Name</p>
                  <p className='info'>Debby Ogana</p>
                </div>
                <div>
                  <p className='title'>Phone Number</p>
                  <p className='info'>07060780922</p>
                </div>
                <div>
                  <p className='title'>Email Address</p>
                  <p className='info'>debby@gmail.com</p>
                </div>
                <div>
                  <p>Relationship</p>
                  <p className='info'>Sister</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserDetails;
