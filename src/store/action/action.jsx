


const profit = (p) => {
                return(dispatch) => {
                    // console.log(p)
                    dispatch({type:"profit" , payload : p})
                }
}


export {
    profit
}