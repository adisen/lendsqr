import React from 'react';
import './side-nav.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import {
  faBriefcase,
  faHandshake,
  faHouseChimney,
  faUserGroup,
  faUsers,
  faMoneyBill,
  faHorse,
  faHandHoldingDollar,
  faUserCheck,
  faUserXmark,
  faCoins,
  faLandmark,
  faFileInvoice,
  faShoppingCart,
  faUserCog,
  faCashRegister,
  faSliders,
  faClipboardList
} from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div className='side-nav'>
      <h3>
        <FontAwesomeIcon icon={faBriefcase} /> Switch Organization
      </h3>
      <a href='#!'>
        <FontAwesomeIcon icon={faHouseChimney} /> Dashboard
      </a>
      <div>
        <p>Customers</p>
        <a href='#!' className='active'>
          <FontAwesomeIcon icon={faUserGroup} />
          Users
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faUsers} />
          Guarantors
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faMoneyBill} />
          Loans
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faHandshake} />
          Decision Models
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faHorse} />
          Savings
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          Loan Requests
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faUserCheck} />
          Whitelist
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faUserXmark} />
          Karma
        </a>
      </div>
      <div>
        <p>Businesses</p>
        <a href='#!'>
          <FontAwesomeIcon icon={faBriefcase} />
          Organization
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          Loan Products
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faLandmark} />
          Savings Products
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faCoins} />
          Fees and Charges
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faFileInvoice} />
          Transactions
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faShoppingCart} />
          Services
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faUserCog} />
          Service Account
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faCashRegister} />
          Settlements
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faChartBar} />
          Reports
        </a>
      </div>
      <div>
        <p>Settings</p>
        <a href='#!'>
          <FontAwesomeIcon icon={faSliders} />
          Preferences
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faCircleCheck} />
          Fees and Pricing
        </a>
        <a href='#!'>
          <FontAwesomeIcon icon={faClipboardList} />
          Audit Logs
        </a>
      </div>
    </div>
  );
};

export default SideNav;
