import React from 'react'
import './home.css'
import TopFold from '../../component/topfold'
import ExpenseList from '../../component/expense-list'

const Home = () => {
  return (
    <div className='home'>
     <TopFold/>
     <ExpenseList/>
    </div>
  );
};

export default Home;