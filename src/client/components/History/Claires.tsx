import React from 'react';
import styled from 'styled-components';
import { Typography } from '@edwardandrewb/elements';

const StyledUl = styled.ul`
  margin: 16px;
  text-align: left;
`;

const Claires: React.FC = () => (
  <>
    <Typography variant="h5">Web Developer</Typography>

    <Typography variant="h6" gutterBottom>
      August 2017 - May 2019
    </Typography>

    <Typography variant="body2" gutterBottom>
      Claire&apos;s is one of the biggest retailer names amongst pre-teen girls
      with over 100 million ear piercings to date. The company generates over 1
      billion in revenue per year from stores and the E-commerce website.
    </Typography>

    <Typography variant="body2" gutterBottom>
      At Claire&apos;s,I was tasked with managing and continuously updating the
      E-commerce website using Salesforce&apos;s Demandware platform. Our team
      provided a consistent growth in online revenue with each release. We also
      built in-house applications for various business needs.
    </Typography>

    <Typography variant="body2" gutterBottom>
      During my time at Claire&apos;s, I worked with the following technologies
      and platforms: Modern ECMAScript (JavaScript), CSS, SASS, React, Redux,
      SQL, NodeJS, Babel, Webpack, Jenkins, Jira, Bitbucket, Confluence, Tag
      Manager, Analytics, Optimise.
    </Typography>

    <Typography variant="body2" gutterBottom>
      Some of the projects I oversaw and developed include:
    </Typography>

    <StyledUl>
      <li>
        <Typography variant="body2">
          Redesign of the checkout process by working with the UX and design
          team using data obtained from Optimise
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          Click and collect order management web app for the 3000+ stores
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          Order checker web app for the customer service team to assist them in
          helping customers
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          System monitoring web apps to help the business evaluate issues in the
          order flow
        </Typography>
      </li>
    </StyledUl>
  </>
);

export { Claires };
