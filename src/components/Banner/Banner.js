import { React, memo } from 'react'
import './Banner.css'

function Banner(props) {
    let craete_banner_item = props.text?.map((el, inx) => (
        <li className='banner_item' key={inx}>
            {el}
        </li>
    ))
    return (
        <>

            <div className='bg_img_banner' style={{ background: `url(${props.img}) no-repeat center/cover` }}>
                <div className='container'>
                    <h1 className='banner_title'>{props.title}</h1>
                    <ul className='banner_ul_item'>
                        {craete_banner_item}
                    </ul>
                    <img className='imgs_o8' src={props.img_08} alt="" width={"100%"} />
                    <div className='text_content_banneer'>
                        <h1>
                            {props.h1text}
                        </h1>
                        <p>
                            {props.ptext}
                        </p>
                        <button>
                            {props.btn}
                        </button>
                    </div>
                </div>
            </div>
          

        </>
    )
}

export default memo(Banner)