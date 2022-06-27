import React from 'react';
import styled from 'styled-components';
import { BsPersonCircle} from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md"; 

export default function Header() {
  return (
    
    <HeaderContainer>
        <HeaderLeft>
        <HeaderAvatar>
            <BsPersonCircle></BsPersonCircle>
        </HeaderAvatar>
       
        </HeaderLeft>
        <HeaderRight>
            <HeaderSearch>
                
            <input type="text" placeholder="Search" />             </HeaderSearch>
            <MdOutlineWatchLater />
        </HeaderRight>
    </HeaderContainer>

    
  )
}

const HeaderContainer = styled.div``
const HeaderLeft = styled.div``
const HeaderRight = styled.div``
const HeaderAvatar = styled.div``
const HeaderSearch = styled.div``



