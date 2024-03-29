import React, { Fragment } from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onArchive, onUnArchive }) => {
  const NotesActive = notes.filter((note) => note.archived === false);
  const NotesArchive = notes.filter((note) => note.archived === true);

  return (
    <Fragment>
      <section>
        <h2 className="title">Catatan Aktif</h2>
        <div className="notes-list">
          {NotesActive.length ? (
            NotesActive.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onArchive={onArchive}
              />
            ))
          ) : (
            <p className="note-alert">Catatan Aktif Tidak Tersedia!</p>
          )}
        </div>
      </section>
      <section>
        <h2 className="title">Catatan Arsip</h2>
        <div className="notes-list">
          {NotesArchive.length ? (
            NotesArchive.map((note) => (
              <NoteItem
                key={note.id}
                note={note}
                onDelete={onDelete}
                onUnArchive={onUnArchive}
              />
            ))
          ) : (
            <p className="note-alert">Catatan Arsip Tidak Tersedia!</p>
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default NoteList;
