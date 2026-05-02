<script lang="ts">
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  let scrolled = $state(false);
  let currentTheme = $state<'light' | 'dark'>('light');

  theme.subscribe((v) => (currentTheme = v));

  function toggleTheme() {
    theme.update((t) => (t === 'light' ? 'dark' : 'light'));
  }

  onMount(() => {
    const handleScroll = () => (scrolled = window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<nav class:scrolled>
  <a href="#hero" class="nav-logo">JJ<span>.</span>Calumpang</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#education">Education</a></li>
  </ul>
  <button class="theme-toggle" onclick={toggleTheme} aria-label="Toggle dark mode">
    {#if currentTheme === 'dark'}
      <!-- Sun icon -->
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    {:else}
      <!-- Moon icon -->
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    {/if}
  </button>
</nav>

<style>
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 5vw;
    background: rgba(248, 251, 255, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    transition: box-shadow var(--transition), background var(--transition);
  }

  :global([data-theme='dark']) nav {
    background: rgba(10, 22, 40, 0.85);
  }

  nav.scrolled { box-shadow: 0 2px 24px rgba(56, 189, 248, 0.08); }

  .nav-logo {
    font-family: 'DM Serif Display', serif;
    font-size: 1.15rem;
    color: var(--ink);
    text-decoration: none;
    letter-spacing: -0.01em;
  }
  .nav-logo span { color: var(--sky-deep); }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  .nav-links a {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ink-soft);
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: color var(--transition);
  }
  .nav-links a:hover { color: var(--sky-deep); }

  .theme-toggle {
    width: 38px; height: 38px;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: var(--sky);
    color: var(--ink-soft);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition);
    flex-shrink: 0;
  }
  .theme-toggle:hover {
    border-color: var(--sky-accent);
    color: var(--sky-deep);
    transform: rotate(12deg);
  }

  @media (max-width: 768px) {
    .nav-links { display: none; }
  }
</style>