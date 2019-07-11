import React,{Component,Fragment} from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import './index.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
        }
        // this.handleToggole() = this.handleToggole.bind(this);
    }
    handleToggole(){
        this.setState({
            show: this.state.show ? false : true
        })
    }
    render(){
        return(
        <Fragment >
             <CSSTransition
                in={this.state.show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                // onEntered={}
                appear={true}
            >
                <div>             
                    hello        
                </div>
            </CSSTransition>
            <button onClick ={() => this.handleToggole()}>
                点击展开展动画效果
            </button>
        </Fragment>
        )
    }
}
export default App; 