import favicon from './favicon';
import landing from './landing';
import { signup } from './signup';

export interface Env {
	KV: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.url.endsWith('/favicon.ico')) {
			return favicon();
		} else if (request.url.endsWith('.fm') || request.url.endsWith(':8787/')) {
			return landing();
		} else if (request.url.endsWith('/signup')) {
			return signup(request, env);
		}

		console.log(request.url);
		return new Response('Not found', { status: 404 });
	},
};
