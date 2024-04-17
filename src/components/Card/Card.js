import { React, memo } from 'react'
import './Card.css'
import photo1 from '../../assets/Img/NSG6DG8500SR_01_SCOM-fotor-bg-remover-2024041792530.png'
import photo2 from '../../assets/Img/RF29BB86004M_01_Morning_Blue_Glass_White_Glass_SCOM-fotor-bg-remover-20240417103539.png'
import photo3 from '../../assets/Img/WD53DBA900HZA1_01_Dark_Steel_SCOM-fotor-bg-remover-20240417104140.png'
import photo4 from '../../assets/Img/WH53DBH700GFA3_01_Satin_Green_Lights_Off_SCOM-fotor-bg-remover-20240417105830.png'
import photo5 from "../../assets/Img/RF23DB990012_01_White_Glass_SCOM-fotor-bg-remover-2024041711034.png"
import Banner from '../Banner/Banner.js'
import photo6 from "../../assets/Img/SDSAC-7185-S24U-HP-LOB-FullBleed-DT-1440x810.jpg"
import photo7 from "../../assets/Img/Homepage_LOB_LifestyleWK_TheFrame_Desktop_1440x810.jpg"
import photo8 from "../../assets/Img/LOB_Bespoke-AI.jpg"
import photo9 from "../../assets/Img/sustainability-1-dt.jpg"



function Card() {
    const card_item = ["For You", "Mobile & Computing", "TV & Audio", "Home Appliances", " Samsung Live", "For Business"];
    let card_items = card_item?.map((el, inx) => (
        <li key={inx}>
            {el}
        </li>
    ))

    const data_card = [
        {
            id: 1,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo1
        },
        {
            id: 2,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo1
        },
        {
            id: 3,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo2
        },
        {
            id: 4,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo3
        },
        {
            id: 5,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo4
        },
        {
            id: 6,
            title: 'Bespoke 6 cu. ft. Smart Slide-In Gas Range with Smart Oven Camera &...',
            price: 600,
            old_price: 1499,
            img: photo5
        }
    ]

    let card_create = data_card?.map((el) => (
        <div className='card' key={el.id}>
            <div className="new">New</div>
            <div className='card_img'>  <img src={el.img} alt="" />  </div>
            <p>
                {el.title}
            </p>
            <div className='card_price'>
                <p className='card_p_price'>save ${el.price}</p>
                <p className='card_old_price'>From ${el.old_price}</p>
            </div>
            <div className='btn_wrapper'>
                <button>Pre-order-now</button>
            </div>
        </div>
    ))
    const banner_arr = ["Galaxy S24 Ultra ", "Galaxy S24 +", " Galaxy Book4 Ultra", " Galaxy Tab S9 Series ", " Galaxy Watch6 Series"];
    const banner_arr_two = ["The Frame", "The Freestyle 2nd Gen", "usic Frame "]
    const banner_arrthere = ["Certified Re-Newed", "How to recycle"] 
    return (
        <>
            <div className='container'>
                <div className="card_section">
                    <h1>Shop all latest offers and innovations</h1>
                    <ul className='card_items'>
                        {card_items}
                    </ul>
                </div>
                <div className='card_scetion_cards-flex'>
                    {card_create}
                </div>
            </div>
            <Banner
                text={banner_arr}
                title={"Mobile & Computing"}
                img={photo6}
                h1text={'Galaxy S24 Ultra'}
                ptext={'Get up to $750 trade-in credit and $75 instant Samsung Credit with participating carriers.  Try it for 30 days or get a full refund.'}
                btn='Buy now'
            />
            <Banner
                text={banner_arr_two}
                title={"TV & Audio"}
                img={photo7}
                h1text={'Buy. Bezel. Beauty.'}
                ptext={'Buy the Frame, get a Customizable Bezel on us..'}
                btn='Buy now'
            />
            <div className='container'>
            <Banner
                text={banner_arr_two}
                title={"TV & Audio"}
                img={photo8}
                h1text={'Buy. Bezel. Beauty.'}
                ptext={'Buy the Frame, get a Customizable Bezel on us..'}
                btn='Pre order'
            />
            </div>
            <Banner
                text={banner_arrthere }
                title={"Sustainability"}
                img={photo9}
                h1text={'New phone, less waste.'}
                ptext={'Get a refurbished Certified Re-Newed smartphone with the features you love.'}
                btn='Learn More'
            />
        </>
    )
}

export default memo(Card);