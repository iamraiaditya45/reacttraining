export const incNumber=()=>{
    return{
        type:"INCREMENT"
    }
}
export const decNumber=()=>{
    return{
        type:"DECREMENT"
    }
}

export const getUserData = () => {
    return (dispatch) => {
      fetch("https://reqres.in/api/unknown")
        .then((res) => res.json())
        .then((data) => {
// console.log(data);
            dispatch({
                 type:"FETCH_SUCCESS_DATA",
                 payload:data?.data,
             })
        });
    };
  };