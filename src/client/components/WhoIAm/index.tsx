import React from 'react';
import styled from 'styled-components';
import { Typography } from '@edwardandrewb/elements';
import { SocialLinks } from './SocialLinks';

const SectionContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin-bottom: 64px;
  background: ${(props) => props.theme.palette.background.default};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const TypographyMobile = styled(Typography)`
  ${(props) => props.theme.breakpoints.up('mobile')} {
    display: none;
  }
`;

const TypographyDesktop = styled(Typography)`
  font-size: 8rem;
  display: none;
  ${(props) => props.theme.breakpoints.up('mobile')} {
    display: inline;
  }
`;

const WhoIAm: React.FC = () => (
  <SectionContainer>
    <TypographyMobile variant="h1" color="textSecondary">
      I&apos;m{' '}
      <Typography component="span" variant="h1" color="primary">
        Edward
      </Typography>
    </TypographyMobile>

    <TypographyDesktop variant="h1" color="textSecondary">
      Hello, I&apos;m{' '}
      <TypographyDesktop component="span" variant="h1" color="primary">
        Edward
      </TypographyDesktop>
    </TypographyDesktop>

    <Typography variant="h5" color="textSecondary">
      A full-stack software developer
    </Typography>

    <SocialLinks />
  </SectionContainer>
);

export { WhoIAm };
