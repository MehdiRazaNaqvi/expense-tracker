const initial = {

    bal: 200,
    history: [],
     

}



export default (state = initial, action) => {

    switch (action.type) {

        case ("profit"):
            // console.log(action.payload)     
            return { bal: state.bal + action.payload.amount, history: [...state.history , action.payload] }


        default:
            return state;

    }
}