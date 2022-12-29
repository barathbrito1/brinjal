import React, { useEffect, useState } from 'react';
import './Product.css';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Button } from 'antd';
import { Col, Row } from 'antd';

 function Product(props) {
  let [productData,setProductData] = useState([]);
  let [cartData,setCartData] = useState([])
  let [count,setCount] = useState(0)

  function increment(){
   return setCount(count+1)
  }
  function decrement(){
    if(count >0){
    return setCount(count-1)
  }
  }

  useEffect(()=>{
      async  function getFilteredCategory(categoryName){
          const receivingProductData = await fetch("https://rcz-backend.onrender.com/api/getSpecificAnciDataCollection", {
      method: 'POST',
    headers: {
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({category : categoryName})
  });
  const formattedProductData = await receivingProductData.json(categoryName);
debugger
  setProductData(formattedProductData)
      }
       if(props.location && props.location.state && props.location.state.category){
        getFilteredCategory(props.location.state.category);
       }
  },[])

  return (
    <>
      <Row>
        {productData.map((e,index) => {
          let { id, thumbNail, price, spareName } = e
          return (
            <>
              <Col span={6}>
                <Card
                  key={id}
                  hoverable
                  style={{
                    width: 240,
                    marginBottom: "15px",
                    marginLeft: "40px"
                  }}
                  cover={<img alt="example" src={thumbNail} />}
                >
                  <h6>{spareName.slice(0, 15)}</h6>
                  <p>${price}</p>
                  <div style={{display:"flex"}}> 
                  <Button type="primary" style={{ marginLeft: "-10px" }}>Add to Cart</Button> 
                  <Button type="primary" style={{ marginLeft: "20px" }} onClick={(e)=>{setCartData({...cartData, [index] : cartData[index] ? cartData[index]+1 :1 })}}>{
                  cartData[index]? 
                  <div><button onClick={(e)=>{setCartData({...cartData, [index]:cartData[index] ? cartData[index]+1 : -1})}}>+</button>
                  {cartData[index]}
                  <button onClick={(e)=>{setCartData({...cartData, [index]:cartData[index] ? cartData[index]-1 :1})}}>--</button>
                  </div>:"ADD"}</Button>               
                  {/* <Button style={{ marginLeft: "20px" }} onClick={decrement}>-</Button>
                    <p>{count}</p>
                    <Button onClick={increment}>+</Button>  */}
                  </div>
                </Card>
              </Col>
            </>
          )
        })}
      </Row>
    </>
    )
}


export default withRouter(Product)