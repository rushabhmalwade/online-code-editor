import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material'

import Logo from '../assets/codepen-wordmark-white.webp'
const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    justify-content: center;
`

const Header = () => {
  return (
  <Container position='static'>
    <Toolbar>
    <img alt='codepen logo' src={Logo} style={{height:30}}/>
    </Toolbar>
  </Container>
  )
}

export default Header