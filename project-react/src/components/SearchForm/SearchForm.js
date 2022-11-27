import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, UPDATE_SEARCHSTRING } from '../../redux/searchStringRedux';

const SearchForm = props => {

  const dispatch = useDispatch();

  const defaultSearchString = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(defaultSearchString);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(UPDATE_SEARCHSTRING(searchString));  
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;