import React, { useState } from 'react'
import './add-form.css';
import { categories } from '../../constants/add-expense';
import {default as Successmodal} from "../addform/success-modal";
import { useDispatch } from 'react-redux';
import{ addExpense }from '../../redux/action/expenses';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addform = () => {
  const cate=categories;
  const [categoryopen, setcategoryopen]=useState(false);
  const [title, settitle]=useState("");
  const [ amount , setamount]=useState("");
  const [ category, setcatagory]=useState("");
  const dispatch=useDispatch();
  const [modalopen, setmodalopen]=useState(false);

 const handletitle=(e)=>{
    settitle(e.target.value);
  }
  const handleamount=(e)=>{
    const val=parseFloat(e.target.value);
    if(isNaN(val)){
      setamount("");
      return
    }
    setamount(val);
    
  }
  const handlecategory=(category)=>{
    setcatagory(category);
    setcategoryopen(false);
    //it for drop down remove automatically of category means close krto
  }
  const handlesubmit=()=>{
    if(title==='' || amount==='' || !category){
      const notify = () => toast("Please Enter Valid Data");
      notify();
      return
    }
    const data={
      title,
      amount,
      category,
      createdAt:new Date(),
    };
    console.log("here");
    dispatch(addExpense(data));
    setmodalopen(true);
  };
  return (
    <div className='add-form'>
    <ToastContainer
position="bottom-left"
autoClose={3500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
/>
<Successmodal modalopen={modalopen} setmodalopen={setmodalopen}/>
    <div className='form-item'>
    <label>Title</label>
    <input placeholder='give name to your expenditure' value={title} onChange={(e)=>handletitle(e)}/>
    </div>
    <div className='form-item'>
    <label>Amount ₹</label>
    <input value={amount} placeholder='Enter Amount' className='amount-input' onChange={(e)=>handleamount(e)}/>
    </div>
    <div className='category-container-parent'></div>
       <div className='category'>
        <div className='category-dropdown' onClick={()=>setcategoryopen(!false)}>
          <label>{category ? category.title:'category'}</label>
          {/* by default i is category if i click on education then it will show education as label */}
          <i class="fi-rr-angle-down"></i>
        </div>
        {categoryopen && (
        <div className='category-container'>
        {cate.map(category=>(
          <div 
          className='category-item' 
          style={{
            borderRight:`5px solid ${category.color}`,
          }} 
          key={category.id} 
          onClick={()=>handlecategory(category)}
          > 
          <label>{category.title}</label>
          <img src={category.icon} alt={category.title} />
          </div>
        ))}
      </div>
    )}  
    </div>
    <div className='form-add-button'>
      <div  onClick={handlesubmit}>
        <label>Add</label>
        <i class="fi-rr-paper-plane"></i>
      </div>
    </div>
  </div>
  );
};

export default Addform; 