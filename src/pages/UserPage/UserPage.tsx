import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../interfaces/dataInterface";
import { useGetPostsApiQuery } from "../../redux/apis/apis";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const UserPage = () => {
  const navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userData.userData);
  const params = useParams();
  const userPage: data = userData.find(
    (user: data) => user.id === Number(params.id)
  )!;
  if (userPage.id) {
    return <div>{userPage.id !== undefined}</div>;
  }
  return <div>Загрузка</div>;
};

export default UserPage;
