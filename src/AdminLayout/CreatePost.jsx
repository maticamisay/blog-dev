import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import ReactQuill, { Quill } from "react-quill";
import Editor from "../components/ReactQuillPost";
const CreatePost = () => {
  const [value, setValue] = useState("");
  var toolbarOptions = ["bold", "italic", "underline", "strike"];

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  function createMarkup() {
    return { __html: value };
  }
  console.log(value);
  return (
    <Container className="mt-5">
      <h1 className="py-3">Comienza a crear</h1>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
      />
      <Button className="mt-3">Crear</Button>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Container>
  );
};

export default CreatePost;
