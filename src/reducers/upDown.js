
const initialState={
counter:0,
userData:[],
}
const changeTheNumber=(state=initialState,action)=>{
    switch(action.type){
    case "INCREMENT":return state+1;
    case "DECREMENT":return state-1;
    case "FETCH_SUCCESS_DATA":return{
        ...state,userData:action.payload
    } 
    default:return state;
}
}
export default changeTheNumber;