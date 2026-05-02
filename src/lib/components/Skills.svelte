<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';

  interface Props {
    skills: string[];
  }

  let { skills }: Props = $props();
</script>

<section id="skills">
  <div class="skills-inner">
    <p class="section-label fade-up" use:scrollReveal>Expertise</p>
    <h2 class="section-title fade-up" use:scrollReveal>Skills &amp; Technologies</h2>
    <div class="divider"></div>

    <div class="skills-grid">
      {#each skills as skill, i}
        <div class="skill-card fade-up" use:scrollReveal={i * 0.05}>
          <span class="skill-dot"></span>
          <p>{skill}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--surface);
  }

  .skills-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }

  .skill-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 1.2rem 1.4rem;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    transition: all var(--transition);
    cursor: default;
  }
  .skill-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.12);
    transform: translateY(-3px);
  }

  .skill-dot {
    width: 8px; height: 8px;
    background: var(--sky-deep);
    border-radius: 50%;
    margin-top: 0.55rem;
    flex-shrink: 0;
  }

  .skill-card p {
    font-size: 0.9rem;
    color: var(--ink-soft);
    font-weight: 400;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>
