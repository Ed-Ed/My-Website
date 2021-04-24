import React from 'react';
import styled from 'styled-components';
import { Paper } from '@edwardandrewb/elements';

const HistoryContainerBase = styled(Paper)`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.breakpoints.up('tablet')} {
    padding: 32px;
  }
  ${(props) => props.theme.breakpoints.up('desktop')} {
    align-items: stretch;
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up('desktop')} {
    width: 20%;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  text-align: center;
  ${(props) => props.theme.breakpoints.up('desktop')} {
    width: 80%;
    margin-left: 32px;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

type Props = {
  component: React.ReactNode;
  logo: React.ReactNode;
};

const HistoryContainer: React.FC<Props> = ({ component, logo }) => (
  <HistoryContainerBase breakpoint="tablet">
    <LeftContainer>
      <LogoContainer>{logo}</LogoContainer>
    </LeftContainer>

    <RightContainer>{component}</RightContainer>
  </HistoryContainerBase>
);

export { HistoryContainer };
