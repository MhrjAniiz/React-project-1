import React from 'react';
import Card from './card';




const CardComponent = ({tourData,removeTour})=>{

    const listcomponent = tourData.map((user,i)=>{
       return <Card key={i} id={tourData[i].id}
        image={tourData[i].img}
         name={tourData[i].name} 
         city={tourData[i].city}
        info={tourData[i].info}
        remove={removeTour}
       

    />
    });
    return(
       <div className="cardlist"> 
            {listcomponent}
        
        </div>
      
    );
}

export default CardComponent;