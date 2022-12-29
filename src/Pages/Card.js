import React, { useEffect, useState } from "react";
import { Space, Spin } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import "./card.css";
import Carousels from "./Carousels";
const { Content, Footer } = Layout;




export default function Card() {
  let [collectionData , setCollectionData] = useState([]);
  

  // mount
  useEffect(()=>{
    async function getCollection(){
      debugger
      let receivingData = await  fetch("https://rcz-backend.onrender.com/api/collectionSetList");
      let formattedData = await receivingData.json();
      setCollectionData(formattedData);
    };
    getCollection();
  },[]);
    const {
        // token: { colorBgContainer },
      } = theme.useToken();
    return (
      <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Spin tip="Loading..." spinning={false}>
    <Layout>
      
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          height:"550px",
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
         
        </Breadcrumb>
        <div style={{minHeight: 380,
            background: "rgb(33,37,41)",}}> 
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            padding: 24,
          }}
        >
          <div>
              Categories   
          </div>
          
        </div>
        <Carousels data ={collectionData} />
        </div>  
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
    
  </Spin>
  </Space>
        
    );
}

