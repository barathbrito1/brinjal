import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import "./Carousels.css"

export default  (props) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px`,  }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {props.data.map(e=>{
          return (
            <Link to={{
              pathname:"/Product",
              state:{
                category : e.categoryName,
              }
            }}>
            <div  id="mainBox" >
            <div id='borderShadow' style={{ height: "200", background: '#EEE',  height:"200px"}}>
              <img style={{    height: "90%",
    width: "100%"}} src={e.thumbnailImage}></img>
              {e.categoryName}
              </div>
              </div>
              </Link>
          )
        })}
      </ItemsCarousel>
    </div>
  );
};