import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { selectFilter } from "../../redux/filterSlice";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={css.filter}>
      <label htmlFor="filter">Find contacts by name:</label>
      <input id="filter" type="text" value={filter} onChange={handleChange} />
    </div>
  );
}
