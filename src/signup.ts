import { nanoid } from 'nanoid';
import { Env } from '.';
import returnHtml from './utils/html';

const html = `
    <h2>Success</h2>
    <p>Thanks for signing up!</p>
    <p>We're not quite ready yet, but we'll send you an email when we launch.</p>
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
	await env.KV.put(`${email}:topics`, topics);
	await env.KV.put(`${email}:token`, nanoid(9));

	// TODO: Tell them a link to their dashboard has been sent to their email.
	return returnHtml(html);
}
