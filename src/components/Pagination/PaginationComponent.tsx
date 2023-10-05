import { data } from "../../interfaces/dataInterface";
// import { paginationCreator } from "../../Units/PaginationCreator";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import style from './PaginationComponent.module.css'

interface PaginationComponentProps {
  userCount: Array<data>;
  usersPerPage: number;
  paginate: (i: number) => void;
  currentPage: number;
}

const PaginationComponent = ({
  userCount,
  usersPerPage,
  paginate,
  currentPage,
}: PaginationComponentProps) => {
  let active = currentPage;
  let items = [];
  for (
    let page = 1;
    page <= Math.ceil(userCount.length / usersPerPage);
    page++
  ) {
    items.push(
      <Pagination.Item
        onClick={() => paginate(page)}
        key={page}
        active={page === active}
      >
        {page}
      </Pagination.Item>
    );
  }
  return (
    <div className={style.pagination__box}>
      <Pagination>
        <Pagination.First onClick={() => paginate(1)} />
        <Pagination.Prev onClick={() => paginate(currentPage !== 1? currentPage-1: items.length)}/>
        {items}
        <Pagination.Next onClick={() => paginate(currentPage !== items.length? currentPage +1: 1)}/>
        <Pagination.Last  onClick={() => paginate(items.length)}/>
      </Pagination>
      <br />
    </div>
  );
};

export default PaginationComponent;