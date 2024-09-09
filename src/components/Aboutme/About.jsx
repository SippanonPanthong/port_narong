import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faDiscord, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import avatar1 from '../../assets/Profile2.jpg';
import avatar2 from '../../assets/IMG_0113.jpg';
import avatar3 from '../../assets/Profile.png';
import './about.css';

function About() {
    const [showTextBox, setShowTextBox] = useState(false);
    const [randomText, setRandomText] = useState('');
    const [currentImage, setCurrentImage] = useState(avatar3);
    const [currentImage2, setCurrentImage2] = useState(avatar1);

    const textOptions = [
        'ยินดีที่ได้รู้จัก',
        'ฉันชื่อเล่น บาส',
        'อยากรู้ฉันให้มากขึ้นใช่ไหมหล่ะ',
        'อยากรู้อะไร เลือกด้านบนได้เลย',
        'ดีใจนะ ที่เข้ามาเยี่ยมชม',
        'ขอบคุณครับ'
    ];

    useEffect(() => {
        if (showTextBox) {
            const randomIndex = Math.floor(Math.random() * textOptions.length);
            setRandomText(textOptions[randomIndex]);
        }
    }, [showTextBox]);

    const handleImageClick = () => {
        setShowTextBox(!showTextBox);
    };

    const handleImage2Click = () => {
        setShowTextBox(!showTextBox);
    };

    useEffect(() => {
        if (showTextBox && randomText === '' && textOptions.length > 0) {
            setRandomText('สวัสดีครับ');
        }
    }, [showTextBox, randomText, textOptions]);

    return (
        <div className="about-container" id="about-me">
            <div className="dot-container">
                {Array.from({ length: 150 }, (_, index) => {
                    const dotStyle = {
                        backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
                        left: `${Math.random() * 100}vw`,
                        top: `${Math.random() * 100}vh`,
                        animationDelay: `-${Math.random() * 20}s`,
                    };
                    return <div className="dot" style={dotStyle} key={index}></div>;
                })}
            </div>

            <div className="container text-center">
                <h1 className='first-name'>Mr. Narongdach Sujintanathum</h1>
                <p className='personal-title'>"ผมเป็นนักเรียนมัธยมปลายที่มีความสนใจในด้านเทคโนโลยีสารสนเทศ และ การเขียนโปรแกรมเป็นสิ่งที่ผมชื่นชอบมาก"</p>
                <p className='about-me'>
                เพราะมันไม่เพียงแต่ช่วยให้ผมแก้ปัญหาได้อย่างสร้างสรรค์ แต่ยังเปิดโอกาสให้ผมได้ค้นพบและเรียนรู้สิ่งใหม่ๆ อยู่เสมอ ผมมีความกระตือรือร้นในการพัฒนาทักษะด้านนี้ และเชื่อว่าการศึกษาในคณะเทคโนโลยีสารสนเทศจะช่วยเสริมสร้างความรู้และความสามารถที่จำเป็นในการก้าวหน้าในอนาคต ผมมั่นใจว่าการเรียนในคณะนี้จะทำให้ผมสามารถนำความรู้ที่ได้รับไปใช้ในการพัฒนาเทคโนโลยีที่มีประโยชน์ต่อสังคมได้
                <br/>
                <br/>
                ผมหวังเป็นอย่างยิ่งว่าจะได้เข้าร่วมเป็นส่วนหนึ่งของมหาวิทยาลัยนี้ เพื่อเรียนรู้และเติบโตไปพร้อมกับเพื่อนร่วมรุ่นและคณาจารย์ที่มีความรู้และประสบการณ์ ผมเชื่อว่ามหาวิทยาลัยของท่านจะเป็นสถานที่ที่เหมาะสมที่สุดสำหรับผมในการพัฒนาทักษะและเติบโตในสายงานที่ผมรัก
                </p> 

                <div className="social-links-container">
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faLinkedin} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faGithub} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faDiscord} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="https://www.facebook.com/narongdach.bass">
                        <FontAwesomeIcon icon={faFacebook} className="fa-1x socail-icons" />
                    </a>
                    <a className="social-links" href="">
                        <FontAwesomeIcon icon={faTwitter} className="fa-1x socail-icons" />
                    </a>
                </div>

                {/* First Avatar image with click event */}
                <img
                    src={currentImage}
                    alt="avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 4s infinite linear',
                    }}
                    onClick={handleImageClick}
                />

                {/* Second Avatar image with click event */}
                <img
                    src={currentImage2}
                    alt="second avatar image"
                    className="rounded-circle img-fluid swipe-image"
                    style={{
                        width: '180px',
                        height: '180px',
                        cursor: 'pointer',
                        objectFit: 'cover',
                        border: '4px solid transparent',
                        position: 'relative',
                        marginLeft: '50px', // Adjust this value to reduce space between images
                        animation: 'innerBorderAnimation 1s infinite alternate, outerRingAnimation 5s infinite linear',
                    }}
                    onClick={handleImage2Click}
                />

                {/* Render text box conditionally */}
                {showTextBox && (
                    <div className="text-box cartoon-bubble">
                        <p>{randomText}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default About;
