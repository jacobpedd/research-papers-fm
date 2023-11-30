import { Env } from '.';
import returnHtml from './utils/html';

const html = `
    <h1>Login</h1>
    <form action="/login" method="post">
        <labal>
            <p>Email:</p>
            <p><input type="email" name="email" /></p>
        </label>
        <button>Submit</button>
    </form>
`;

export async function login(request: Request, env: Env) {
	// If the request is a POST request, log the user in
	if (request.method == 'POST') {
		// Get email from form data
		const body = await request.formData();
		const email = body.get('email');
		if (!email) return new Response('Invalid form data, need email.', { status: 400 });

		// Check if the user exists
		const token = await env.KV.get(`${email}:token`);
		if (!token) {
			return new Response('User does not exist', { status: 400 });
		}

		// TODO: Tell them a link to their dashboard has been sent to their email.
		return new Response("We're not ready yet. Check back soon!", { status: 200 });
	}

	return returnHtml(html);
}
