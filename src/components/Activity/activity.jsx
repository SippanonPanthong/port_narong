import { Container, Row, Col } from 'react-bootstrap';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './activity.css';
import anyyes from '../../assets/anyesThumbnail.png';
import liberThumbNail from '../../assets/liberThumbnail.png';

const Activity = () => {
    return (
        <div id="activity">
            {/* New container for the colored background */}
            <div className="activity-header-container">
                <h1 className='activity-title'>รายละเอียดกิจกรรม</h1>
                <h2 className='activity-header'><span className='emoji'>🎯</span>ข้อมูลกิจกรรมต่างๆ ที่ข้าพเจ้าเคยทำ</h2>
            </div>
            <Container style={{ marginTop: '50px' }}>
                <Row className='each-proj'>
                    <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                        <img
                            src={liberThumbNail}
                            alt="liber reader project"
                            className="rounded-image"
                            style={{ width: '100%' }}
                        />
                    </Col>
                    <Col xs={12} md={6} className="d-flex align-items-center">
                        <div className="text-center">
                            <h3 className='proj-title'>Liber <span className='emoji'>📚</span></h3>
                            <p className='proj-text'>
                                Liber is an interactive e-reader along with book-saving capabilities and a social media aspect -- think your Kindle, GoodReads, and saved-books-app combined.
                            </p>
                            <div style={{ fontSize: '0.8rem', color: 'white', maxWidth: '75%', margin: '0 auto' }}>
                                <h5 className='used-stack'>Stack Used:</h5>
                                React, Material Ui, mongoDb, graphql, three.js/three-fiber, bcrypt, react-router-dom, axios
                            </div>
                            <div className="d-flex justify-content-center">
                                <div className="mr-3">
                                    <a href="https://liber-3-25f01cbf7764.herokuapp.com/" style={{ fontSize: '1rem', color: 'white', marginBottom: 0 }}>Deployed Demo:
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fa-1x mx-1" />
                                    </a>
                                </div>
                                <div className="mr-2">
                                    <a href="https://github.com/pToum21/liber?tab=readme-ov-file" style={{ fontSize: '1rem', color: 'white', marginBottom: 0, padding: '5px' }}>GitHub Repo:
                                        <FontAwesomeIcon icon={faGithub} className="fa-1x mx-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* Add additional projects here following the same structure */}
            </Container>
        </div>
    );
};

export default Activity;
