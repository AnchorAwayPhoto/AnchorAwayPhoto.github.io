# AnchorAwayPhoto.github.io
Anchor Away Photography Website
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Anchor Away Photography</title>
  <style>
    :root {
      --bg: #f7f7f5;
      --surface: #ffffff;
      --text: #111111;
      --muted: #666666;
      --line: #dddddd;
      --accent: #244a66;
      --max-width: 1200px;
      --radius: 18px;
      --shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      width: min(92%, var(--max-width));
      margin: 0 auto;
    }

    .site-header {
      position: sticky;
      top: 0;
      z-index: 10;
      backdrop-filter: blur(12px);
      background: rgba(247, 247, 245, 0.85);
      border-bottom: 1px solid rgba(221, 221, 221, 0.7);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .brand {
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 1.25rem;
      list-style: none;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .nav-links a:hover,
    .nav-links a:focus {
      color: var(--text);
    }

    .hero {
      padding: 5rem 0 3rem;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 2rem;
      align-items: center;
    }

    .eyebrow {
      font-size: 0.85rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 1rem;
    }

    h1 {
      font-size: clamp(2.5rem, 5vw, 5rem);
      line-height: 0.98;
      letter-spacing: -0.04em;
      margin-bottom: 1.25rem;
    }

    .hero p {
      max-width: 38rem;
      color: var(--muted);
      font-size: 1.05rem;
      margin-bottom: 1.75rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .button {
      display: inline-block;
      padding: 0.9rem 1.2rem;
      border-radius: 999px;
      border: 1px solid var(--text);
      transition: 0.2s ease;
      font-weight: 600;
    }

    .button:hover,
    .button:focus {
      transform: translateY(-1px);
    }

    .button-primary {
      background: var(--text);
      color: white;
    }

    .button-secondary {
      background: transparent;
      color: var(--text);
    }

    .hero-image {
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      min-height: 420px;
      background: #d9d9d9;
    }

    .hero-image img {
      height: 100%;
      object-fit: cover;
    }

    section {
      padding: 4rem 0;
    }

    .section-heading {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }

    .section-heading h2 {
      font-size: clamp(1.8rem, 3vw, 2.8rem);
      letter-spacing: -0.03em;
    }

    .section-heading p {
      color: var(--muted);
      max-width: 34rem;
    }

    .portfolio-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .card {
      background: var(--surface);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      border: 1px solid rgba(221, 221, 221, 0.6);
    }

    .card-image {
      aspect-ratio: 4 / 5;
      background: #d8d8d8;
      overflow: hidden;
    }

    .card-image img {
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    .card:hover .card-image img {
      transform: scale(1.04);
    }

    .card-body {
      padding: 1rem;
    }

    .card-body h3 {
      font-size: 1.1rem;
      margin-bottom: 0.35rem;
    }

    .card-body p {
      color: var(--muted);
      font-size: 0.95rem;
    }

    .about-grid,
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }

    .about-copy,
    .contact-copy,
    .contact-form-wrap {
      background: var(--surface);
      border-radius: var(--radius);
      padding: 1.5rem;
      box-shadow: var(--shadow);
      border: 1px solid rgba(221, 221, 221, 0.6);
    }

    .about-copy p,
    .contact-copy p {
      color: var(--muted);
      margin-bottom: 1rem;
    }

    .contact-list {
      list-style: none;
      display: grid;
      gap: 0.75rem;
      color: var(--muted);
    }

    form {
      display: grid;
      gap: 1rem;
    }

    label {
      display: grid;
      gap: 0.4rem;
      font-weight: 600;
      font-size: 0.95rem;
    }

    input,
    textarea,
    select {
      width: 100%;
      padding: 0.9rem 1rem;
      border-radius: 12px;
      border: 1px solid var(--line);
      font: inherit;
      background: white;
    }

    textarea {
      min-height: 140px;
      resize: vertical;
    }

    .site-footer {
      padding: 2rem 0 3rem;
      color: var(--muted);
      font-size: 0.95rem;
    }

    .footer-row {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      border-top: 1px solid var(--line);
      padding-top: 1.5rem;
      flex-wrap: wrap;
    }

    @media (max-width: 900px) {
      .hero-grid,
      .about-grid,
      .contact-grid,
      .portfolio-grid {
        grid-template-columns: 1fr;
      }

      .section-heading {
        align-items: start;
        flex-direction: column;
      }
    }

    @media (max-width: 680px) {
      .nav {
        flex-direction: column;
        gap: 0.75rem;
        align-items: flex-start;
      }

      .nav-links {
        flex-wrap: wrap;
      }

      .hero {
        padding-top: 3rem;
      }
    }
  </style>
</head>
<body>
  <header class="site-header">
    <div class="container nav">
      <a href="#home" class="brand">Anchor Away Photography</a>
      <ul class="nav-links">
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Book</a></li>
      </ul>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Winter sports and athletic storytelling</p>
          <h1>Dynamic sports photography with a clean, northern edge.</h1>
          <p>
            Anchor Away Photography is a New Hampshire-based sports photography brand focused on skiing,
            snowboarding, and action-driven visual storytelling across New England and Eastern Canada.
          </p>
          <div class="hero-actions">
            <a href="#portfolio" class="button button-primary">View Portfolio</a>
            <a href="#contact" class="button button-secondary">Book a Shoot</a>
          </div>
        </div>

        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1517821365201-7734f463f9f2?auto=format&fit=crop&w=1200&q=80" alt="Action sports photography sample" />
        </div>
      </div>
    </section>

    <section id="portfolio">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2>Selected Work</h2>
          </div>
          <p>
            A portfolio built around speed, movement, atmosphere, and the moments that make athletes and teams look their best.
          </p>
        </div>

        <div class="portfolio-grid">
          <article class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=900&q=80" alt="Skier in motion" />
            </div>
            <div class="card-body">
              <h3>Skiing</h3>
              <p>Fast, technical, and athlete-centered imagery for training, events, and competition.</p>
            </div>
          </article>

          <article class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=900&q=80" alt="Snowboarder airborne" />
            </div>
            <div class="card-body">
              <h3>Snowboarding</h3>
              <p>Editorial-style action frames and brand-ready content with energy and clarity.</p>
            </div>
          </article>

          <article class="card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80" alt="Athlete portrait and lifestyle" />
            </div>
            <div class="card-body">
              <h3>All Sports</h3>
              <p>Built for winter, adaptable across sports, events, teams, and commercial storytelling.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="container about-grid">
        <div class="section-heading" style="margin-bottom: 0;">
          <div>
            <h2>About</h2>
          </div>
        </div>
        <div class="about-copy">
          <p>
            I’m Tim, the photographer behind Anchor Away Photography. My work focuses on capturing motion in a way that feels sharp, modern, and authentic.
          </p>
          <p>
            While my primary focus is skiing and snowboarding, I also work across sports, athlete branding, editorial storytelling, and event coverage.
          </p>
          <p>
            Based in New Hampshire, I work throughout New England and Eastern Canada.
          </p>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container contact-grid">
        <div class="contact-copy">
          <div class="section-heading" style="margin-bottom: 1rem;">
            <div>
              <h2>Book a Shoot</h2>
            </div>
          </div>
          <p>
            Looking for team coverage, athlete branding, event photography, or commercial sports imagery? Reach out with the details below.
          </p>
          <ul class="contact-list">
            <li><strong>Based in:</strong> New Hampshire</li>
            <li><strong>Coverage:</strong> New England and Eastern Canada</li>
            <li><strong>Email:</strong> hello@anchorawayphoto.com</li>
            <li><strong>Instagram:</strong> @anchorawayphoto</li>
          </ul>
        </div>

        <div class="contact-form-wrap">
          <form id="contactForm">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>

            <label>
              Project Type
              <select name="projectType">
                <option value="">Select one</option>
                <option>Team Coverage</option>
                <option>Athlete Branding</option>
                <option>Competition / Event</option>
                <option>Commercial / Editorial</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Message
              <textarea name="message" placeholder="Tell me about your project, dates, and location."></textarea>
            </label>

            <button type="submit" class="button button-primary">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-row">
      <p>© 2026 Anchor Away Photography</p>
      <p>Designed for clean visuals, strong storytelling, and easy booking.</p>
    </div>
  </footer>

  <script>
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const projectType = formData.get('projectType');
      const message = formData.get('message');

      const subject = encodeURIComponent(`Photography Inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}`
      );

      window.location.href = `mailto:hello@anchorawayphoto.com?subject=${subject}&body=${body}`;
    });
  </script>
</body>
</html>
