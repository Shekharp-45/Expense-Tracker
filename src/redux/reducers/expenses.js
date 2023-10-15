import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

const initialList=()=>{
    const list=localStorage.getItem("expense-list");
    let expences=[];
    if(list){
        expences=JSON.parse(list);
    }
    return expences;
}
const initialState = {
    expenseList: initialList(),
    query: "",
  };
//ADDed data will add into this array from addform to action to here
export const expenseReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_EXPENSE:{
            localStorage.setItem("expense-list",JSON.stringify([...state.expenseList,action.data]))
            return{
                ...state,
                expenseList:[...state.expenseList,action.data],
            };
        }
        case DELETE_EXPENSE:{
            const {data}=action;
            const updatedlist=state.expenseList.filter(
                item=>item.createdAt !== data.createdAt
            );
            localStorage.setItem("expense-list",JSON.stringify(updatedlist));
            return {
                ...state,
                expenseList:updatedlist,
            };
        }
        case SEARCH_EXPENSE:{
            const {query}=action;
            return {
                ...state,
                query,
            };
        }
        default:
            return state;
    }
};