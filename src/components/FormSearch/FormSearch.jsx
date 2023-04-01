import PropTypes from 'prop-types';
import style from './FormSearch.module.scss';

const FormSearch = ({ setSearchParams, searchParams }) => {
  const handelchen = even => {
    even.preventDefault();
    const search = even.target.elements.search.value;
    setSearchParams({ query: search });
  };
  const inputValue = searchParams.get('query') ?? '';
  return (
    <div className={style.wrap}>
      <form onSubmit={handelchen}>
        <input
          name="search"
          defaultValue={inputValue}
          className={style.input}
        ></input>
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default FormSearch;

FormSearch.prototype = {
  setSearchParams: PropTypes.func,
  searchParams: PropTypes.func,
};
