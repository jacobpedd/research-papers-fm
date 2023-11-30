import favicon from './favicon';

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
}

const html = `
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
    <h2>📜 ResearchPapers.fm</h2>
    <p>Listen to interesting new papers from <a href="https://arxiv.org/">arxiv.org</a> as engaging podcasts.</p>
    <p>How it works:</p>
    <ol>
      <li>You tell us what topics you're interested in.</li>
      <li>We crawl new papers and reccomend the best for you.</li>
      <li>You select the papers you want to listen to.</li>
      <li>We use GPT-4 to turn the paper into an engaging podcast transcript.</li>
      <li>We use OpenAI's TTS to turn the transcript into a podcast.</li>
      <li>You enjoy the podcast.</li>
    </ol>
    <p>Here's an example from today:</p>
    <p>TODO: Put example audio here.</p>
    <h3>Get started</h3>
    <p>TODO: Add form to get started.</p>
  </body>
</html>
`;

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.url.endsWith('/favicon.ico')) {
			return favicon();
		}

		const response = new Response(html, {
			headers: { 'Content-Type': 'text/html' },
		});
		return response;
	},
};
