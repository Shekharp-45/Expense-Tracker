import React from 'react'
import Modal from 'react-modal';
import './success-modal.css'
import { Link } from 'react-router-dom';

const Successmodal = ({modalopen,setmodalopen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:"#71ccca",
          borderRadius:"12px",
        },
      };
  return (
    <Modal
    isOpen={modalopen}
    style={customStyles}
    contentLabel="Example Modal">
    <div className='modal-inner'>
        <label>Expense Added Successfully</label>
        <img 
        src={require('../../constants/assets/images/added-image.png')} 
        alt='expense added'
        className='added-image'/>
    </div>
    <Link to='/'>
    <div className='take-home-button'>
        <i class="fi-rr-home"></i>
        Home
    </div>
    </Link>

    </Modal>
   );
};

export default Successmodal;