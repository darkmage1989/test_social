import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useGetCommentsApiQuery } from "../../redux/apis/apis";
import { comments } from "../../interfaces/dataInterface";
interface UserPostProps {
  id: number;
  title: string;
  text: string;
}

const UserPost = ({ title, text, id }: UserPostProps) => {
  const navigate = useNavigate();
  const { data } = useGetCommentsApiQuery(null);
  function test() {
    navigate("/");
  }
  return (
    <>
      <Accordion style={{ width: "400px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Link to={`userpage/${id}`}>
              <Col xs={6} md={4}>
                <Image
                  style={{ width: "80px", height: "80px" }}
                  onClick={test}
                  src="images/avatar.jpg"
                  roundedCircle
                />
              </Col>
            </Link>

            {title}
          </Accordion.Header>
          <Accordion.Body>{text}</Accordion.Body>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Комментарии</Accordion.Header>
              {data ? (
                data.map(
                  (commentData: comments) =>
                    commentData.postId === id && (
                      <div key={commentData.id}>
                        <Accordion.Body>{commentData.email}</Accordion.Body>
                        <Accordion.Body>{commentData.body}</Accordion.Body>
                      </div>
                    )
                )
              ) : (
                <span>Загрузка</span>
              )}
            </Accordion.Item>
          </Accordion>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default UserPost;
