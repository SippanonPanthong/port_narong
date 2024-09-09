import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './transcript.css';

// Import images for certifications
import uxCert from '../../assets/cert1.jpg';
import uclaCert from '../../assets/uclacert.png';
import freeCodeCampCert from '../../assets/freecodecampcert.png';

import cert1 from '../../assets/cert1.jpg';
import cert2 from '../../assets/cert2.jpg';


const Transcript = () => {
    const [show, setShow] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (image) => {
        setModalImage(image);
        setShow(true);
    };

    return (
        <div id="transcript">
            {/* Updated to include the container for the title */}
            <div className="transcript-title-container">
                <h1 className="transcript-title">Transcript</h1>
            </div>
            <Container style={{ marginTop: '50px' }}>
                {/* Repeat this Row for all 9 transcript */}
                <Row className="transcript-item">
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="transcript-placeholder" onClick={() => handleShow(cert1)}>
                            <img src={cert1} alt="ucla-cert" className="transcript-image" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="transcript-title2">ได้รับรางวัล รองชนะเลิศอันดับ 1 การประกวดผลงานและการเผยแพร่ผลงาน</h3>
                            <p className="transcript-description">
                                การศึกษาค้นคว้าอิสระ (IS) ระดับชั้นมัธยมศึกษาตอนปลาย<br/>
                                โรงเรียนบัวหลวงวิทยาคม สำนักงานเขตพื้นที่การศึกษามัธยม บุรีรัมย์<br/>
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert1} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="transcript-item">
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className="transcript-title2">ได้รับรางวัลระดับดีมาก <br/>
                            การประกวดแข่งขันผลงานสื่อสร้างสรรค์การศึกษาภาพยนตร์สั้นต่อต้านการทุจริต</h3>
                            <p className="transcript-description">
                            ภายใต้โครงการเสริมสร้างคุณธรรม จริยธรรมและธรรมาภิบาลในสถานศึกษา (โครงการโรงเรียนสุจริต) ประจำปีงบประมาณ 2566    
                            </p>
                            <div className="d-flex justify-content-center">
                                <a href={cert2} download className="btn btn-secondary mx-2">Download Certificate</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div className="transcript-placeholder" onClick={() => handleShow(cert2)}>
                            <img src={cert2} alt="ux-cert" className="transcript-image" />
                        </div>
                    </Col>
                </Row>



                {/* Add more Rows here for other certifications */}
            </Container>

            {/* Modal for showing enlarged images */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Body>
                    <img src={modalImage} alt="Enlarged certification" className="modal-image" />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Transcript;
