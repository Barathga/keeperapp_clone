import "./App.css";
import Header from "./Components.js/Header";
import Footer from "./Components.js/Footer";
// import Body from "./Components.js/Body";
import Notes from "./Components.js/Notes";
import Createnotes from "./Components.js/Createnotes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newnote) {
    setNotes((prevNote) => {
      return [...prevNote,newnote];
    });
  }

  function deletenote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id ;
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <Createnotes onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Notes key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deletenote}/>;
      })}
      <Footer />
    </div>
  );
}

export default App;
