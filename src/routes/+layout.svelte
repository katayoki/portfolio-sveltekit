<script lang="ts">
  import '../app.css';
  import { browser } from '$app/environment';
  import { theme } from '$lib/stores/theme';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  // Apply theme immediately on mount to avoid flash
  if (browser) {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = stored ?? (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);
  }

  let { children } = $props();
</script>

<svelte:head>
  <title>John Jhed Raniel Calumpang — Web Developer</title>
  <meta name="description" content="Portfolio of John Jhed Raniel Calumpang, an enthusiastic web developer with 5 years of experience crafting user-centric web applications." />
</svelte:head>

<Nav />
{@render children()}
<Footer />