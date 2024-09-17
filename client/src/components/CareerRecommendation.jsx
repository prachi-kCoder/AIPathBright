
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  TextField, Button, Box, CircularProgress, List, Divider,Typography
} from '@mui/material';
import { School, WorkOutline, StarOutline } from '@mui/icons-material'; // New icons
import { StyledContainer, Title, StyledForm, ResultsBox, ListItemStyled, SectionHeader, RecommendationText } from '../styles/CareerStyles';
import Header from './Header';

const CareerRecommendation = () => {
  const [studentProfile, setStudentProfile] = useState({
    name: '',
    major: '',
    gpa: '',
    interests: ''
  });
  const [recommendedCareer, setRecommendedCareer] = useState(null);

  const mutation = useMutation({
    mutationFn: async (profile) => {
      const response = await fetch('http://127.0.0.1:8000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: profile.name,
          major: profile.major,
          gpa: parseFloat(profile.gpa),
          interests: profile.interests.split(',').map((item) => item.trim())
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch career recommendation');
      }
      return response.json();
    },
    onSuccess: (data) => {
      setRecommendedCareer(data.recommended_careers);
    }
  });

  const handleChange = (e) => {
    setStudentProfile({
      ...studentProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(studentProfile);
  };

  return (
    <StyledContainer>
      <Title><Header/></Title>
      
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={studentProfile.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Major"
          name="major"
          value={studentProfile.major}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="GPA"
          name="gpa"
          type="number"
          step="0.1"
          value={studentProfile.gpa}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Interests (comma separated)"
          name="interests"
          value={studentProfile.interests}
          onChange={handleChange}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Get Career Recommendation
        </Button>
      </StyledForm>

      {mutation.isLoading && <Box display="flex" justifyContent="center" mt={2}><CircularProgress /></Box>}
      {mutation.error && <Typography color="error" mt={2}>Error: {mutation.error.message}</Typography>}

      {recommendedCareer && (
        <ResultsBox>
          <Typography variant="h6" gutterBottom>
            Recommended Career Paths
          </Typography>
          <List>
            {recommendedCareer.map((item, index) => (
              <div key={index}>
                <RecommendationText>{item.description || ''}</RecommendationText>
                <ListItemStyled>
                  <SectionHeader>
                    <WorkOutline /> {/* Using Material-UI icon */}
                    <span style={{ fontWeight: 'bold', color: 'blue', marginLeft: '8px' }}>
                      {item.career}
                    </span>
                    
                  </SectionHeader>
                </ListItemStyled>
                {index < recommendedCareer.length - 1 && <Divider sx={{ marginTop: '1.5rem', backgroundColor: '#e5e0e0' }} />}
              </div>
            ))}
          </List>
        </ResultsBox>
      )}
    </StyledContainer>
  );
};

export default CareerRecommendation;

