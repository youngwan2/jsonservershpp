import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "../pages/Detail.module.css"
import { useSelector,useDispatch } from "react-redux"
import { cartAdd } from "../store"




const Detail = () =>{

let {id} = useParams();
let i = Number(id)

const dispatch = useDispatch()
const cart = useSelector((result)=>result)

console.log(cart)





type ListType={
    id:number;
    title:string;
    price:number;
    new:boolean;
    choice:boolean;
    size:string
    img:HTMLImageElement;
}
const [productList,getProductList] = useState<ListType[]>()

if(productList !== undefined){
    console.log(productList)
}

const getProducts =async()=>{
    let url = new URL('https://my-json-server.typicode.com/youngwan2/jsonservershpp/products');
    let res = await fetch(url);
    let getData = await res.json();
    getProductList(getData)

}

useEffect(()=>{
    getProducts()

},[])



    return (
        <div className="Detail">

            {productList !== undefined?
            <div className={styles.detail_item}>
                <img 
                    width={300} height={400}
                    src={`${productList[i].img}`} 
                    alt="디테일 상품 이미지"></img>
                <div className={styles.description}>
                    <h4><div>{productList[i].title}</div></h4>
                    <div>{productList[i].price}원</div>
                    <div>{productList[i].choice}</div>
                    <div>{productList[i].size}</div>
                    <button>구매하기</button>
                    <button onClick={()=>{
                        dispatch(cartAdd({id:productList[i].id,title:productList[i].title,price:productList[i].price,count:1,deliveryFee:3000,img:productList[i].img}))
                        console.log('클릭됨')
                    }}>장바구니</button>
                </div>
            </div>:null
            }
            <h2>상품 소개</h2>
            <div className={styles.detail_img} >
                <img
                    
                    src={process.env.PUBLIC_URL +"/detail.png"} 
                    alt="상품설명"></img>
            </div>

            
        </div>
    )
}


export default Detail