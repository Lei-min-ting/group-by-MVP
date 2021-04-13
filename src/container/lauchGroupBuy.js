import React from "react";
import GroupBuyInfor from "../components/lauchGroupBuy/Footer/GroupBuyInfor";
import HeaderPart from "../components/lauchGroupBuy/Header/headerPart";
import GroupBuy from "../components/lauchGroupBuy/Middle/GroupBuy";
import { useState } from "react";
import JoinComunity from "../components/lauchGroupBuy/Footer/JoinComunity";
import JoinGroupBuy from "../components/lauchGroupBuy/Footer/JoinGroupBuy";
import GroupBuying from "../components/lauchGroupBuy/newpage/GroupBuying";

const LaunchGroupBuy = (props) => {
  const [isOpenMainPage, setIsOpenMainPage] = useState(true);
  const [isOpenLaunch, setIsOpenLaunch] = useState(false);
  const [isOpenJoinCom, setIsOpenJoinCom] = useState(false);
  const [isOpenJoinGrBuy, setIsOpenJoinGrBuy] = useState(false);
  const [isOpenGruBuying, setIsOpenGruBuying] = useState(false);

  const OpenLaunchToggle = () => {
    setIsOpenLaunch(!isOpenLaunch);
  };

  const OpenJoinCom = () => {
    setIsOpenJoinCom(!isOpenJoinCom);
    setIsOpenJoinGrBuy(false);
  };

  const OpenJoinGrBuy = () => {
    setIsOpenJoinGrBuy(!isOpenJoinGrBuy);
    setIsOpenJoinCom(false);
  };

  const OpenBruBuying = () => {
    setIsOpenGruBuying(!isOpenGruBuying);
    setIsOpenMainPage(false);
    setIsOpenLaunch(false);
    setIsOpenJoinCom(false);
    setIsOpenJoinGrBuy(false);
  };

  const CloseGruBuying=()=>{
    setIsOpenGruBuying(false);
    setIsOpenMainPage(true);
    setIsOpenLaunch(false);
    setIsOpenJoinCom(false);
    setIsOpenJoinGrBuy(false);
  }

  return (
    <div>
      {isOpenMainPage ? <HeaderPart /> : null}
      {isOpenMainPage ? (
        <GroupBuy
          openHandler={OpenLaunchToggle}
          OpenJC={OpenJoinCom}
          OpenJRB={OpenJoinGrBuy}
          OpenGPBing={OpenBruBuying}
        />
      ) : null}
      {isOpenLaunch ? <GroupBuyInfor /> : null}
      {isOpenJoinCom ? <JoinComunity /> : null}
      {isOpenJoinGrBuy ? <JoinGroupBuy /> : null}
      {isOpenGruBuying ? <GroupBuying GroupBuyingOff={CloseGruBuying}/> : null}
    </div>
  );
};

export default LaunchGroupBuy;
