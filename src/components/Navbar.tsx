import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch,faBars} from '@fortawesome/free-solid-svg-icons'
import { useNavigate} from "react-router-dom";
import styles from '../components/Navbar.module.css';


interface NavarType{
    authentication:boolean
    setAuthentication:Function
}
const Navbar:React.FC<NavarType>= ({authentication,setAuthentication})=>{
  

    const [menuDisplay,setMenuDisplay] = useState(false)

    const navList=['남성','여성','아동/청소년','TOP10','SALE','EVENT','고객센터','코디']
    let navigate= useNavigate();

    const userSearch=(e:any)=>{
        if(e.key ==="Enter"){
            navigate(`/products/?q=${e.target.value}`)
        }
    }


    return (
        <div className="Navbar">
            
            <div className={styles.login}>
                <div 
                    className={styles.login_btn}>
                    <FontAwesomeIcon icon={faUser}/>
                    <div
                        className={styles.login_title}
                        onClick={()=>{
                            navigate('/login')
                            setAuthentication(false)
                        }}>
                           {authentication ===true? 'logout': 'login'}
                    </div>
                </div>
            </div>
            <div className={styles.home_logo}>
                <img 
                    onClick={()=>{
                       navigate('/products/?q=')
                    }}                   
                    className={styles.logo_img} 
                    width={250}
                    src={process.env.PUBLIC_URL +'/logo.png'} 
                    alt="home_logo">
                </img>
            </div>
            <div className={styles.search}>  
                <label 
                    htmlFor="user_search">
                    <input 
                        id="user_search" 
                        type={'text'} required minLength={1}
                        onKeyPress={(e)=>{
                            userSearch(e);
                        }}>
                    </input>
                    <FontAwesomeIcon icon={faSearch} />
                </label>
            </div>
            <div className={styles.menu_container}>
                <div 
                    className={styles.bars}
                    onClick={()=>{
                        menuDisplay ===true? 
                            setMenuDisplay(false):setMenuDisplay(true)
                    }}
                    ><FontAwesomeIcon icon={faBars}/> 메뉴</div>
                    {menuDisplay ===true?
                        <ul className={styles.menu_list}>
                            {navList.map((arr,i)=>{
                                return (
                                    <button key={i}><li >{arr}</li></button>
                                )
                            })}
                        </ul>
                        :null
                    }
            </div>
        </div>
    )
}


export default Navbar;