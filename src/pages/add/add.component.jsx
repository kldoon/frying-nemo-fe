import './add.css';
import Form from '../../components/add/form/form.component';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
const AddPage = () => {
    const userContext = useContext(UserContext); 
    const navigate = useNavigate();
    useEffect(() => {
        if (userContext.user === null) {
            navigate('/log-in', { replace: true });
        }
    }, []);
    return (
        <div className='add-form'>
            <h1>Add a new item</h1>
            <Form user={userContext.user} />
        </div>
    );
};

export default AddPage;