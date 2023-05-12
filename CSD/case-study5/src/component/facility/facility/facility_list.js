import React, {useEffect, useState} from "react";
import {facility} from "./facility";
import Header from "../../2-1-2/header";
import Footer from "../../2-1-2/footer";
import * as facilityService from "../../../service/facilityService";

export function FacilityList() {
    const [facility, setFacility] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await facilityService.findAll();
            setFacility(result);
        }
        fetchApi();
    },[])
    return (
        <>
            <Header/>
            <div className="mySlides w3-display-container w3-center">
                <img
                    src="img/10953_16030216470040397599.jpg"
                    style={{width: "100%", height: 700}}
                />
                <div
                    className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img
                    src="img/du-lich-ben-nghe-tour-da-nang-resort.jpg"
                    style={{width: "100%", height: 700}}
                />
                <div
                    className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
            </div>
            <div className="mySlides w3-display-container w3-center">
                <img
                    src="img/du-lich-ben-nghe-tour-da-nang-resort.jpg"
                    style={{width: "100%", height: 700}}
                />
                <div
                    className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <div className="card mb-3 pb-5" style={{maxWidth: 940}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://furamavietnam.com/wp-content/uploads/2018/10/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    style={{height: 300}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p
                                        className="card-text"
                                        style={{color: "#cbbe73", fontSize: 30}}
                                    >
                                        KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI, FURAMA ĐÀ NẴNG, NỔI TIẾNG LÀ
                                        KHU NGHỈ DƯỠNG ẨM THỰC TẠI VIỆT NAM.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 pb-5" style={{maxWidth: 940}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://fantasea.vn/wp-content/uploads/2017/10/Furama-%C4%90%C3%A0-N%E1%BA%B5ng-Resort.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    style={{height: 300}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">
                                        Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà
                                        Nẵng là cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20
                                        phút), Mỹ Sơn (90 phút) và Huế (2 tiếng. 196 phòng hạng sang
                                        cùng với 70 căn biệt thự từ hai đến bốn phòng ngủ có hồ bơi
                                        riêng đều được trang trí trang nhã, theo phong cách thiết kế
                                        truyền thống của Việt Nam và kiến trúc thuộc địa của Pháp, biến
                                        Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card mb-3 pb-5" style={{maxWidth: 940}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://resortdanang.info/wp-content/uploads/2018/11/furama-da-nang.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    style={{height: 300}}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text">
                                        Furama thành khu nghỉ dưỡng danh giá nhất tại Việt Nam – vinh dự
                                        được đón tiếp nhiều người nổi tiếng, giới hoàng gia, chính
                                        khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh quốc tế.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {facility.map((facilitys, index) => (
                        <div className="col-4">
                            <div className="card" style={{width: "95%"}}>
                                <img
                                    src={facilitys.img}
                                    className="card-img-top"
                                    width="100%"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{facilitys.name}</h5>
                                    <p className="card-text">
                                        Diện Tích : {facilitys.acreage}m <sup>2</sup>
                                    </p>
                                    <a href="#" className="btn btn-primary">
                                        Sửa
                                    </a>
                                    <a href="#" className="btn btn-danger">
                                        Xóa
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/*PAGINATION*/}
            <div className="mt-4">
                <nav aria-label="Page navigation example">
                    <ul className="pagination" style={{justifyContent: "center"}}>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Footer/>
        </>
    )
}