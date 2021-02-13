import React from 'react';
import styled from 'styled-components';
import { Paper } from '@edwardandrewb/elements';
import { ShellEnergy } from './ShellEnergy';
import { RedBrain } from './RedBrain';
import { Claires } from './Claires';
import ShellEnergyLogo from '../../static/Images/logos/shellenergy.svg';
import RedBrainLogo from '../../static/Images/logos/redbrain.svg';
import ClairesLogo from '../../static/Images/logos/claires.svg';

const HistoryContainer = styled(Paper)`
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

const History: React.FC = () => (
  <>
    <HistoryContainer breakpoint="tablet">
      <LeftContainer>
        <LogoContainer>
          <ShellEnergyLogo alt="Shell Energy" />
        </LogoContainer>
      </LeftContainer>

      <RightContainer>
        <ShellEnergy />
      </RightContainer>
    </HistoryContainer>

    <HistoryContainer breakpoint="tablet">
      <LeftContainer>
        <LogoContainer>
          <RedBrainLogo alt="RedBrain" />
        </LogoContainer>
      </LeftContainer>

      <RightContainer>
        <RedBrain />
      </RightContainer>
    </HistoryContainer>

    <HistoryContainer breakpoint="tablet">
      <LeftContainer>
        <LogoContainer>
          <ClairesLogo alt="Claires" />
        </LogoContainer>
      </LeftContainer>

      <RightContainer>
        <Claires />
      </RightContainer>
    </HistoryContainer>
  </>
);

export { History };
