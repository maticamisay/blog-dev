import Post from "../components/Post";
import PostLayout from "../Layouts/PostLayout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ContainerLayout = ({title, titleBtn}) => {
  return (
    <PostLayout title={title} titleBtn={titleBtn}>
      <Row>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Row>
    </PostLayout>
  );
};

export default ContainerLayout;
