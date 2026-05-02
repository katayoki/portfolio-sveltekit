<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import About from '$lib/components/About.svelte';
  import Skills from '$lib/components/Skills.svelte';
  import Experience from '$lib/components/Experience.svelte';
  import Education from '$lib/components/Education.svelte';

  import { profile, skills, experience, education } from '$lib/data/portfolio';
</script>

<Hero {profile} />
<About {profile} />
<Skills {skills} />
<Experience {experience} />
<Education {education} />
