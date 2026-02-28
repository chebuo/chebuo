import Soapslider from '../games/soapslider/soapslider.jsx'
import Bigbeetle from '../games/bigbeetle/bigbeetle.jsx'
import Cooking from '../games/cooking/cooking.jsx'
import Chebusitu from '../games/chebusitu/chebusitu.jsx'
import Cheburashka from '../games/cheburashka/cheburashka.jsx'

import soapslider_icon from '../assets/soapslider_icon.jpg'
import bigbeetle_icon from '../assets/bigbeetle_icon.jpg'
import cooking_icon from '../assets/cooking_icon.png'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import cheburashka_icon from '../assets/cheburashka_icon.png'

export const data=[
    {
        date:"2024年4月",
        description:"福岡工業大学に入学"
    },
    {
        date:"2024年5月",
        title:"石鹸スライダー",
        icon:soapslider_icon,
        description:"開発を始めて一番最初に自分で作った作品です。これは滑り続ける石鹸を操作して障害物をよけるゲームです。",
        technology:["個人開発","unity"],
        path:"/soapslider",
        element:Soapslider,
    },
    {
        date:"2024年7月",
        title:"大きなカブトムシ",
        icon:bigbeetle_icon,
        description:'大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。',
        technology:["個人開発","unity","UIToolKit","ObjectPool"],
        path:"/bigbeetle",
        element:Bigbeetle
    },
    {
        date:"2024年8月",
        title:"15秒クッキング",
        icon:cooking_icon,
        description:"2日間で福岡の学生が集まってゲームを作成するゲームジャムの作品です。他大学の人とチーム開発をするのは初めてだったので良い経験になりました。",
        technology:["チーム開発","unity"],
        path:"/cooking",
        element:Cooking
    },
    {
        date:"2024年11月",
        title:"チェブラーシカから部室を守れ！！",
        icon:chebusitu_icon,
        description:'ハッカソンでコーディングをしっかりした初めての作成した作品です。このゲームはチェブラーシカというキャラクターを使ったミニゲームです。たくさんのかわいいチェブラーシカが登場します。',
        technology:["チーム開発","ハッカソン","unity","DoTween"],
        path:"/chebusitu",
        element:Chebusitu
    },
    {
        date:"2025年3月",
        title:"チェブラーシカの3Dモデル",
        icon:cheburashka_icon,
        description:"チェブラーシカは私がとても好きなキャラクターです。この作品で初めてボーンを入れてアニメーションまで作成しました。",
        technology:["個人開発","blender"],
        path:"/cheburashka",
        element:Cheburashka
    }
]