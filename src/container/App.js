import React, { Component } from 'react';
import NavBar from '../component/navbar/navbar.js';
import CardComponent from '../component/card/cardComponent';
import {tourData} from '../tourData';
import "@fortawesome/fontawesome-free/css/all.min.css";




class App extends Component{
constructor(){
    super()

    this.state={
        tours : tourData,
    
    };
}
removeInfo=(id)=>{
    const { tours } = this.state;
    const filterItems = tours.filter((res)=> res.id !== id)
 
    this.setState({
        tours: filterItems
    })
}


    render(){
        const {tours} = this.state;
        return <section>
            <NavBar />
            <article className="tourlist">
            <CardComponent tourData={tours} 
            removeTour={this.removeInfo} 
            />
            </article>
        </section>
    }
}

export default App;