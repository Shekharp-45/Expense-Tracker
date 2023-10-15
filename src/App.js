
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Header from './component/header';
import Home from './pages/home';
import AddExpense from './pages/addexpense';
import Footer from './component/footer';

function App() {
  return (
   <Router>
      <Header/>
     <Routes>
          <Route path='/' exact element={<Home/>} />
         <Route path="/add-expense"  element={<AddExpense/>} />
     </Routes>
     <Footer/>
    </Router>  
  );
}

export default App;
