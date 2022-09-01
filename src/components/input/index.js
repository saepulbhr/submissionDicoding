import React, { useRef, useState } from 'react';

const FormInput = ({ onSubmit }) => {
  const [limit, setLimit] = useState(50);
  const [payload, setPayload] = useState({
    title: '',
    body: '',
  });

  const handleTitle = (e) => {
    setLimit(limit - 1);
    setPayload({ ...payload, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(payload);
  };

  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <p className='note-input__title__char-limit'>sisa karakter : {limit}</p>
      <form onSubmit={handleSubmit}>
        <input placeholder='title...' onChange={handleTitle} />
        <textarea
          className='note-input__body'
          placeholder='body'
          onChange={(e) => setPayload({ ...payload, body: e.target.value })}
        ></textarea>
        <button type='submit'>buat</button>
      </form>
    </div>
  );
};

export default FormInput;
