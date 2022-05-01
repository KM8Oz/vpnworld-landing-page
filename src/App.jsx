import React from 'react';
import { Provider, Heading, Subhead } from 'rebass'
import {
  Hero, CallToAction,
  // ScrollDownIndicator,
  Flex, Phone, Laptop, SignUp
} from 'react-landing-page'
import styledComponents from 'styled-components';
import Android from './icons/android';
import { AppleIcon } from './icons';
import styled from "styled-components";
import Windows from './icons/Windows';
import Macos from './icons/Macos';
import { SuperSEO } from "react-super-seo";


function App() {
  return (
    <>
      <Provider>
        <HeroStyled
          className={"hero0"}
          color='white'
          bg='#2EA9D0'
          backgroundImage='https://res.cloudinary.com/dupagadir/image/upload/v1651393997/alina-grubnyak-ZiQkhI7417A-unsplash_2_dvfby8.jpg'
        >
          <Flex flexWrap={"wrap"} justifyContent="space-around" alignItems={"center"}>
            <Flex flexWrap='wrap' alignItems='center' id='mobile'>
              <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3}>
                <Phone
                  // src='https://via.placeholder.com/187x406'
                  src="https://res.cloudinary.com/dupagadir/image/upload/v1651396028/01_-_Default_qyxs55.png"
                  notch style={{ transform: 'translate(32px, 64px)' }} />
                <Phone src='https://res.cloudinary.com/dupagadir/image/upload/v1651395857/Connected_xsdkxn.png' color='white'
                  style={{ transform: 'translate(-32px, 0px)' }} />
              </Flex>
              <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
                <Heading textAlign={"center"}>Мобильное приложение <Name>VPNWOLRD</Name></Heading>
                <Subhead fontSize={[2, 3]}>Скачать</Subhead>
                <Flex mt={2} flexWrap='wrap' justifyContent='center'>
                  <CallToActionStyled 
                  onClick={() => document.location.assign("itms-services://?action=download-manifest&url=https://www.installonair.com/storage/ipaz/MymQR2/MymQR2.plist")}
                  bg="black" mb={2}><AppleIcon size={25} />Shared ipa</CallToActionStyled>
                  <CallToActionStyled
                    onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/app-release.apk")}
                    bg="black"><AndroidStyled />Universal Apk</CallToActionStyled>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              className={"hero1"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent={"space-around"}
              id={"desktop"}
            >
              <HeadingStyled pt={100} >Настольное приложение</HeadingStyled>
              <Subhead fontSize={[2, 3]}>Screenshot & Download link</Subhead>
              <Flex mt={2} flexWrap='wrap' justifyContent='center'>
                <CallToActionStyled
                  onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld.Setup.4.5.0.exe")}
                  mt={3} bg='black'><Windows style={{
                    marginRight: 10
                  }} size={20} /> Windows</CallToActionStyled>
                <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0.pkg")} mt={3} bg='black'><Macos style={{
                  marginRight: 10
                }} size={20} /> Macos x86_64</CallToActionStyled>
                <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0-arm64.pkg")} mt={3} bg='black'><Macos style={{
                  marginRight: 10
                }} size={20} /> Macos arm64</CallToActionStyled>
              </Flex>
              <Laptop mt={3} src={"https://res.cloudinary.com/dupagadir/image/upload/v1651401708/desktop_fqzqoe.png"} />
            </Flex>
          </Flex>
          <Flex width={[1]} mb={100} flexDirection={"column"} mt={10} flexWrap='wrap' alignItems={"center"} justifyContent='center'>
            <HeadingStyled >Подпишитесь на нашу рассылку новостей</HeadingStyled>
            <SignUp color={"#000"} Label="электронная почта" onSubmit={(email) => window.location.assign("mailto:cloud0@markate.ru?Bcc=" + email + "&Subject=" + encodeURIComponent("vpnworld releases subscription") + "&body=" + encodeURIComponent("i would like to subscribe for you news latter related to vpnworld."))} mt={3} />
          </Flex>
          <Flex width={[1]} is="footer" alignItems="center" justifyContent={"space-between"} p={3}>
            <Flex is='left-footer' alignItems={"center"} justifyContent={"flex-start"} >
              <NavLink children="mobile" href="#mobile" />
              <NavLink children="desktop" href="#desktop" />
            </Flex>
            <Small color="#fff" ml="auto">© OLDI Development OOO, 2022</Small>
          </Flex>
        </HeroStyled>
      </Provider>
      <SuperSEO
        title="VPN-приложение | VpnWorld"
        description="быстрый vpn-туннель для разблокировки вашего опыта работы в сети."
        lang="ru"
        openGraph={{
          ogImage: {
            ogImage: 'https://res.cloudinary.com/dupagadir/image/upload/v1651409226/Vectary_texture_xncxxr.png',
            ogImageAlt: 'VpnWorld',
            ogImageWidth: 538,
            ogImageHeight: 297,
            ogImageType: 'image/jpeg',
          },
        }}
        viewport={"width=device-width, initial-scale=1"}
        charset={"UTF-8"}
        googlebot={"index"}
      />
    </>
  );
}
const HeadingStyled = styledComponents(Heading)`
    text-align: center;
`;
const NavLink = styledComponents.a`
  font-size:14px;
  margin-left:10px;
`;
const Small = styledComponents.span`
  font-size:14px;
`;
// const ScrollDownIndicatorStyled = styledComponents(ScrollDownIndicator)`
//   cursor: pointer;
// `;
const HeroStyled = styledComponents(Hero)`
      overflow:hidden;
`;
const CallToActionStyled = styledComponents(CallToAction)`
    margin: 10px;
    max-height:45px;
    min-width:230px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const AndroidStyled = styledComponents(Android)`
    margin: 0px 3px;
`;

const Name = styled.span`
    color: #222;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

export default App;
