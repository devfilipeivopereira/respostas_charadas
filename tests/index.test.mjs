import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('exposes the new control shell and mobile action bar', () => {
  assert.match(html, /class="control-shell"/);
  assert.match(html, /class="action-bar"/);
  assert.match(html, /id="revealedCount"/);
});

test('offers dedicated reveal and hide all actions', () => {
  assert.match(html, /data-action="reveal-all"/);
  assert.match(html, /data-action="hide-all"/);
});

test('renders ten interactive riddle cards', () => {
  const cardCount = (html.match(/class="riddle-card"/g) || []).length;
  const toggleCount = (html.match(/class="card-toggle"/g) || []).length;

  assert.equal(cardCount, 10);
  assert.equal(toggleCount, 10);
});
