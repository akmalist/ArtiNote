import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

  const [zoomBtn, setZoomBtn] = useState(false);
  const [noteSize, setnoteSize] = useState("1");

  function handleChange(event) {
    const { value, name } = event.target;
    setInputText(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(inputText);
    event.preventDefault();
    setInputText({
      title: "",
      content: ""
    });
  }

  function handleBtnclick() {
    setZoomBtn(true);
    setnoteSize("3");
  }

  return (
    <div>
      <form className="create-note" onClick={handleBtnclick}>
        {zoomBtn && (
          <input
            onChange={handleChange}
            placeholder="Title"
            type="text"
            name="title"
            value={inputText.title}
          />
        )}

        <textarea
          onChange={handleChange}
          placeholder="Take a note..."
          name="content"
          rows={noteSize}
          type="text"
          value={inputText.content}
        />
        <Zoom in={zoomBtn}>
          <Fab onClick={submitNote}>
            <span>
              {" "}
              <AddIcon />{" "}
            </span>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
