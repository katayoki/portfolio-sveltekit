<script lang="ts">
  import { scrollReveal } from '$lib/actions/scrollReveal';
  import type { profile as ProfileType } from '$lib/data/portfolio';

  interface Props {
    profile: typeof ProfileType;
  }

  let { profile }: Props = $props();
</script>

<section id="about">
  <div class="about-grid">
    <div>
      <p class="section-label">About</p>
      <h2 class="section-title">A little<br />about me</h2>
      <div class="divider"></div>
      <p class="about-text fade-up" use:scrollReveal>{profile.about}</p>
    </div>

    <div>
      <p class="section-label">Contact</p>
      <h2 class="section-title">Let's<br />connect</h2>
      <div class="divider"></div>
      <ul class="contact-list fade-up" use:scrollReveal>
        <li>
          <span class="contact-icon">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.55a16 16 0 0 0 6.06 6.06l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          {profile.contact.phone}
        </li>
        <li>
          <span class="contact-icon">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <a href="mailto:{profile.contact.email}">{profile.contact.email}</a>
        </li>
        <li>
          <span class="contact-icon">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          {profile.contact.location}
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  section {
    padding: 6rem 5vw;
    background: var(--white);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
    max-width: 1100px;
    margin: 0 auto;
  }

  .about-text {
    font-size: 1.05rem;
    color: var(--ink-soft);
    font-weight: 300;
  }

  .contact-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-list li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.95rem;
    color: var(--ink-soft);
  }

  .contact-icon {
    width: 36px; height: 36px;
    background: var(--sky);
    border: 1px solid var(--sky-mid);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--sky-deep);
    flex-shrink: 0;
  }

  .contact-list a {
    color: var(--ink-soft);
    text-decoration: none;
  }
  .contact-list a:hover { color: var(--sky-deep); }

  @media (max-width: 768px) {
    section { padding: 4rem 5vw; }
    .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  }
</style>
