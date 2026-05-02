import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const stored = browser ? localStorage.getItem('theme') : null;
const prefersDark = browser ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

export const theme = writable<'light' | 'dark'>(
  (stored as 'light' | 'dark') ?? (prefersDark ? 'dark' : 'light')
);

theme.subscribe((value) => {
  if (!browser) return;
  localStorage.setItem('theme', value);
  document.documentElement.setAttribute('data-theme', value);
});