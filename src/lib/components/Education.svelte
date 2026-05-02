<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { education as EducationType } from '$lib/data/portfolio';

  interface Props {
    education: typeof EducationType;
  }

  let { education }: Props = $props();
</script>

<section id="education">
  <div class="edu-inner">
    <p class="section-label fade-up" use:scrollReveal>Background</p>
    <h2 class="section-title fade-up" use:scrollReveal>Education</h2>
    <div class="divider"></div>

    <div class="edu-card fade-up" use:scrollReveal>
      <div class="edu-icon">🎓</div>
      <div>
        <p class="edu-degree">{education.degree}</p>
        <p class="edu-school">{education.school}</p>
        <p class="edu-year">{education.years}</p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--surface);
    border-top: 1px solid var(--border);
  }

  .edu-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .edu-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem 2.2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 600px;
    transition: all var(--transition);
  }
  .edu-card:hover {
    border-color: var(--sky-accent);
    box-shadow: 0 4px 20px rgba(56, 189, 248, 0.1);
  }

  .edu-icon {
    width: 56px; height: 56px;
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .edu-degree {
    font-size: 1rem;
    font-weight: 500;
    color: var(--ink);
    margin-bottom: 0.2rem;
  }

  .edu-school {
    font-size: 0.9rem;
    color: var(--ink-soft);
  }

  .edu-year {
    font-size: 0.82rem;
    color: var(--ink-muted);
    margin-top: 0.2rem;
  }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
  }
</style>
