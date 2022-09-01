import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import NoteList from './components/display/NoteList';
import HeaderApp from './components/header';
import FormInput from './components/input';
import { getInitialData } from './utils';

// import style
import './styles/style.css';

const MyPersonalNote = () => {
  const allNote = getInitialData();
  const [load, setLoad] = useState(true);
  const [notes, setNotes] = useState([]);
  const [archived, setArchived] = useState([]);

  const onSubmit = ({ title, body }) => {
    setNotes((prevState) => {
      return {
        data: [
          ...prevState.data,
          {
            id: +new Date(),
            title: title,
            body: body,
            date: new Date().toLocaleString(),
            archived: false,
          },
        ],
      };
    });
    setLoad(false);
  };

  const handleDelete = (id) => {
    const deleted = notes.filter((item) => item.id !== id);
    setNotes(deleted);

    const deletedArchive = archived.filter((item) => item.id !== id);
    setArchived(deletedArchive);
  };

  const handleArchived = (id) => {
    const archive = allNote.filter((item) => item.id === id);
    archive[0].archived = !archive[0].archived;
    console.log(archive[0].archived);
    setLoad(false);
  };

  const searchHandler = (param) => {
    console.log(param);
  };

  const handleGetData = () => {
    let temp = [];
    let archives = [];
    for (const note of allNote) {
      if (note.archived === false) {
        temp.push({
          id: note.id,
          title: note.title,
          body: note.body,
          createdAt: note.createdAt,
          archived: note.archived,
        });
      } else {
        archives.push({
          id: note.id,
          title: note.title,
          body: note.body,
          createdAt: note.createdAt,
          archived: note.archived,
        });
      }
    }
    setNotes(temp);
    setArchived(archives);
  };

  useEffect(() => {
    handleGetData();
  }, [load]);

  return (
    <div>
      <HeaderApp searchHandler={searchHandler} />
      <div className='note-app__body'>
        <FormInput onSubmit={onSubmit} />

        <div>
          <div>
            <h2>Catatan Aktif</h2>
            <NoteList
              notes={notes && notes}
              handleDelete={handleDelete}
              handleArchived={handleArchived}
            />
          </div>

          <div>
            <h2>Arsip</h2>
            {archived ? (
              <NoteList
                notes={archived && archived}
                handleDelete={handleDelete}
                handleArchived={handleArchived}
              />
            ) : (
              <h2>Tidak ada arsip</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<MyPersonalNote />);
