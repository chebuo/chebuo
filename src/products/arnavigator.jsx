import {Swiper,SwiperSlide} from "swiper/react";
import { Pagination, Mousewheel,Keyboard,Navigation,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/gamePage.css"
import "../style/slidePage.css"

import slide_1 from '../assets/arnavigator_1.png'
import slide_2 from '../assets/arnavigator_2.png'
import slide_3 from '../assets/arnavigator_3.png'
import slide_4 from '../assets/arnavigator_4.png'
import slide_5 from '../assets/arnavigator_5.png'
import slide_6 from '../assets/arnavigator_6.png'

const Arnavigator=()=>{
    return(
        <>
            <div className="page-scale">
                <Header/>
                <SlideViewer/>
                <Description/>
            </div>
        </>  
)}
const Header=()=>{
    return(
        <div>
            <h2>ARナビゲーター</h2>
        </div>
    )
}
const Description=()=>{
    return(
        <div>
            <h2>作品概要</h2>
            <ul>
                <li>AR上で目的地に行くための方角をコンパスで指すwebアプリです。</li>
                <li>コンパスは経路を指すので、途中で迷子になることがないです。</li>
            </ul>
            <h2>使用技術</h2>
            <ul>
                <li>JavaScript,A-Flame,AR.js,Google cloud API,gitpages</li>
            </ul>
            <h2>制作背景</h2>
            <ul>
                <li>このアプリ開発で初めてjavaScript、API連携をしました。</li>
                <li>javaScriptはC#とは書き方がかけ離れていたので、かなり戸惑いました。</li>
                <li>ですが、一番詰まったところはjavaScriptではなくA-Flame関係でした。</li>
                <li>まず、このアプリはAR上でコンパスを写し、取得した方角から向きを決めなければいけません。</li>
                <li>なので、A-Flameにあった方角を取得できる機能を使おうとしたら、動かなくて使えませんでした。</li>
                <li>それ以外にも、画面をドラックすると3Dモデルが動くことがわかりました。</li>
                <li>つまり、緯度、経度を指定して配置しても意味がないということです。</li>
                <li>このような、たくさんの欠陥があるフレームワークを土台にして開発していたので完成しませんでした。</li>
                <li>ですが、このハッカソンはweb開発を始める良いきっかけになったので、今ではとても満足しています。</li>
                <li>ちなみに、このアプリはあと方角とARの部分ができれば完成だったのですが、知らないところでチームメイトが完成させていました。</li>
            </ul>
        </div>
    )
}

const SlideViewer=()=>{
    const data = [slide_1, slide_2, slide_3,slide_4,slide_5,slide_6];
    return(
        <Swiper
            slidesPerView={1}
            navigation={true}
            Keyboard={true}
            Mousewheel={true}
            pagination={{
                clickable:true,
            }}
            modules={[Pagination,Mousewheel,Keyboard,Navigation]}
            >
                {data.map((d,i)=>(
                    <SwiperSlide key={i}>
                        <img src={d}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
}
export default Arnavigator