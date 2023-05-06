import React from 'react';

const UserExpandRow = ({ data }) => {
  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="expandable-content p-2">
      <p>
        <span>
          <strong>Address : </strong>
          {data.address.address},{' '}
        </span>

        <span>
          {' '}
          <strong>Country :</strong> {data.address.country},{' '}
        </span>

        <span>
          <strong>State : </strong>
          {data.address.state},
        </span>

        <span>
          {' '}
          <strong>City : </strong>
          {data.address.city},
        </span>

        <span>
          {' '}
          <strong>Zip Code :</strong>
          {data.address.zipCode},
        </span>

        <span>
          {' '}
          <strong>Street:</strong>
          {data.address.street}
        </span>
      </p>
    </div>
  );
};

export default UserExpandRow;
