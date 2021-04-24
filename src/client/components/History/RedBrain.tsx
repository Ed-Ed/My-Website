import React from 'react';
import { Typography } from '@edwardandrewb/elements';
import { HistoryTitle } from './HistoryTitle';

const RedBrain: React.FC = () => (
  <>
    <HistoryTitle
      jobTitle="Software Developer"
      jobDate="May 2019 - October 2020"
    />

    <Typography gutterBottom>
      RedBrain helps retailers gain more incremental sales risk free.
    </Typography>

    <Typography gutterBottom>
      At RedBrain, I was primarily tasked with managing and updating the price
      comparison website which we built in-house.
    </Typography>

    <Typography>
      I mainly worked with the following technologies and platforms: NodeJS,
      React, TypeScript, GraphQL (Apollo), Redux, modern ECMAScript
      (JavaScript), CSS-in-JS (Styled Components and Emotion), Babel, Webpack,
      NextJS, GoLang, Git, Jest, GitLab, Jira, Tag Manager, Analytics, Optimise.
    </Typography>
  </>
);

export { RedBrain };
