
import { useState , React} from "react";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Card } from 'antd';
import { Input,Select,Button } from 'antd';


function MultipleTransaction() {

  //Receivers RIB
  const [val,setVal]=useState([]);

   const handleAdd=()=>{
       const abc=[...val,[]]
       setVal(abc)
   }

   const handleChange=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
    console.log(val);
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }
   console.log(val,"data-")
return(
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

      <div style={{marginTop:20,}}>
      <h3>Receivers</h3>
      <p>To (RIB)</p>
      <Button onClick={()=>handleAdd()} style={{
        marginBottom:10,
     
      }}>Add</Button>
        {val.map((data,i)=>{
            return(
               <div
               style={{
                display:'flex',
               }}>
                    <Input style={{marginRight:5,marginBottom:5,}} value={data} onChange={e=>handleChange(e,i)} />
                    <Button onClick={()=>handleDelete(i)}>x</Button>
               </div>
            )
        })}
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
}

export default MultipleTransaction;
