import React from 'react';
import styled from 'styled-components';

import { WhoIAm } from '../components/WhoIAm';
import { History } from '../components/History';
import { Websites } from '../components/Websites';

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 0 16px;
  background-color: ${(props) => props.theme.palette.background.paper};
  display: flex;
  justify-content: center;
`;

const SectionContent = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.desktop}px;
`;

const Home: React.FC = () => {
  return (
    <>
      <WhoIAm />

      <SectionContainer>
        <SectionContent>
          <History />
        </SectionContent>
      </SectionContainer>

      <SectionContainer>
        <SectionContent>
          <Websites />
        </SectionContent>
      </SectionContainer>
    </>
  );
};

export default Home;
