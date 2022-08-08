import { useContext, useEffect } from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.snow.css";
import LoginContext from "../../context/LoginContext.js";
import postServices from "../../services/posts.js";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [content2, setContent2] = useState([]);


  const { token, setToken } = useContext(LoginContext);
  const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
  useEffect(() => {
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setToken(`Bearer ${user.token}`);
    }
  }, []);
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
  let navigate = useNavigate();
  const addPost = (e) => {
    e.preventDefault();
    const postObject = {
      title,
      content: [content,content2]
    };
    console.log(postObject);
    postServices.create(postObject, { token }).then(
      (returnedPost) => {
        console.log(returnedPost);
      },
      function (reason) {
        console.log("reason"); // Error!
        navigate("/login");
      }
    );
  };
  return (
    <Container className="mt-5">
      <h1 className="py-3">Comienza a crear</h1>
      <h2>Titulo del blog</h2>
      <ReactQuill
        theme="bubble"
        value={title}
        onChange={setTitle}
        className="bubble-editor"
      />
      <h2>Contenido del blog</h2>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={content}
        onChange={setContent}
      />
      <ReactQuill
        theme="snow"
        modules={modules}
        value={content2}
        onChange={setContent2}
      />
      <Button className="mt-3" onClick={addPost}>
        Crear
      </Button>
    </Container>
  );
};

export default CreatePost;
