// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// import { Pages } from "../../pages";

// const StyledNav = styled.nav`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 999;
//   width: 100%;
//   height: 56px;
//   background-color: ${(props) => props.theme.palette.background.paper};
//   display: flex;
// `;

// const StyledLink = styled(Link)`
//   padding: 16px;
// `;

// type Props = {
//   pages: Pages;
// }

// const Nav: React.FC<Props> = ({ pages }) => {
//   const pageLinks = Object.values(pages).map((v) => (
//     <StyledLink key={v.path} to={v.path}>
//       {v.title}
//     </StyledLink>
//   ));

//   return <StyledNav>{pageLinks}</StyledNav>;
// };

// export default Nav;
