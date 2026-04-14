import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('keeps a compact intro shell without global progress widgets', () => {
  assert.match(html, /class="control-shell"/);
  assert.doesNotMatch(html, /class="action-bar"/);
  assert.doesNotMatch(html, /id="revealedCount"/);
});

test('does not expose reveal-all or hide-all controls', () => {
  assert.doesNotMatch(html, /data-action="reveal-all"/);
  assert.doesNotMatch(html, /data-action="hide-all"/);
});

test('removes the long intro copy requested by the user', () => {
  assert.doesNotMatch(html, /Um gabarito oficial com cara de evento/);
  assert.doesNotMatch(html, /Aniversário Pr\. Filipe/);
  assert.doesNotMatch(html, /Cada Homem Um Guerreiro/);
  assert.doesNotMatch(html, /Feito para toque/);
  assert.doesNotMatch(html, /Painel oficial/);
  assert.doesNotMatch(html, /Cada resposta fica escondida até o toque/);
  assert.doesNotMatch(html, /A experiência agora é totalmente individual/);
});

test('renders ten interactive riddle cards', () => {
  const cardCount = (html.match(/class="riddle-card"/g) || []).length;
  const toggleCount = (html.match(/class="card-toggle"/g) || []).length;

  assert.equal(cardCount, 10);
  assert.equal(toggleCount, 10);
});
