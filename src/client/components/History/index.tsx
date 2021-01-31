import React from "react";
import styled from "styled-components";
import { Typography, Paper } from "@edwardandrewb/elements";

import ShellEnergy from "../../static/Images/logos/shellenergy.svg";
import RedBrain from "../../static/Images/logos/redbrain.svg";
import Claires from "../../static/Images/logos/claires.svg";

const HistoryContainer = styled(Paper)`
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => props.theme.breakpoints.up("tablet")} {
    padding: 32px;
  }
  ${props => props.theme.breakpoints.up("desktop")} {
    align-items: stretch;
    flex-direction: row;
  }
`;

const LeftContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  ${props => props.theme.breakpoints.up("desktop")} {
    width: 20%;
  }
`;

const RightContainer = styled.div`
  width: 100%;
  text-align: center;
  ${props => props.theme.breakpoints.up("desktop")} {
    width: 80%;
    margin-left: 32px;
    text-align: left;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledUl = styled.ul`
  margin: 16px;
  text-align: left;
`;

const History: React.FC = () => {
  return (
    <>
      <HistoryContainer breakpoint="tablet">
        <LeftContainer>
          <LogoContainer>
            <img src={ShellEnergy} alt="Shell Energy" />
          </LogoContainer>
        </LeftContainer>

        <RightContainer>
          <Typography variant="h5">Frontend Developer</Typography>

          <Typography variant="h6" gutterBottom>
            October 2020 - Present
          </Typography>
        </RightContainer>
      </HistoryContainer>

      <HistoryContainer breakpoint="tablet">
        <LeftContainer>
          <LogoContainer>
            <img src={RedBrain} alt="RedBrain" />
          </LogoContainer>
        </LeftContainer>

        <RightContainer>
          <Typography variant="h5">Frontend Developer</Typography>

          <Typography variant="h6" gutterBottom>
            May 2019 - October 2020
          </Typography>

          <Typography variant="body2" gutterBottom>
            RedBrain is one of the fastest growing tech companies in the world.
            They help retailers gain more incremental sales risk free.
          </Typography>

          <Typography variant="body2" gutterBottom>
            At RedBrain, I was tasked with managing and updating the price
            comparison website which we built in-house. We also built web apps
            to help maintain the websites.
          </Typography>

          <Typography variant="body2">
            I worked with the following technologies and platforms: Node, React,
            TypeScript, GraphQL (Apollo), Redux, modern ECMAScript (JavaScript),
            CSS-in-JS, Babel, Webpack, Next, Git, Jest, Selenium, GitLab, Jira,
            Tag Manager, Analytics, Optimise.
          </Typography>
        </RightContainer>
      </HistoryContainer>

      <HistoryContainer breakpoint="tablet">
        <LeftContainer>
          <LogoContainer>
            <img src={Claires} alt="Claires" />
          </LogoContainer>
        </LeftContainer>

        <RightContainer>
          <Typography variant="h5">Web Developer</Typography>

          <Typography variant="h6" gutterBottom>
            August 2017 - May 2019
          </Typography>

          <Typography variant="body2" gutterBottom>
            Claire&apos;s is one of the biggest retailer names amongst pre-teen
            girls with over 100 million ear piercings to date. The company
            generates over 1 billion in revenue per year from stores and the
            E-commerce website.
          </Typography>

          <Typography variant="body2" gutterBottom>
            At Claire&apos;s, I was tasked with managing and continuously
            updating the E-commerce website using Salesforce&apos;s Demandware
            platform. Our team provided a consistent growth in online revenue
            with each release. We also built in-house applications for various
            business needs.
          </Typography>

          <Typography variant="body2" gutterBottom>
            During my time at Claire&apos;s, I worked with the following
            technologies and platforms: Modern ECMAScript (JavaScript), CSS,
            SASS, React, Redux, SQL, Node, Babel, Webpack, Jenkins, Jira,
            Bitbucket, Confluence, Tag Manager, Analytics, Optimise.
          </Typography>

          <Typography variant="body2" gutterBottom>
            Some of the projects I oversaw and developed include:{" "}
          </Typography>

          <StyledUl>
            <li>
              <Typography variant="body2">
                Redesign of the checkout process by working with the UX and
                design team using data obtained from Optimise
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Click and collect order management web app for the 3000+ stores
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                Order checker web app for the customer service team to assist
                them in helping customers
              </Typography>
            </li>
            <li>
              <Typography variant="body2">
                System monitoring web apps to help the business evaluate issues
                in the order flow
              </Typography>
            </li>
          </StyledUl>
        </RightContainer>
      </HistoryContainer>
    </>
  );
};

export default History;
