import React from 'react';
import { styled } from '@mui/system';
import { School, WorkOutline, Star } from '@mui/icons-material';

// Styled components
const HeaderContainer = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  borderBottom: '4px solid #0056b3',
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const LogoIcon = styled(School)({
  fontSize: '40px',
  marginRight: '10px',
});

const Title = styled('h1')({
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
});

const Tagline = styled('p')({
  fontSize: '16px',
  margin: '10px 0 0',
});

const ActionButton = styled('button')({
  backgroundColor: '#ffffff',
  color: '#007bff',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  marginLeft: '20px',
  '&:hover': {
    backgroundColor: '#e0e0e0',
  },
});

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoIcon />
        <div>
          <Title>Career Recommendation</Title>
          <Tagline>Find Your Path Based on Your Interests</Tagline>
        </div>
      </LogoContainer>
      <ActionButton>Get Started</ActionButton>
    </HeaderContainer>
  );
}

export default Header;
