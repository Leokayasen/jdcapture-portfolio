<!-- File: `index.html` -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>JDCapture — Photography Portfolio</title>
  <link rel="stylesheet" href="assets/css/base.css">
</head>
<body>
  <div id="wrapper">
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="#home">JDCapture</a>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="#gallery">Portfolio</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav">☰</button>
      </div>
    </header>

    <main>
      <section id="home" class="hero">
        <div class="hero-inner container">
          <h1>Photography that tells your story</h1>
          <p>Fine art, editorial and commercial photography.</p>
          <a class="btn" href="#gallery">View Portfolio</a>
        </div>
      </section>

      <section id="gallery" class="container gallery-section">
        <h2>Selected Works</h2>
        <p class="muted">Click an image to view larger.</p>
        <div class="gallery-grid" id="galleryGrid">
          <!-- Example items using Unsplash temporary images -->
          <figure class="gallery-item">
            <img loading="lazy" src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80&auto=format&fit=crop"
                 data-full="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1600&q=80&auto=format&fit=crop"
                 alt="Portrait sample 1">
            <figcaption>Portrait — Studio Series</figcaption>
          </figure>

          <figure class="gallery-item">
            <img loading="lazy" src="https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?w=800&q=80&auto=format&fit=crop"
                 data-full="https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?w=1600&q=80&auto=format&fit=crop"
                 alt="Editorial sample">
            <figcaption>Editorial — City Light</figcaption>
          </figure>

          <figure class="gallery-item">
            <img loading="lazy" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80&auto=format&fit=crop"
                 data-full="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&q=80&auto=format&fit=crop"
                 alt="Landscape sample">
            <figcaption>Landscape — Golden Hour</figcaption>
          </figure>

          <figure class="gallery-item">
            <img loading="lazy" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&auto=format&fit=crop"
                 data-full="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80&auto=format&fit=crop"
                 alt="Commercial sample">
            <figcaption>Commercial — Product Shot</figcaption>
          </figure>

          <!-- Add more items as needed -->
        </div>
      </section>

      <section id="about" class="container about-section">
        <div class="about-grid">
          <div>
            <h2>About</h2>
            <p class="muted">I’m a visual storyteller specializing in portrait and commercial photography. Available for editorial and commission work worldwide.</p>
            <ul class="meta-list">
              <li>Based in: Your City</li>
              <li>Available for travel</li>
              <li>Contact: hello@example.com</li>
            </ul>
          </div>
          <div class="about-photo">
            <img loading="lazy" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80&auto=format&fit=crop" alt="Photographer working">
          </div>
        </div>
      </section>

      <section id="services" class="container services-section">
        <h2>Services</h2>
        <div class="services-grid">
          <div class="card">
            <h3>Portraits</h3>
            <p>Studio and environmental portrait sessions tailored to your needs.</p>
          </div>
          <div class="card">
            <h3>Commercial</h3>
            <p>Product, catalogue and brand imagery for marketing and e-commerce.</p>
          </div>
          <div class="card">
            <h3>Editorial</h3>
            <p>Story-driven shoots for magazines and campaigns.</p>
          </div>
        </div>
      </section>

      <section id="contact" class="container contact-section">
        <h2>Contact</h2>
        <form class="contact-form" novalidate>
          <div class="form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name">
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@example.com">
            </label>
            <label class="full">
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="Tell me about your project"></textarea>
            </label>
          </div>
          <button type="submit" class="btn">Send Message</button>
        </form>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <small>© <span id="year"></span> JDCapture. All rights reserved.</small>
        <nav class="footer-nav" aria-label="Footer navigation">
          <a href="#gallery">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  </div>

  <!-- Lightbox Modal -->
  <div id="lightbox" class="lightbox" aria-hidden="true" role="dialog" aria-label="Image preview">
    <button class="lightbox-close" aria-label="Close">✕</button>
    <img class="lightbox-img" alt="">
    <p class="lightbox-caption"></p>
  </div>

  <script src="assets/js/base.js" defer></script>
</body>
</html>

<!-- File: `assets/css/base.css` -->
/* Minimal, professional styling */
:root{
--bg:#0f1721;
--card:#0b1220;
--muted:#9aa4ad;
--accent:#eab308;
--text:#f8fafc;
--container:1100px;
--radius:10px;
--gap:1.25rem;
--font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
margin:0;
font-family:var(--font-sans);
color:var(--text);
background:linear-gradient(180deg,#071024 0%, #081428 100%);
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing:grayscale;
line-height:1.5;
letter-spacing:0.01em;
}

/* Container */
.container{max-width:var(--container);margin:0 auto;padding:0 1rem}

/* Header */
.site-header{background:transparent;position:sticky;top:0;z-index:30;padding:.75rem 0}
.header-inner{display:flex;align-items:center;justify-content:space-between}
.logo{font-weight:700;color:var(--text);text-decoration:none;font-size:1.1rem}
.main-nav{display:flex;gap:1rem}
.main-nav a{color:var(--muted);text-decoration:none;padding:.4rem .6rem;border-radius:6px}
.main-nav a:hover{color:var(--text);background:rgba(255,255,255,0.03)}
.menu-toggle{display:none;background:none;border:0;color:var(--text);font-size:1.2rem}

/* Hero */
.hero{padding:5rem 0;background-image:url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=2000&q=80&auto=format&fit=crop');background-size:cover;background-position:center;border-radius:0 0 24px 24px}
.hero::after{content:"";position:absolute;left:0;right:0;top:0;height:100%;background:linear-gradient(180deg, rgba(2,6,23,0.45), rgba(2,6,23,0.65));mix-blend:multiply;pointer-events:none}
.hero-inner{position:relative;color:var(--text);padding:6rem 1rem;text-align:left}
.hero h1{margin:0 0 .5rem;font-size:2.2rem}
.hero p{margin:0 0 1rem;color:var(--muted)}
.btn{display:inline-block;background:var(--accent);color:#08141a;padding:.6rem .9rem;border-radius:8px;text-decoration:none;font-weight:600}

/* Gallery */
.gallery-section{padding:3rem 0}
.gallery-section h2{margin:0 0 .25rem}
.gallery-section .muted{color:var(--muted);margin:0 0 1rem}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap)}
.gallery-item{background:var(--card);border-radius:12px;overflow:hidden;cursor:pointer;transition:transform .2s}
.gallery-item img{display:block;width:100%;height:220px;object-fit:cover}
.gallery-item figcaption{padding:.6rem .75rem;color:var(--muted);font-size:.9rem}

/* About & services */
.about-section{padding:3rem 0}
.about-grid{display:grid;grid-template-columns:1fr 360px;gap:var(--gap);align-items:center}
.about-photo img{width:100%;border-radius:10px}
.services-section{padding:2.25rem 0}
.services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap)}
.card{background:var(--card);padding:1rem;border-radius:10px}

/* Contact */
.contact-section{padding:2.5rem 0}
.contact-form{background:transparent}
.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--gap)}
label{display:block;color:var(--muted);font-size:.9rem}
label input,label textarea{width:100%;padding:.6rem .7rem;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:rgba(255,255,255,0.02);color:var(--text);margin-top:.5rem}
label.full{grid-column:1/-1}

/* Footer */
.site-footer{padding:1rem 0;color:var(--muted);border-top:1px solid rgba(255,255,255,0.03)}
.footer-inner{display:flex;justify-content:space-between;align-items:center;gap:1rem}

/* Lightbox */
.lightbox{position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);z-index:60;padding:2rem}
.lightbox[aria-hidden="false"]{display:flex}
.lightbox-img{max-width:90%;max-height:80%;border-radius:8px;box-shadow:0 10px 30px rgba(0,0,0,0.6)}
.lightbox-close{position:absolute;top:1rem;right:1rem;background:transparent;border:0;color:var(--text);font-size:1.4rem}

/* Responsive */
@media (max-width:900px){
.gallery-grid{grid-template-columns:repeat(2,1fr)}
.about-grid{grid-template-columns:1fr}
.main-nav{display:none}
.menu-toggle{display:block}
}
@media (max-width:600px){
.gallery-grid{grid-template-columns:1fr}
.hero h1{font-size:1.6rem}
.footer-inner{flex-direction:column;align-items:flex-start}
}
