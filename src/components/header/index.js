import React from 'react';
import SearchNote from './SearchNote';

const HeaderApp = ({ searchHandler }) => {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <SearchNote searchHandler={searchHandler} />
    </div>
  );
};

export default HeaderApp;
