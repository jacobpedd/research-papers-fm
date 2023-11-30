const pre = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>📜 ResearchPapers.fm</title>
    <style>
      /* from nat.org */
      body { 
        line-height: 1.4;
          font-size: 16px;
          padding: 0 10px;
          margin: 50px auto;
          max-width: 650px;
      }

      #maincontent
      {
      max-width:42em;margin:15 auto;

      }
    </style>
  </head>
  <body>
`;

const post = `
    </body>
</html>
`;

export const layout = (body: string) => `${pre}${body}${post}`;
