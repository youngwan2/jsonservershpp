import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../components/card.module.css'


interface CardType {
  productList: any;
  authentication:boolean
}

const Card: React.FC<CardType> = ({ productList, authentication }) => {

  if (productList.length !== 0) {
    console.log(productList)
  }

let navigate = useNavigate();
const [choiceInfo,setChoiceInfo] = useState<boolean>()

  return (
    <div className={styles.Card}>
      
        {productList.length !==0?
        <div className={styles.product_css}>
            {productList.map((el:string,i:number)=>{
                return (
                    <div key={i} 
                         className={styles.product_item}
                         onClick={()=>{
                          if(authentication === true){
                          navigate(`/detail/${productList[i].id}`)
                          } else{
                          alert('로그인이 필요합니다.')
                          navigate('/login')  
                          }
                         }}>
                                     
                        <img 
                            width={310}
                            height={450}
                            src={productList[i].img} 
                            alt="상품 이미지"
                            onClick={()=>{
                            let choice=  productList[i].choice ===true? 
                                productList[i].choice = false
                                : productList[i].choice = true
                                setChoiceInfo(choice)
                              
                            }}>
                        </img>
                        <div>{productList[i].id}</div>
                        <div>{productList[i].choice ===true?"[Your Choice]":null}</div>
                        <div>{productList[i].title}</div>
                        <div>{productList[i].price}</div>
                        <div>{productList[i].size}</div>
                        <div>{productList[i].new ===true?"<New!>":null}</div>
                    </div>
    
                )
            })}
        </div> : null}
        
    </div>
  );
};

export default Card;
