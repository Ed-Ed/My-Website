import React from 'react';
import styled from 'styled-components';
import { Typography } from '@edwardandrewb/elements';
import { SocialLinks } from './SocialLinks';

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const WhoIAm: React.FC = () => (
  <SectionContainer>
    <Typography variant="h1">
      I&apos;m{' '}
      <Typography component="span" variant="h1" color="primary">
        Edward
      </Typography>
    </Typography>

    <Typography variant="h6">A full-stack JavaScript developer</Typography>

    <SocialLinks />
  </SectionContainer>
);

export { WhoIAm };
