import { connect } from "react-redux";
import CounterComponent from "../Components/CounterComponent";
import { increment,decrement } from "../actions/counterActions";

const mapStateToProps=(count)=>{
    return{
        count:count
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        increment:()=>dispatch(increment()),
        decrement:()=>dispatch(decrement())

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent)

/**
 * <CounterComponent counter="">
 */