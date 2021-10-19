/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Grid from './Grid'
import logo from '../assets/images/Logo-2.png'


const footerAboutLinks = [
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]
const footerCustomerLinks = [
    {
        display: "chính sách đổi trả",
        path: "/about"
    },
    {
        display: "chính sách bảo hành",
        path: "/about"
    },
    {
        display: "chính sách hoàn tiền",
        path: "/about"
    }
]

const Footer = () => {
    return (
       <footer>
           <div className="container">
               <Grid
                col ={4}
                mdCol={2}
                smCol={1}
                gap={10}
               >
                   <div>
                       <div className="footer__title">
                           Tổng đài hỗ trợ
                       </div>
                       .footer__content{
                           <p>
                               Liên 
                           </p>
                       }
                   </div>
               </Grid>
           </div>
       </footer>
    )
}

export default Footer
