import styled from "styled-components";

import {ReactComponent as burger} from "./Saved-Pictures/hamburger-menu.svg";
import {ReactComponent as logo} from "./Saved-Pictures/Logo.svg";
import {ReactComponent as searchIcon} from "./Saved-Pictures/search.svg";
import {ReactComponent as camera} from "./Saved-Pictures/camera.svg";
import {ReactComponent as cube} from "./Saved-Pictures/right-topbar.svg";
import {ReactComponent as bell} from "./Saved-Pictures/notification.svg";

import {ReactComponent as Home} from "./Saved-Pictures/home.svg";
import {ReactComponent as Compas} from "./Saved-Pictures/compas.svg";
import {ReactComponent as Follow} from "./Saved-Pictures/follow.svg";
import {ReactComponent as Follow1} from "./Saved-Pictures/follow1.svg";
import {ReactComponent as Store} from "./Saved-Pictures/store.svg";
import {ReactComponent as MyVideos} from "./Saved-Pictures/your-video.svg";
import {ReactComponent as Store1} from "./Saved-Pictures/store1.svg";
import {ReactComponent as Like} from "./Saved-Pictures/like.svg";
import {ReactComponent as ArrDown} from "./Saved-Pictures/arrow-down.svg";

import Avatar1 from "./Saved-Pictures/youtube-mini-1-8.png";
import Avatar2 from "./Saved-Pictures/youtube-mini-2-5.png";
import Avatar3 from "./Saved-Pictures/youtube-mini-3.png";
import Avatar4 from "./Saved-Pictures/youtube-mini-4.png";
import Avatar5 from "./Saved-Pictures/youtube-mini-6-7.png";
import Avatar6 from "./Saved-Pictures/youtube-side-6.png";
import Avatar7 from "./Saved-Pictures/youtube-side-7.png";

import Img1 from "./Saved-Pictures/youtube-1.png";
import Img2 from "./Saved-Pictures/youtube-2.png";
import Img3 from "./Saved-Pictures/youtube-3.png";
import Img4 from "./Saved-Pictures/youtube-4.png";
import Img5 from "./Saved-Pictures/youtube-5.png";
import Img6 from "./Saved-Pictures/youtube-6.png";
import Img7 from "./Saved-Pictures/youtube-7.png";
import Img8 from "./Saved-Pictures/youtube-8.png";
import Img9 from "./Saved-Pictures/youtube-9.png";
import Img10 from "./Saved-Pictures/youtube-10.png";
import Img11 from "./Saved-Pictures/youtube-11.png";
import Img12 from "./Saved-Pictures/youtube-12.png";

export let Data1 = [
    {id: 1, icon: <Home />, name: "Home"},
    {id: 2, icon: <Compas />, name: "Explore"},
    {id: 3, icon: <Follow />, name: "Subscriptions"}
];

export let Data2 = [
    {id: 1, icon: <Follow1 />, name: "Bookcase"},
    {id: 2, icon: <Store />, name: "History of shows"},
    {id: 3, icon: <MyVideos />, name: "Your videos"},
    {id: 4, icon: <Store1 />, name: "watch later"},
    {id: 5, icon: <Like />, name: "Liked videos"},
    {id: 6, icon: <ArrDown />, name: "Show more"}
]

export let Data3 = [
    {id: 1, icon: Avatar1, name: "The Game"},
    {id: 2, icon: Avatar2, name: "Lean Yo"},
    {id: 3, icon: Avatar3, name: "Best Kuaför"},
    {id: 4, icon: Avatar4, name: "Meyau Seu"},
    {id: 5, icon: Avatar5, name: "Discover Design"},
    {id: 6, icon: Avatar6, name: "Build Game"},
    {id: 7, icon: Avatar7, name: "Vlogger Man"}
];

export let Data4 = [
    {id: 1, name: "Kino"},
    {id: 2, name: "Comedy"},
    {id: 3, name: "Mix"},
    {id: 4, name: "Cartoons"},
    {id: 5, name: "Music"},
    {id: 6, name: "Football"},
    {id: 7, name: "El classico"},
    {id: 8, name: "UX Design"},
    {id: 9, name: "Animation"},
    {id: 10, name: "Visual arts"},
    {id: 11, name: "Latest uploads"},
];

export let Data5 = [
    {id: 1, img1: Avatar1, img: Img1, name: "Lorem Ipsum is simply dummy text of the printing", name1: "LOREM IPSUM", views: "156", times: "4 Minutes"},
    {id: 2, img1: Avatar2, img: Img2, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 3, img1: Avatar3, img: Img3, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 4, img1: Avatar4, img: Img4, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 5, img1: Avatar5, img: Img5, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 6, img1: Avatar6, img: Img6, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 7, img1: Avatar7, img: Img7, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 8, img1: Avatar1, img: Img8, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 9, img1: Avatar2, img: Img9, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 10, img1: Avatar3, img: Img10, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 11, img1: Avatar4, img: Img11, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
    {id: 12, img1: Avatar5, img: Img12, name: "Lorem Ipsum is simply dummy text of the printing", name1: "Lorem Ipsum", views: "156", times: "4 Minutes"},
]

export const Container = styled.div`
    display: flex;
    flex-direction: ${({flex})=>!flex?"column":"row"};
    background-color: #212121;
`;

export const Ssidebar = styled.div`
    min-width: 250px;
    height: 650px;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    margin-top: 60px;
`;

export const Nnavbar = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #212121;
    justify-content: space-between;
    padding: 0 30px;
    position: fixed;
`;

export const Ccontent = styled.div`
    width: 1424px;
    height: auto;
    background-color: #181818;
    margin-left: 250px;
    margin-top: 60px;
`;

export const Section = styled.div`
    display: flex;
    align-items: center;
`;

export const Icons = styled.div`

`

Icons.Burger = styled(burger)`
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
`;

Icons.Logo = styled(logo)`
    width: 120px;
    height: 56px;
    padding: 15px;
    cursor: pointer;
`;

export const Search = styled.input`
    width: 639px;
    height: 32px;
    padding: 4px 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    :focus{
        outline: none;
    }
    background-color: #000;
    color: rgba(255, 255, 255, 0.5);
    cursor: text;
`;

Icons.LogoSearch = styled(searchIcon)`
    width: 65px;
    height: 32px;
    padding: 4px 20.5px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0px 2px 2px 0px;
    cursor: pointer;
`;

Icons.Camera = styled(camera)`
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
`;

Icons.Cube = styled(cube)`
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
`;

Icons.Bell = styled(bell)`
    width: 40px;
    height: 40px;
    padding: 8px;
    cursor: pointer;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    padding: 3px;
    border-radius: 50%;
`;

export const SideBox = styled.div`
    padding: ${({bottom})=>bottom?"0 0 12px 0":"12px 0"};
`;

export const SidebarBox = styled.div`
    width: 240px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 23px;
    &:hover{
        transition: all 0.2s ease !important; 
        background: ${({isSelected})=>isSelected?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.1)"}!important;
        cursor: pointer !important;
    }
    background-color: ${({isSelected})=>isSelected?"rgba(255, 255, 255, 0.3)":"#212121"};
`;

export const IconBox = styled.div`
    width: 24px;
    height: 24px;
    padding: 4px 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconName = styled.div`
    width: 128px;
    height: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
`;

export const SideImg = styled.img`
    width: 24px;
    height: 24px;
`;

export const Subscriptions = styled.div`
    width: 240px;
    height: 40px;
    text-align: center;
    margin-left: -43px;
    margin-top: 8px;
    color: rgba(255, 255, 255, 0.6);
`;

export const Line = styled.div`
    width: 240px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
`;

export const ContentBar = styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const BarItems = styled.button`
    padding: 5px 12px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({isSelectedNav})=>isSelectedNav?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.2)"};
    color: ${({isSelectedNav})=>isSelectedNav?"#000":"rgba(255, 255, 255, 1)"};
    border: 1px solid rgba(255, 255, 255, 0.4);
    &:hover{
        cursor: pointer;
        background-color: ${({isSelectedNav})=>isSelectedNav?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.4)"} !important;
        transition: all 0.2s ease;
    }
`;

export const CardsContainer = styled.div`
    padding: 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    row-gap: 40px;
`

export const ContentCard = styled.div`
    width: 297px;
    height: 263px;
`;

export const CardImg = styled.img`
    width: 100%;
    height: 156px;
    &:hover{
        cursor: pointer;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 13px;
`;

export const MinAvatarBox = styled.div`

`;

export const CardTitleBox = styled.div`

`;

export const AvatarImg = styled.img`
    width: 36px;
    height: 36px;
    &:hover{
        cursor: pointer;
    }
`;

export const CardTitle = styled.p`
    margin-bottom: 4px;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`;

export const ChannelName = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 0.6);
`;