import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
     };

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            Description: <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>Add list</Button>
        </form>

    );
}

export default ListForm;