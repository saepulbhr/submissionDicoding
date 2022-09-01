import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, handleDelete, handleArchived }) => {
  return (
    <div className='note-input__body'>
      <div className='notes-list'>
        {notes.map((row) => (
          <NoteItem
            key={row.id}
            id={row.id}
            title={row.title}
            body={row.body}
            createdAt={row.createdAt}
            archived={row.archived}
            handleDelete={handleDelete}
            handleArchived={handleArchived}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
