import favicon from '../../client/static/Images/favicon/favicon.png';
import faviconApple from '../../client/static/Images/favicon/apple-touch-icon.png';

const header = (linkTags: string, globalStyles: string): string => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Edward</title>
      <link rel="icon" href="${favicon}" />
      <link rel="apple-touch-icon" href="${faviconApple}" />
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap">
      ${linkTags}
      <meta name="description" content="I am a full-stack JavaScript developer and this is my website." />
      <meta name="keywords" content="JavaScript" />
      <meta name="author" content="Edward" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>${globalStyles}</style>
    </head>
    <body>
      <div id="app">
`;

const footer = (scriptTags: string): string => `
      </div>
      ${scriptTags}
    </body>
  </html>
`;

export { header, footer };
