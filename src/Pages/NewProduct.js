import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { Col, Row } from 'antd';

export default function NewProduct() {
  let [itemsData, setItemsData] = useState([]);
  let [count,setCount] = useState(0)
  function increment(){
   return setCount(count+1)
  }
  function decrement(){
    if(count >0){
    return setCount(count-1)
  }
  }

  useEffect(() => {
    async function getItemsCollection() {
      let itemsReceivingData = await fetch("https://rcz-backend.onrender.com/api/allProductDataFromAnciMart")
      let itemsFormattedData = await itemsReceivingData.json()
      setItemsData(itemsFormattedData);
    };
    getItemsCollection()
  }, [])
  return (
    <>
      <Row>
        {itemsData.map(e => {
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
                    <Button style={{ marginLeft: "20px" }} onClick={increment}>+</Button>
                    <p>{count}</p>
                    <Button onClick={decrement}>-</Button>
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
