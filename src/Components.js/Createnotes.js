import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";


function Createnotes(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isexpanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

  return (
    <div>
      <form className="create-note">
        {isexpanded && (
          <input
            onChange={handleChange}
            placeholder="Title"
            value={note.title}
            name="title"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note"
          value={note.content}
          rows={isexpanded ? 3 : 1}
        />
        <Zoom in={isexpanded}>
        <Fab onClick={submitNote} color="info" aria-label="add">
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Createnotes;


