import { css } from 'styled-components';
import { Theme } from '@edwardandrewb/elements';

import cssReset from './cssReset';

const createGlobalStyles = (theme: Theme): string => `
  ${cssReset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    ${css(theme.typography.body1).join('')}
  }

  a {
    outline: none;
    display: flex;
    color: ${theme.palette.text.primary};
    text-decoration: none;
    transition: ${theme.transition};
  }

  a:hover,
  a:focus,
  a:active {
    color: ${theme.palette.primary.main};
  }
`;

export { createGlobalStyles };
