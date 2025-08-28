import React from 'react';

import PartnerImg1 from '../../assets/images/partner-img/afarak@2x.png'
import PartnerHoverImg1 from '../../assets/images/partner-img/afarak@2x.png'
import PartnerImg2 from '../../assets/images/partner-img/Bokoni_Platinum Mines_Logo_White.png'
import PartnerHoverImg2 from '../../assets/images/partner-img/Bokoni_Platinum Mines_Logo_White.png'
import PartnerImg3 from '../../assets/images/partner-img/samancor.png'
import PartnerHoverImg3 from '../../assets/images/partner-img/samancor.png'
import PartnerImg4 from '../../assets/images/partner-img/bcm-logo-ws.png'
import PartnerHoverImg4 from '../../assets/images/partner-img/bcm-logo-ws.png'


import Loadable from '@loadable/component';
const OwlCarousel = Loadable(() => import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    responsive: {
        0:{
            items:2,
        },
        576:{
            items:4,
        },
        768:{
            items:4,
        },
        1024:{
            items:5,
        },
        1200:{
            items:6,
        }
    }
}

const Partner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="ml-partner-area mt-minus-top ptb-80 pb-0">
            <div className="container">
                {display ? <OwlCarousel 
                    className="partner-slides owl-carousel owl-theme"
                    {...options}
                > 
                    <div className="single-ml-partner">
                        <a href="https://afarak.com/business/the-mecklenburg-mine/?lang=fi" target="_blank" rel="noreferrer">
                            <img src={PartnerImg1} alt="image" style={{ width: '20px', height: 'auto' }}/>
                            <img src={PartnerHoverImg1} alt="image" style={{ width: '20px', height: 'auto' }}/>
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="https://www.bokoniplatinum.co.za/" target="_blank" rel="noreferrer">
                            <img src={PartnerImg2} alt="image" style={{ width: '20px', height: 'auto' }}/>
                            <img src={PartnerHoverImg2} alt="image" style={{ width: '20px', height: 'auto' }}/>
                        </a>
                    </div>
                
                    <div className="single-ml-partner">
                        <a href="https://samancorcr.com/" target="_blank" rel="noreferrer">
                            <img src={PartnerImg3} alt="image" style={{ width: '20px', height: 'auto' }}/>
                            <img src={PartnerHoverImg3} alt="image" style={{ width: '20px', height: 'auto' }}/>
                        </a>
                    </div>
            
                    <div className="single-ml-partner">
                        <a href="https://blackcr.com/" target="_blank" rel="noreferrer">
                            <img src={PartnerImg4} alt="image" style={{ width: '20px', height: 'auto' }}/>
                            <img src={PartnerHoverImg4} alt="image" style={{ width: '20px', height: 'auto' }}/>
                        </a>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    );
}

export default Partner;