import returnHtml from './utils/html';

const html = `
    <h2>📜 ResearchPapers.fm</h2>
    <p>Listen to interesting new papers from <a href="https://arxiv.org/" target="_blank">arxiv.org</a> as engaging podcasts.</p>
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
    <h3>Get started (<a href="/login">Login (TODO)</a>)</h3>
    <form action="/signup" method="post">
      <labal>
        <p>Email:</p>
        <input type="email" name="email" />
      </label>
      <labal>
        <p>What kind of papers are you intersted in? 1-2 scentences:</p>
        <p><textarea name="topics"></textarea></p>
      </label>
      <button>Submit</button>
    </form>
    <p>
      <i>Created by Jacob Peddicord. <a href="https://github.com/jacobpedd/research-papers-fm" target="_blank">Source code</a>. Not affiliated with arxiv.org.</i>
    </p>
`;

export default function landing() {
	return returnHtml(html);
}
