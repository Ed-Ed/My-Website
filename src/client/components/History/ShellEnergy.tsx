import React from 'react';
import { Typography } from '@edwardandrewb/elements';
import { HistoryTitle } from './HistoryTitle';

const ShellEnergy: React.FC = () => (
  <>
    <HistoryTitle
      jobTitle="Lead Software Developer"
      jobDate="April 2021 - Present"
    />

    <HistoryTitle
      jobTitle="Senior Software Developer"
      jobDate="October 2020 - April 2021"
    />

    <Typography gutterBottom>
      Shell Energy Retail Limited currently serves over 1 million homes with
      100% renewable energy, including my own. I work within the serve
      department which involves building web / micro-frontend applications for
      existing customers and customer service agents.
    </Typography>

    <Typography>
      I mainly work with the following technologies and platforms: NextJS,
      NodeJS, React, TypeScript, GraphQL (Apollo), Redux, modern ECMAScript
      (JavaScript), CSS-in-JS (styled-jsx), Babel, Webpack, Cypress, Git, Jest,
      Jira, Bitbucket, Confluence.
    </Typography>
  </>
);

export { ShellEnergy };
