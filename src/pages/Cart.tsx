import React from "react";
import styles from "../pages/Cart.module.css"
import { useDispatch, useSelector } from "react-redux";
import { cartDel } from "../store";







const Cart = () =>{

    const dispatch:any = useDispatch();

    const store:any = useSelector((store)=>store)
    const cart =store.cart
    return (
        <div className={styles.Cart}>
            <h1 className={styles.title}>장바구니</h1>
            <table className={styles.table}>
                 <thead>
                        <tr>
                            <th>#</th>
                            <th>이미지</th>
                            <th>상품정보</th>
                            <th>판매가</th>
                            <th>수량</th>
                            <th>배송구분</th>
                            <th>주문</th>
                        </tr>
                 </thead>

            {cart.map((cart:any,i:any)=>{
                return (
                    <tbody key={i}>
                        <tr>
                            <td>{cart.id}</td>
                            <td>
                                <img 
                                    width={100}
                                    src={cart.img} alt="상품이미지">

                                </img>
                            </td>
                            <td>{cart.title}</td>
                            <td>{cart.price} 원</td>
                            <td>{cart.count} 개</td>
                            <td>{cart.deliveryFee} 원</td>
                            <td>
                                <button>구매하기</button><br/>
                                <button onClick={()=>{
                                    dispatch(cartDel(i))
                                }}>취소하기</button>   
                            </td>
                        </tr>
                    </tbody>
                )
            })}
               
            </table>

        </div>
    )
}


export default Cart