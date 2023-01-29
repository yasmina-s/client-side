import React, { useState } from 'react';
import { Card } from 'antd';
import { Input,Select,Button } from 'antd';


const Transaction = () => {

  return (
    <div className="site-card-border-less-wrapper">
    <Card
      title={<div>
        <h2>Transaction</h2>
        <p>Transfer money from one account to another</p>
      </div>}
      bordered={false}
      style={{
        width:800,
        marginTop:40,
       }}
    >
      
      <div>
        <h3>Sender</h3>
        <p>FROM</p>
        <div
        style={{
               padding:5,
                border: '1px solid 	rgb(105,105,105)',
                background:'#f1f1f1',
              }}
          >User Full Name</div>

      <p style={{marginTop:20,}}>Current Balance</p>
        <div
        style={{
               padding:5,
                border: '1px solid 	rgb(105,105,105)',
                background:'#f1f1f1',
              }}
          >Solde
        </div>

        <p style={{marginTop:20,}}>Amount To Transfer</p>
        <Input size="large" placeholder="Amount"  />

        </div>

        <div style={{marginTop:10,}}>
        <h3>Receiver</h3>
        <p>To (RIB)</p>
        <Input size="large" placeholder="Rib"  />
        <Button block size="large"
        
        style={{
         
          marginTop:20,
          fontSize:20,
         }}
        >TRANSFER</Button>
     
        </div>

      
    </Card>
  </div>
  );
};

export default Transaction;
