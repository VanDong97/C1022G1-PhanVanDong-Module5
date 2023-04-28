import {Component} from "react";

class Header extends Component{
   render() {
       return (
           <nav className="navbar navbar-expand-lg bg-success text-white ">
               <img src="/logo/Furama-Resort.jpg" style={{ width: 120 }} alt="" />
               <div className="container-fluid">
                   <a className="navbar-brand text-white" href="#">
                       GIỚI THIỆU
                   </a>
                   <button
                       className="navbar-toggler"
                       type="button"
                       data-bs-toggle="collapse"
                       data-bs-target="#navbarNav"
                       aria-controls="navbarNav"
                       aria-expanded="false"
                       aria-label="Toggle navigation"
                   >
                       <span className="navbar-toggler-icon" />
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item mx-4">
                               <a
                                   className="nav-link active text-white"
                                   aria-current="page"
                                   href="#"
                               >
                                   LOẠI PHÒNG
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   ẨM THỰC
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   HỘI NGHỊ
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   SỰ KIỆN
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   SPA
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   GIẢI TRÍ
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   ĐIỂM ĐẾN
                               </a>
                           </li>
                           <li className="nav-item mx-4">
                               <a className="nav-link text-white" href="#">
                                   ƯU ĐÃI
                               </a>
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
       );
   }
}
export default Header;