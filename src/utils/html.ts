import { layout } from './layout';

export default function returnHtml(body: string) {
	const html = layout(body);
	return new Response(html, {
		headers: { 'Content-Type': 'text/html' },
	});
}
