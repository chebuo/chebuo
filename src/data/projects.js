import Soapslider from '../products/soapslider.jsx'
import PosingEffect from '../products/posingEffect.jsx'
import Bigbeetle from '../products/bigbeetle.jsx'
import Cooking from '../products/cooking.jsx'
import Pacman from '../products/pacman.jsx'
import Chebusitu from '../products/chebusitu.jsx'
import Kirby from '../products/kirby.jsx'
import Cheburashka from '../products/cheburashka.jsx'
import Arcodemodel from '../products/arcodemodel.jsx'
import Arnavigator from '../products/arnavigator.jsx'
import Music_searcher from '../products/music_searcher.jsx'
import Kurimanju from '../products/kurimanju.jsx'
import Kisyotenchebu from '../products/kisyotenchebu.jsx'
import Limit_diary from '../products/limit_diary.jsx'
import Baseball from '../products/Baseball.jsx'
import Bigbeetle_full from '../products/bigbeetle_full.jsx'
import MemoBattle from '../products/memoBattle.jsx'
import MyMemo from '../products/mymemo.jsx'
import ChebuWartsLegacy from '../products/ChebuWartsLegacy.jsx'
import Sushi from '../products/sushi.jsx'
import FishRamble from '../products/FishGramble.jsx'
import Robbery from '../products/robbery.jsx'

import soapslider_icon from '../assets/soapslider_icon.jpg'
import posingEffect_icon from '../assets/posingEffect_icon.png'
import bigbeetle_icon from '../assets/bigbeetle_icon.jpg'
import cooking_icon from '../assets/cooking_icon.png'
import chebusitu_icon from '../assets/chebusitu_icon.png'
import pacman_icon from '../assets/pacman_icon.png'
import kirby_icon from '../assets/kirby_icon.png'
import cheburashka_icon from '../assets/cheburashka_icon.png'
import arcodemodel_icon from '../assets/arcodemodel_icon.png'
import arnavigator_icon from '../assets/arnavigator_icon.png'
import music_searcher_icon from '../assets/music_searcher_icon.png'
import kurimanju_icon from '../assets/kurimanju_icon.png'
import kisyoutenchebu_icon from '../assets/kisyoutenchebu_icon.png'
import readMaker_icon from '../assets/readMaker_icon.png'
import limit_diary_icon from '../assets/limit_diary_icon.png'
import baseball_icon from '../assets/3Dbaseball_icon.png'
import daychangebattle_icon from '../assets/daychangebattle_icon.png'
import mymemo_icon from '../assets/mymemo_icon.png'
import chebuwarts_icon from '../assets/chebuwarts_icon.png'
import flappyChebu_icon from '../assets/flappyChebu_icon.png'
import sushi_icon from  '../assets/sushi_icon.png'
import fishRamble_icon from '../assets/fishRamble_icon.png'
import robbery_icon from '../assets/robbery_icon.jpg'

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
        date:"2024年6月",
        title:"PosingEffect",
        icon:posingEffect_icon,
        description:"",
        technology:["チーム開発","unity","python"],
        path:"/posingEffect",
        element:PosingEffect
    },
    {
        date:"2024年7月",
        title:"大きなカブトムシ β版",
        icon:bigbeetle_icon,
        description:'大きなカブを食べられないようにカブトムシを倒すタワーディフェンスとシューティングゲームを組み合わせたゲームです。',
        technology:["個人開発","unity"],
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
        description:'ハッカソンでコーディングをしっかりした初めての作成した作品です。たくさんのかわいいチェブラーシカが登場します。',
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
        technology:["チーム開発","ハッカソン","JavaScript","A-Flame","AR.js","gitpages"],
        path:"/arnavigator",
        element:Arnavigator
    },
    {
        date:"2025年2月",
        title:"MusicSearcher",
        icon:music_searcher_icon,
        description:"",
        technology:["チーム開発","ハッカソン","React","JavaScript","gitpages"],
        path:"/musicSearcher",
        element:Music_searcher
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
        date:"2025年5月",
        title:"起承転ちぇぶ",
        icon:kisyoutenchebu_icon,
        description:"",
        technology:["チーム開発","ハッカソン","unity","LootLocker"],
        path:"/Kisyotenchebu",
        element:Kisyotenchebu
    },
    {
        date:"2025年6月",
        description:"exiting ski"
    },
    {
        date:"2025年8月",
        title:"readMaker",
        icon:readMaker_icon,
        description:"",
        technology:["チーム開発","ハッカソン","React Native","TypeScript","Expo"],
        path:"https://github.com/oto1720/2025_ReadMaker"
    },
    {
        date:"2025年8月",
        title:"限界日記",
        icon:limit_diary_icon,
        description:"15秒クッキングと同じゲームジャムの作品です。このイベントには企業の方が来てくれたのでとても勉強になりました。",
        technology:["チーム開発","unity"],
        path:"/limit_diary",
        element:Limit_diary
    },
    {
        date:"2025年8月",
        title:"3D野球盤",
        icon:baseball_icon,
        description:"3Dbaseball",
        technology:["チーム開発","React","TypeScript","three.js","vrm","vercel"],
        path:"/baseball",
        element:Baseball
    },
    {
        date:"2025年9月",
        title:"memobattle",
        icon:daychangebattle_icon,
        description:"",
        technology:["チーム開発","ハッカソン","html","css","javascript","firebase","firestore"],
        path:"/memoBattle",
        element:MemoBattle
    },
    {
        date:"2025年10月",
        description:"入退室管理bot"
    },
    {
        date:"2026年1月",
        title:"大きなカブとムシ 完全版",
        icon:bigbeetle_icon,
        description:"",
        technology:["個人開発","unity","UIToolKit","ObjectPool","scriptableObject","Input System"],
        path:"/bigbeetle_full",
        element:Bigbeetle_full
    },
    {
        date:"2026年2月",
        title:"MyMemo",
        icon:mymemo_icon,
        description:"mymemo",
        technology:["チーム開発","chrome","React","JavaScript","node.js","supabase","render"],
        path:"/Mymemo",
        element:MyMemo
    },
    {
        date:"2026年3月",
        description:"8th wall"
    },
    {
        date:"2026年3月",
        title:"チェブわーつレガシー",
        icon:chebuwarts_icon,
        description:"",
        technology:["チーム開発","ハッカソン","unity","VR"],
        path:"/ChebuWartsLegacy",
        element:ChebuWartsLegacy
    },
    {
        date:"2026年4月",
        title:"Flappy Chebu",
        icon:flappyChebu_icon,
        description:"",
        technology:["個人開発","unity","3Das2D","2DLight","Shader Graph"],
        path:"https://unityroom.com/games/flappy_chabu"
    },
    {
        date:"2026年5月",
        title:"寿司すぎて悦",
        icon:sushi_icon,
        description:"",
        technology:["チーム開発","ハッカソン","unity","ECS","Job System","Burst","LOD"],
        path:"/Sushi",
        element:Sushi
    },
    {
        date:"2026年6月",
        title:"FishGramble!!",
        icon:fishRamble_icon,
        description:"",
        technology:["チーム開発","ハッカソン","unity","Shader Graph","VFX","Input System"],
        path:"/FishGramble",
        element:FishRamble
    },
    {
        date:"2026年9月",
        title:"カジュアル強盗",
        icon:robbery_icon,
        description:"",
        technology:["チーム開発","unity","UniTask","blender","Shader Graph","Input System"],
        path:"/robbery",
        element:Robbery
    }
]