import * as facilityService from "../../../service/facilityService";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
export function FacilityCreate() {
    const [facility , setFacility] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await facilityService.findAll();
            setFacility(result);
        }
        fetchApi();
    },[]);
    const navigate = useNavigate();

}