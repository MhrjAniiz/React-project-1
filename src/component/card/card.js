import React, { Component } from 'react';
import './card.scss';


class Card extends Component{
    constructor(){
        super()
        this.state = {
            showinfo:false
        }
    }

    handleInfo = ()=>{
        this.setState({
            showinfo: !this.state.showinfo
        })
    }

    

    render(){
        const {id,image, city, name,info,remove} = this.props
        return(
                <article className="tour" >
                    <div className="img-container">
                            <img src={image} className="img" alt="profile" />
                            <span className="close-btn" onClick={()=>remove(id)} >
                                <i className="fas fa-window-close" />  
                            </span>
                        </div>
                        <div className="tour-info">
                            <h2 >{city}</h2>
                            <h3>{name}</h3>
                            <h5>info{" "}
                            <span onClick={this.handleInfo}>
                                <i className="fas fa-caret-square-down"/>
                            </span>
                            </h5>
                             {this.state.showinfo&&<p>{info}</p>}
                            
                        </div>
                </article> 
        );
   }
}

export default Card;