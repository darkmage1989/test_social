import { Button } from "react-bootstrap";
import style from "./NotFound.module.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={style.not__found__box}>
      <Button onClick={()=> navigate('/')} style={{marginTop: '300px'}} variant="warning">Вернуться на главную</Button>{' '}
    </div>
  );
};

export default NotFound;
