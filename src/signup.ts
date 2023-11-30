import { Env } from '.';

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
    <h2>Success</h2>
    <p>Thanks for signing up!</p>
    <p>We're not quite ready yet, but we'll send you an email when we launch.</p>
  </body>
</html>
`;

export async function signup(request: Request, env: Env) {
	// Check if the request is a POST request
	if (request.method !== 'POST') return new Response('Invalid method', { status: 405 });

	// Get the form data from the request
	const body = await request.formData();
	const email = body.get('email');
	const topics = body.get('topics');
	if (!email || !topics) return new Response('Invalid form data, need email and topics.', { status: 400 });

	// Store the data in KV
	if (await env.KV.get(email)) return new Response('User already exists', { status: 400 });
	await env.KV.put(email, topics);

	return new Response(html, {
		headers: { 'Content-Type': 'text/html' },
	});
}
