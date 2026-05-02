<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>John Jhed Raniel Calumpang — Web Developer</title>
  <meta name="description" content="Portfolio of John Jhed Raniel Calumpang, an enthusiastic web developer with 5 years of experience crafting user-centric web applications." />
</svelte:head>

<Nav />
{@render children()}
<Footer />
