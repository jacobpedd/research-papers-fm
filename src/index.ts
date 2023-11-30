import favicon from './favicon';
import landing from './landing';
import { login } from './login';
import { signup } from './signup';

export interface Env {
	KV: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		switch (new URL(request.url).pathname) {
			case '/favicon.ico':
				return favicon();
			case '/':
				return landing();
			case '/login':
				return login(request, env);
			case '/signup':
				return signup(request, env);
			default:
				console.log(request.url);
				return new Response('Not found', { status: 404 });
		}
	},
};
