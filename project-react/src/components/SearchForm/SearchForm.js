import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchForm = props => {

  const dispatch = useDispatch();

  const [searchString] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', searchString: { searchString} });
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;