import { useDispatch, useSelector } from 'react-redux';
import { checkBookStatus } from '../redux/categories/Categories';
import './Category.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const statusChecker = () => {
    dispatch(checkBookStatus());
  };
  return (
    <div className="check">
      <button onClick={statusChecker} type="button">
        Check status
      </button>
      <h4>{status}</h4>
    </div>
  );
};
export default Categories;
