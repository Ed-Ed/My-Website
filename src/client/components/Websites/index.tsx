import React from 'react';
import styled from 'styled-components';
// import LazyLoad from 'react-lazyload';
import { Typography, Paper } from '@edwardandrewb/elements';

const WebsitesContainer = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Anchor = styled.a`
  width: 100%;
  margin: 16px;
  ${(props) => props.theme.breakpoints.up('mobile')} {
    width: ${(props) => props.theme.breakpoints.desktop / 3 - 32}px;
  }
`;

const StyledPaper = styled(Paper)`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text.primary};
  transition: ${(props) => props.theme.transition};
  &:hover {
    transform: scale(1.1);
    box-shadow: ${(props) => props.theme.boxShadows.hover};
  }
  div {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// const Image = styled.img`
//   width: 140px;
//   height: 64px;
// `;

const Placeholder = styled.div`
  width: 140px;
  height: 64px;
`;

const Websites: React.FC = () => (
  <>
    <Typography variant="h3" align="center" gutterBottom>
      My Websites
    </Typography>

    <WebsitesContainer>
      {/* <Anchor href="https://www.eded.uk">
        <StyledPaper>
          <div>
            <LazyLoad placeholder={<Placeholder />}>
              <Image src={NextImage} alt="Next.js website" />
            </LazyLoad>
          </div>

          <Typography color="primary">www.eded.uk</Typography>

          <Typography align="center">
            Will be turned into a blog eventually
          </Typography>
        </StyledPaper>
      </Anchor>

      <Anchor href="https://www.gstared.com">
        <StyledPaper>
          <div>
            <LazyLoad placeholder={<Placeholder />}>
              <Image src={NextImage} alt="Next.js website" />
            </LazyLoad>
          </div>

          <Typography color="primary">www.gstared.com</Typography>

          <Typography align="center">
            A basic version of this site hosted on Google Cloud using NextJS (to
            compare speed differences)
          </Typography>
        </StyledPaper>
      </Anchor> */}

      <Anchor href="http://www.webgl.uk/">
        <StyledPaper>
          <div>
            <Placeholder />
          </div>

          <Typography color="primary">www.webgl.uk</Typography>

          <Typography align="center">
            A website where I will host a WebGL game
          </Typography>
        </StyledPaper>
      </Anchor>

      <Anchor href="https://www.wheretogoto.com">
        <StyledPaper>
          <div>
            <Placeholder />
          </div>

          <Typography color="primary">www.wheretogoto.com</Typography>

          <Typography align="center">
            An upcoming website which is still in progress
          </Typography>
        </StyledPaper>
      </Anchor>
    </WebsitesContainer>
  </>
);

export { Websites };
