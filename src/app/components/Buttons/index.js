"use client"
import styled from 'styled-components';

// Primary Button
const PrimaryButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #00a8ff;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.primaryColorDark};
  }
`;

// Secondary Button
const SecondaryButton = styled.button`
  padding: 0.5rem 2rem;
  border-radius: 4px;
  background-color: white;
  border: 2px solid #00a8ff; 
  font-size: 18px;
  font-weight: 600;
  color: #00a8ff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00a8ff;
    color: white;
  }
`;

export { PrimaryButton, SecondaryButton };