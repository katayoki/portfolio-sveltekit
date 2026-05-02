<script lang="ts">
  import type { profile as ProfileType } from '$lib/data/portfolio';

  interface Props {
    profile: typeof ProfileType;
  }

  let { profile }: Props = $props();
</script>

<section id="hero">
  <div class="hero-bg"></div>
  <div class="hero-blob"></div>

  <div class="hero-content">
    <span class="hero-tag">Available for work</span>
    <h1 class="hero-name">
      {profile.name.first}<br /><em>{profile.name.middle}</em> {profile.name.last}
    </h1>
    <p class="hero-title">{profile.title} · {profile.yearsOfExperience} Years Experience</p>
    <p class="hero-summary">{profile.summary}</p>
    <div class="hero-cta">
      <a href="#experience" class="btn btn-primary">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        View Experience
      </a>
      <a href="#about" class="btn btn-outline">
        Get in Touch
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 8rem 5vw 5rem;
    position: relative;
    overflow: hidden;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 70% 40%, var(--sky) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 10% 80%, var(--sky-mid) 0%, transparent 60%);
    z-index: 0;
  }

  .hero-blob {
    position: absolute;
    width: 520px; height: 520px;
    background: radial-gradient(circle, var(--sky-mid) 0%, transparent 70%);
    border-radius: 50%;
    top: -100px; right: -60px;
    opacity: 0.5;
    animation: drift 8s ease-in-out infinite alternate;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 680px;
  }

  .hero-tag {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 500;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--sky-deep);
    background: var(--sky);
    border: 1px solid var(--sky-accent);
    padding: 0.3rem 0.9rem;
    border-radius: 100px;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.7s 0.1s forwards;
  }

  .hero-name {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: var(--ink);
    margin-bottom: 0.3rem;
    opacity: 0;
    animation: fadeUp 0.7s 0.25s forwards;
  }
  .hero-name em {
    font-style: italic;
    color: var(--sky-deep);
  }

  .hero-title {
    font-size: 1rem;
    font-weight: 300;
    color: var(--ink-soft);
    margin-bottom: 1.6rem;
    letter-spacing: 0.04em;
    opacity: 0;
    animation: fadeUp 0.7s 0.4s forwards;
  }

  .hero-summary {
    font-size: 1.05rem;
    color: var(--ink-soft);
    font-weight: 300;
    max-width: 560px;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.7s 0.55s forwards;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.7s 0.7s forwards;
  }

  @media (max-width: 768px) {
    section { padding: 7rem 5vw 4rem; }
    .hero-blob { width: 300px; height: 300px; top: -50px; right: -80px; }
  }
</style>
