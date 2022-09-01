import React from 'react';
import { showFormattedDate } from '../../utils';

const NoteItemActive = ({
  id,
  title,
  body,
  createdAt,
  archived,
  handleDelete,
  handleArchived,
}) => {
  return (
    <div>
      <div className='note-item'>
        <div className='note-item__content'>
          <div className='note-item__title'>
            <h5> {title}</h5>
          </div>
          <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
          <div className='note-item__body'>
            <p>{body}</p>
          </div>
        </div>
        <div className='note-item__action'>
          <button
            className='note-item__delete-button'
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
          <button
            className='note-item__archive-button'
            onClick={() => handleArchived(id)}
          >
            {archived ? 'Pindahkan' : 'Arsipkan'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteItemActive;
