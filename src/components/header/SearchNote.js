import React from 'react';

const SearchNote = ({ searchHandler }) => {
  return (
    <div>
      <input
        placeholder='Cari personal note'
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default SearchNote;
