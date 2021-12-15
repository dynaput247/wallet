import React from 'react'
import logo from '../../assets/svg/logo.svg'
import { ReactComponent as ArrowIcon } from '../../assets/svg/select-arrow.svg'
import { Link } from 'react-router-dom'

import * as S from './styled'

function Header({ address }) {
  return (
    <S.Header>
      <h1>
        <Link to="/wallet">
          <S.HeaderLogo src={logo} alt="nevinha wallet logo" />
        </Link>
      </h1>

      <S.HeaderSelectContainer>
        <S.HeaderSelect>
          <option>Ethereum Network</option>
        </S.HeaderSelect>

        <ArrowIcon />
      </S.HeaderSelectContainer>

      <div>
        {/* TODO: Add dropdown menu here */}
        <S.HeaderAvatar text={address} />
      </div>
    </S.Header>
  )
}

export default Header
