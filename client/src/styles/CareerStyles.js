import { styled } from '@mui/system';
import { Container, Typography, Paper, ListItem } from '@mui/material';

export const StyledContainer = styled(Container)({
  padding: '2rem',
  maxWidth: '700px',
  marginTop: '2rem',
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: '#f4f6f9', // Subtle light background
  borderRadius: '10px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

export const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
  color: '#0A73B5',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  borderBottom: '3px solid #0A73B5',
  paddingBottom: '1rem',
});

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginBottom: '2.5rem',
});

export const ResultsBox = styled(Paper)({
  padding: '1.5rem',
  backgroundColor: '#dcdcdc',
  borderRadius: '8px',
  marginTop: '1.5rem',
  transition: 'all 0.3s ease',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.01)', // Slightly enlarges on hover
  },
});

export const ListItemStyled = styled(ListItem)({
  padding: '1.2rem 0',
});

export const SectionHeader = styled(Typography)({
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#16325B',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  background: 'linear-gradient(to right, #00b894, #006c68)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginTop: '1.5rem',
});

export const RecommendationText = styled(Typography)({
  fontSize: '1.1rem',
  color: '#6FA2CE',
  lineHeight: 1.6,
  marginTop: '0.5rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#3975A7',
  },
});
