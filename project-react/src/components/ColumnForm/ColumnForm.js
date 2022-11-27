import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { ADD_COLUMN } from '../../redux/columnsRedux';
import { useParams } from 'react-router';

const ColumnForm = props => {

    const dispatch = useDispatch();
    const { listId } = useParams();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(ADD_COLUMN({ title, icon, listId }));
      setTitle('');
      setIcon('');
   };

	return (
      <form className={styles.columnForm} onSubmit={handleSubmit}>
        Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)}/>
        <Button>Add column</Button>
      </form>
	);
};

export default ColumnForm;