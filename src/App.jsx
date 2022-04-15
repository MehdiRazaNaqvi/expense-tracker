import { useState } from "react"
import { connect } from "react-redux"
import "./style.css"

import { profit , loss } from "./store/action/action"

const App = (props) => {


  const [profit_report, setProfit] = useState({ des: "", amount: 0 , add : true });
  const [loss_report, setloss] = useState({ des: "", amount: 0 ,  add : false });


  let date = new Date().toLocaleTimeString();



  return (





    <div className="body" >

      

      <div className="pehla"><h1>  {props.bal}</h1></div>




      <div className="dosra">

        <div className="profit"> <input onChange={(e) =>
          setProfit({ ...profit_report, amount: Number(e.target.value) })
        }

          type="text" className="form-control" placeholder="Amount" /> <input className="form-control" onChange={(e) => setProfit({ ...profit_report, des: e.target.value })} type="text" placeholder="Description" /> <button className="btn btn-outline-success" onClick={() => props.profit(profit_report)} >Submit</button> </div>



        <div className="loss"> <input className="form-control" onChange={(e) => setloss({ ...loss_report, amount: Number(e.target.value) })} type="text" placeholder="Amount" /><input onChange={(e) => setloss({ ...loss_report, des: e.target.value })} className="form-control" type="text" placeholder="Description" /> <button className="btn btn-outline-danger" onClick={() => props.loss(loss_report)} >Submit</button> </div>


        <div className="history" >

          {props.history.map((v, i) =>


            <li className={props.history[i].add == true ? "li addition" : "li minus"} key={i}> <p>{v.amount}</p> <p>{v.des}</p> <p>{date}</p>  </li>



          )}



        </div>


      </div>

    </div>








  )




}


const mapStateToProps = (state) => ({
  bal: state.bal,
  history: state.history,
  add: state.add
})


const mapDispatchToProps = (dispatch) => ({
  profit: (profit_report) => dispatch(profit(profit_report)),
  loss : (loss_report) => dispatch(loss(loss_report))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)




