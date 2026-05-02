<script lang="ts">
  import { onMount } from 'svelte';

  let scrolled = $state(false);

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
    transition: box-shadow var(--transition);
  }
  nav.scrolled {
    box-shadow: 0 2px 24px rgba(56, 189, 248, 0.08);
  }
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

  @media (max-width: 768px) {
    .nav-links { display: none; }
  }
</style>
