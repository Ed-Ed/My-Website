import React from 'react';
import { HistoryContainer } from './HistoryContainer';
import { ShellEnergy } from './ShellEnergy';
import { RedBrain } from './RedBrain';
import { Claires } from './Claires';
import ShellEnergyLogo from '../../static/Images/logos/shellenergy.svg';
import RedBrainLogo from '../../static/Images/logos/redbrain.svg';
import ClairesLogo from '../../static/Images/logos/claires.svg';

const History: React.FC = () => (
  <>
    <HistoryContainer
      component={<ShellEnergy />}
      logo={<ShellEnergyLogo alt="Shell Energy" />}
    />

    <HistoryContainer
      component={<RedBrain />}
      logo={<RedBrainLogo alt="RedBrain" />}
    />

    <HistoryContainer
      component={<Claires />}
      logo={<ClairesLogo alt="Claire's" />}
    />
  </>
);

export { History };
