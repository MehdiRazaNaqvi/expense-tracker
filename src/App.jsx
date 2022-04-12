import { useState } from "react"
import { connect } from "react-redux"
import "./style.css"

import { profit } from "./store/action/action"

const App = (props) => {


  const [profit_report, setProfit] = useState({ des: "", amount: 0 });
  const [losshua, setloss] = useState({ des: "", amount: 0 });




  return (





    <div className="body" >

      <div className="pehla"><h1> Balance : {props.bal}</h1></div>


      <div className="dosra">

        <div className="profit"> <input onChange={(e) =>
          setProfit({ ...profit_report, amount: Number(e.target.value) })
        }

          type="number" /><input onChange={(e) => setProfit({ ...profit_report, des: e.target.value })} type="text" /> <button onClick={() => props.profit(profit_report)} >Submit</button> </div>



        <div className="loss"> <input onChange={(e) => setloss({ amount: e.target.value })} type="text" /><input type="text" /> </div>


        <div className="history" >

                {props.history.map((v,i) => 
                
                
                  <li key={i}> <p>{v.amount}</p> <p>{v.des}</p></li>
                
                
                
                )}



        </div>

      </div>

    </div>








  )




}


const mapStateToProps = (state) => ({
  bal: state.bal,
  history: state.history
})


const mapDispatchToProps = (dispatch) => ({
  profit: (profit_report) => dispatch(profit(profit_report))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)




