import './add.css';

import Form from '../../add/form/form.component';

const AddPage = (props) => {
  return (
    <div className='add-page'> 
      <h1>Add a new item</h1>
      <Form onNavigate={props.onNavigate} />
    </div>
  );
};

export default AddPage;