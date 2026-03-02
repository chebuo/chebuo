import Soapslider from '../products/soapslider.jsx'
import Bigbeetle from '../products/bigbeetle.jsx'
import Cooking from '../products/cooking.jsx'
import Pacman from '../products/pacman.jsx'
import Chebusitu from '../products/chebusitu.jsx'
import Kirby from '../products/kirby.jsx'
import Cheburashka from '../products/cheburashka.jsx'
import Arcodemodel from '../products/arcodemodel.jsx'
import Arnavigator from '../products/arnavigator.jsx'
import Kurimanju from '../products/kurimanju.jsx'
import Limit_diary from '../products/limit_diary.jsx'

import soapslider_icon from '../assets/soapslider_icon.jpg'
import bigbeetle_icon from '../assets/bigbeetle_icon.jpg'
import cooking_icon from '../assets/cooking_icon.png'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import pacman_icon from '../assets/pacman_icon.png'
import kirby_icon from '../assets/kirby_icon.png'
import cheburashka_icon from '../assets/cheburashka_icon.png'
import arcodemodel_icon from '../assets/arcodemodel_icon.png'
import arnavigator_icon from '../assets/arnavigator_icon.png'
import kurimanju_icon from '../assets/kurimanju_icon.png'
import limit_diary_icon from '../assets/limit_diary_icon.png'

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
        date:"2024年12月",
        title:"PAC-MANの3Dモデル",
        icon:pacman_icon,
        description:"",
        technology:["個人開発","blender"],
        path:"/pacman",
        element:Pacman
    },
    {
        date:"2025年1月",
        title:"カービィの3Dモデル",
        icon:kirby_icon,
        description:"",
        technology:["個人開発","blender"],
        path:"/kirby",
        element:Kirby
    },
    {
        date:"2025年2月",
        title:"チェブラーシカの3Dモデル",
        icon:cheburashka_icon,
        description:"チェブラーシカは私がとても好きなキャラクターです。この作品で初めてボーンを入れてアニメーションまで作成しました。",
        technology:["個人開発","blender","アニメーション"],
        path:"/cheburashka",
        element:Cheburashka
    },
    {
        date:"2025年2月",
        title:"A-Flame触ってみた",
        icon:arcodemodel_icon,
        description:"",
        technology:["個人開発","A-Flame","AR.js","gitpages"],
        path:"/arcodemodel",
        element:Arcodemodel
    },
    {
        date:"2025年2月",
        title:"ARナビゲーター",
        icon:arnavigator_icon,
        description:"",
        technology:["チーム開発","JavaScript","A-Flame","AR.js"],
        path:"/arnavigator",
        element:Arnavigator
    },
    {
        date:"2025年3月",
        title:"くりまんじゅうの3Dモデル",
        icon:kurimanju_icon,
        description:"",
        technology:["個人開発","blender","アニメーション"],
        path:"/kurimanju",
        element:Kurimanju
    },
    {
        date:"2025年8月",
        title:"限界日記",
        icon:limit_diary_icon,
        description:"15秒クッキングと同じゲームジャムの作品です。このイベントには企業の方が来てくれたのでとても勉強になりました。",
        technology:["チーム開発","unity"],
        path:"/limit_diary",
        element:Limit_diary
    }
]