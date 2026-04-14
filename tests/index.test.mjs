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

test('renders ten interactive riddle cards', () => {
  const cardCount = (html.match(/class="riddle-card"/g) || []).length;
  const toggleCount = (html.match(/class="card-toggle"/g) || []).length;

  assert.equal(cardCount, 10);
  assert.equal(toggleCount, 10);
});
