<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { ExperienceItem } from '$lib/data/portfolio';

  interface Props {
    experience: ExperienceItem[];
  }

  let { experience }: Props = $props();

  function isBulletWithSub(
    bullet: string | { text: string; sub: string[] }
  ): bullet is { text: string; sub: string[] } {
    return typeof bullet === 'object' && 'sub' in bullet;
  }
</script>

<section id="experience">
  <div class="exp-inner">
    <p class="section-label fade-up" use:scrollReveal>Career</p>
    <h2 class="section-title fade-up" use:scrollReveal>Professional Experience</h2>
    <div class="divider"></div>

    <div class="timeline">
      {#each experience as job, i}
        <div class="exp-card fade-up" use:scrollReveal={i * 0.1}>
          <div class="exp-header">
            <span class="exp-role">{job.role}</span>
            <span class="exp-period">{job.period}</span>
          </div>
          <p class="exp-company">{job.company}</p>
          <ul class="exp-bullets">
            {#each job.bullets as bullet}
              <li>
                {#if isBulletWithSub(bullet)}
                  {bullet.text}
                  <ul class="exp-sub">
                    {#each bullet.sub as sub}
                      <li>{sub}</li>
                    {/each}
                  </ul>
                {:else}
                  {bullet}
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--white);
    border-top: 1px solid var(--border);
  }

  .exp-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .exp-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem 2.2rem;
    position: relative;
    transition: all var(--transition);
  }
  .exp-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: var(--sky-accent);
    border-radius: 4px 0 0 4px;
  }
  .exp-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 6px 30px rgba(56, 189, 248, 0.1);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.3rem;
  }

  .exp-role {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--ink);
  }

  .exp-period {
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--sky-deep);
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    padding: 0.2rem 0.75rem;
    border-radius: 100px;
    white-space: nowrap;
  }

  .exp-company {
    font-size: 0.9rem;
    color: var(--ink-muted);
    margin-bottom: 1rem;
  }

  .exp-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .exp-bullets > li {
    font-size: 0.92rem;
    color: var(--ink-soft);
    font-weight: 300;
    padding-left: 1.2rem;
    position: relative;
  }
  .exp-bullets > li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--sky-accent);
    font-weight: 700;
  }

  .exp-sub {
    margin-top: 0.4rem;
    padding-left: 1.2rem;
    border-left: 2px solid var(--sky-mid);
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    list-style: none;
  }
  .exp-sub li {
    font-size: 0.875rem;
    color: var(--ink-muted);
    padding-left: 0.8rem;
    position: relative;
  }
  .exp-sub li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--sky-mid);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
    .exp-header { flex-direction: column; }
  }
</style>
