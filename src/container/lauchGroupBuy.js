import React from 'react';
import GroupBuyInfor from '../components/lauchGroupBuy/Footer/GroupBuyInfor';
import HeaderPart from '../components/lauchGroupBuy/Header/headerPart';
import GroupBuy from '../components/lauchGroupBuy/Middle/GroupBuy';
import { useState } from 'react'

const LaunchGroupBuy =()=>{
    const [isOpenLaunch,setIsOpenLaunch] = useState(false);
    const OpenLaunchToggle =()=>{
        setIsOpenLaunch(!isOpenLaunch);
    }
return(
    <div>
        <HeaderPart/>
        <GroupBuy openHandler={setIsOpenLaunch}/>
        <GroupBuyInfor isOpen={isOpenLaunch}/>
    </div>
);
}

export default LaunchGroupBuy;