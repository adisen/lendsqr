import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  faEllipsisVertical,
  faEye,
  faUserCheck,
  faUserTimes
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './table-row.scss';

const TableRow = ({ user }) => {
  const [showPopup, setShowPopup] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (myRef.current && !myRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [myRef]);

  return (
    <tr>
      <td>{user.organization}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.dateJoined}</td>
      <td className={user.status.toLowerCase()}>
        <span>{user.status}</span>
      </td>
      <td>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          className='icon'
          onClick={() => setShowPopup(true)}
        />
        <div
          className='action'
          style={{ display: `${showPopup ? 'block' : 'none'}` }}
          ref={myRef}
        >
          <p>
            <Link to='/user-details'>
              <FontAwesomeIcon icon={faEye} /> View Details
            </Link>
          </p>
          <p>
            <FontAwesomeIcon icon={faUserTimes} /> Blacklist User
          </p>
          <p>
            <FontAwesomeIcon icon={faUserCheck} /> Activate User
          </p>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
