


const profit = (p) => {
                return(dispatch) => {
                    // console.log(p)
                    dispatch({type:"profit" , payload : p })
                }
}



const loss = (p) => {
    return(dispatch) => {
        // console.log(p)
        dispatch({type : "loss" , payload : p})
    }
}


export {
    profit,
    loss
}