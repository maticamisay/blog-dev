import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  // hacer responsive las imagenes
  //  .responsiveImage {max-width: 100%; width: auto; height: auto;}
  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={this.state.text}
        ></ReactQuill>
      </div>
    );
  }
}

export default Editor;
