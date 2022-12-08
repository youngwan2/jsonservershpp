
import React, { useCallback, useEffect, useState } from "react"
import {useSearchParams} from 'react-router-dom'
import Card from "../components/card"
import styles from "../pages/Products.module.css"




interface ProductsType{
    authentication:boolean
}

const Products:React.FC<ProductsType> = ({authentication}) =>{

console.log()
    const [productList, setProductList] = useState([])

    let [searchParams, setSearchParams] = useSearchParams();
    let searchQueryVal = searchParams.get('q')
    console.log(searchQueryVal)

    const getProducts = useCallback( async()=>{
        let searchQueryVal = searchParams.get('q'||'')
        let url = new URL(`https://my-json-server.typicode.com/youngwan2/jsonservershpp/products?q=${searchQueryVal}`)
        console.log(url);
        let res = await fetch(url)
        let getData = await res.json()
        setProductList(getData)
    },[searchParams]);

    useEffect(()=>{
        getProducts();

     },[getProducts])


    return (
        <div className={styles.products}>
            <h1 className={styles.title}>Products</h1>
            <div className={styles.product_list}>
                <Card productList={productList} authentication={authentication}/>
            </div>

     
            <div className={styles.top_shift}
                onClick={()=>{
                    window.scrollTo({top:0,'behavior':"smooth"})
                }}>Top</div>
            
        </div>
    )
}


export default Products