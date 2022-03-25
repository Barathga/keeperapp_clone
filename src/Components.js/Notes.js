import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Notes(props) {
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="body">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <IconButton onClick={handleClick} color = 'info'>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Notes;
