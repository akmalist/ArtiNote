import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: ""
  });

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

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          placeholder="Title"
          type="text"
          name="title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          placeholder="Take a note..."
          name="content"
          rows="3"
          type="text"
          value={inputText.content}
        />

        <button onClick={submitNote}>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
