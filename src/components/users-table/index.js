import React, { useEffect, useState } from 'react';
import './users-table.scss';
import axios from 'axios';
import TableRow from './table-row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const UsersTable = () => {
  const [aData, setAData] = useState([]);
  const [numOfPages, setNumOfPages] = useState(null);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    axios.get('data.json').then(res => {
      setAData(prevState => {
        const data = res.data;
        setNumOfPages(data.length / perPage);
        setDisplayedData(data.slice(0, currentPage * perPage));
        return data;
      });
    });
  }, []);

  const handlePerPageChange = event => {
    setPerPage(prevState => {
      let value = event.target.value;
      setNumOfPages(aData.length / value);
      setDisplayedData(
        aData.slice(currentPage * perPage - perPage, currentPage * value)
      );
      return value;
    });
  };

  const handleNextPage = () => {
    if (aData.length > currentPage * perPage) {
      setCurrentPage(prevState => {
        let nextState = prevState + 1;
        setDisplayedData(
          aData.slice(nextState * perPage - perPage, nextState * perPage)
        );
        return nextState;
      });
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevState => {
        let nextState = prevState - 1;
        setDisplayedData(
          aData.slice(nextState * perPage - perPage, nextState * perPage)
        );
        return nextState;
      });
    }
  };

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
            {displayedData.map(user => {
              return <TableRow user={user} key={user._id} />;
            })}
          </tbody>
        </table>
        <div className='dashboard__footer'>
          <div className='filter'>
            <p>Showing</p>
            <select name='items' value={perPage} onChange={handlePerPageChange}>
              <option value='100'>100</option>
              <option value='50'>50</option>
              <option value='20'>20</option>
              <option value='10'>10</option>
            </select>
            <p>out of 100</p>
          </div>
          <div className='pagination'>
            <FontAwesomeIcon
              icon={faAngleLeft}
              className='icon'
              onClick={handlePreviousPage}
            />
            <div>
              <span className='active'>{currentPage}</span>
              <span>{currentPage + 1 < numOfPages ? currentPage + 1 : ''}</span>
              <span>{currentPage + 2 < numOfPages ? currentPage + 2 : ''}</span>
              <span>...</span>
              <span>{numOfPages - 1}</span>
              <span>{numOfPages}</span>
            </div>
            <FontAwesomeIcon
              icon={faAngleRight}
              className='icon'
              onClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersTable;
