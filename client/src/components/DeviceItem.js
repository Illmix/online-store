import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from 'react-router-dom';
import {DEVICE_ROUTE} from "../utils/consts";
const DeviceItem = ({device}) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className="mt-3" onClick={()=>navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: "pointer"}} className="p-3" border={"dark"}>
                <Image src={'http://localhost:5000/' + device.img} width={120} height={120}/>
                <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
                    <div></div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={15} height={15} src={star}/>
                    </div>
                </div>
                <div style={{fontWeight: "bold"}}>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;