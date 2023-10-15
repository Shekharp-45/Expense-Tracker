import React from 'react'
import Addform from '../../component/addform';
import TopFold from '../../component/topfold';
import './add-expense.css'

const AddExpense = () => {
  return (
    <div className='add-expense'>
    <TopFold/>
    <Addform/>
    </div>
  );
};
export default AddExpense;