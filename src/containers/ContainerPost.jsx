import Post from "../components/Post";
import PostLayout from "../Layouts/PostLayout";
import Row from "react-bootstrap/Row";

const ContainerPost = ({title, titleBtn}) => {
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

export default ContainerPost;
