import React from "react"
import { useNavigate } from "react-router-dom"
import styles from './Login.module.css'


interface LoginType{
    setAuthentication:Function
}

const Login:React.FC<LoginType> = ({setAuthentication}) =>{

    const navigate= useNavigate()

    //submit 시 실행되는 함수
    const onSubmit =(e:any) =>{
        e.preventDefault()
        setAuthentication(true)
        navigate('/products/?q=')
       
    }
    return (
        <div className={styles.Login}>
            <h1 className={styles.login_title}>Login</h1>
            {/* form을 쓸 때는 항시 e.preventDefault 를 사용 */}
            <form onSubmit={(e)=>{onSubmit(e)}} action="#" method="POST" >
                <div className={styles.login_form}>
                    <div className={styles.login_ID}>
                        <label htmlFor="id">I D</label>
                        <input type={'text'} required minLength={5}></input>
                    </div>
                    <div className={styles.login_PW}>
                        <label htmlFor="pw">PW</label>
                        <input type={'password'} required></input>
                    </div>
                    <div className={styles.login_btn}>
                        <button className={styles.btn}>로그인</button>
                    </div>
                
                </div>
            </form>
           
        </div>
    )
}


export default Login