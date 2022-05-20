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
import Linux from './icons/Linux';
import Faq from "react-faq-component";
import UAParser from "ua-parser-js";



const Faqstyles = {
  bgColor: '#ffffff00',
  titleTextColor: "black",
  rowTitleColor: "white",
  rowContentColor: 'black',
  // arrowColor: "red",
};
const Faqdata = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};
const Faqconfig = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};
function App() {
  let device = new UAParser();
  console.log(device.getDevice());
  return (
    <Provider>
      <HeroStyled
        className={"hero0"}
        color='white'
        bg='#2EA9D0'
        backgroundImage='https://res.cloudinary.com/dupagadir/image/upload/v1651393997/alina-grubnyak-ZiQkhI7417A-unsplash_2_dvfby8.jpg'
      >
        <Flex flexWrap={"wrap"} mt={50} justifyContent="space-around" alignItems={"center"}>
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
                  // onClick={() => document.location.assign("itms-services://?action=download-manifest&url=https://www.installonair.com/storage/ipaz/MymQR2/MymQR2.plist")}
                  onClick={() => document.location.assign("https://apps.apple.com/ru/app/vpnworld/id1624305127")}
                  bg="black" mb={2}><AppleIcon size={25} />Apple Store</CallToActionStyled>
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

              <CustomPicker  >
                <Macos style={{
                  marginRight: 10
                }} size={20} />
                <p>Mac OS</p>
                <div className='insider'>
                  <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0.pkg")} mt={3} bg='black'><Macos style={{
                    marginRight: 10
                  }} size={20} /> Macos x86_64</CallToActionStyled>
                  <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld-4.5.0-arm64.pkg")} mt={3} bg='black'>
                    <Macos style={{
                      marginRight: 10
                    }} size={20} /> Macos arm64</CallToActionStyled>
                </div>
              </CustomPicker>
              <CallToActionStyled onClick={() => document.location.assign("https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld_4.5.0_amd64.deb ")} mt={3} bg='black'><Linux style={{
                marginRight: 10
              }} size={20} /> Linux (arm64/i32)</CallToActionStyled>
            </Flex>
            {/* https://github.com/KM8Oz/vpn-world-desktop/releases/download/v4.5.0/vpnworld_4.5.0_amd64.deb */}
            <Laptop mt={3} src={"https://res.cloudinary.com/dupagadir/image/upload/v1651401708/desktop_fqzqoe.png"} />
          </Flex>
        </Flex>
        <Flex mt={10} ml={10} mr={10} mb={20} style={{
          maxWidth: 800
        }} flexWrap='wrap' justifyContent='center'>
          <Faq
            data={Faqdata}
            styles={Faqstyles}
            config={Faqconfig}
          />
        </Flex>
        <Flex width={[1]} mb={100} flexDirection={"column"} mt={10} flexWrap='wrap' alignItems={"center"} justifyContent='center'>
          <HeadingStyled >Отправьте свое электронное письмо, чтобы добавить вас в ограниченную группу тестирования</HeadingStyled>
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
const CustomPicker = styled.div`
margin: 10px;
max-height: 45px;
cursor: pointer;
border-radius: 4px;
p {
  text-transform: uppercase;
-webkit-letter-spacing: 0.1em;
-moz-letter-spacing: 0.1em;
-ms-letter-spacing: 0.1em;
letter-spacing: 0.1em;
appearance: none;
font-size: 14px;
font-weight: 700;
line-height: 1.1428571428571428;
}
position: relative;
overflow: visible;
.insider{
  transition: all ease-in-out 100ms;
  /* box-shadow: 0px 2px 0px 1px #000; */
  position: absolute;
  
  transform: scale(0);
  opacity: 0;
}
.insider:hover{
  transform: scale(1);
  bottom: 50px;
  opacity: 1;
}
:hover{
  .insider{
    bottom: 50px;
    opacity: 1;
  transform: scale(1);
  }
}
min-width: 230px;
display: -webkit-box;
display: -webkit-flex;
background-color: #000;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-webkit-justify-content: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
`;
export default App;
