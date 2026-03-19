import React from 'react';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Grid Overlay */}
      <div className="grid-overlay">
        <div className="grid-line"><span className="grid-marker">01</span></div>
        <div className="grid-line"><span className="grid-marker">02</span></div>
        <div className="grid-line"><span className="grid-marker">03</span></div>
        <div className="grid-line"><span className="grid-marker">04</span></div>
        <div className="grid-line"><span className="grid-marker">05</span></div>
        <div className="grid-line"><span className="grid-marker">06</span></div>
        <div className="grid-line"><span className="grid-marker">07</span></div>
        <div className="grid-line"><span className="grid-marker">08</span></div>
        <div className="grid-line"><span className="grid-marker">09</span></div>
        <div className="grid-line"><span className="grid-marker">10</span></div>
        <div className="grid-line"><span className="grid-marker">11</span></div>
        <div className="grid-line"><span className="grid-marker">12</span></div>
      </div>

      {/* 001 Hero */}
      <section className="hero grain" id="sec-001">
        <div className="top-right metadata mono-11">PROJECT: GOOGLE/CREATIVE/2026</div>
        <div className="bottom-left metadata mono-11">EST. KWARA STATE, NIGERIA — 1998</div>
        <div className="bottom-right metadata mono-11">CURRENT: DALLAS/BROOKLYN</div>
        
        <div className="content-wrap">
          <span className="section-num mono-10">001 — CULTURAL INFRASTRUCTURE</span>
          <h1 className="grotesk-72">TOBI AFOLAYAN</h1>
          <p className="mono-18" style={{ color: 'var(--warm-gray)', marginTop: '20px' }}>BUILDING INFRASTRUCTURE FOR CULTURE</p>
        </div>
      </section>

      {/* 002 Brief */}
      <section className="brief" id="sec-002">
        <div className="content-wrap">
          <span className="section-num mono-10">002 — CONTEXT</span>
          <div className="brief-text">
            <h2 className="grotesk-48" style={{ marginBottom: '40px' }}>THE DIGITAL ARTIFACT</h2>
            <p className="mono-16">
              FOR MY GOOGLE CREATIVE FELLOWSHIP APPLICATION, I WAS ASKED TO CREATE A DIGITAL ARTIFACT SHOWCASING WHO I AM AND WHAT I LOVE TO DO, CREATIVELY.
              <br /><br />
              USING GOOGLE NOTEBOOKLM, I CREATED THREE FORMATS EXPLORING MY IDENTITY AS A CULTURAL INFRASTRUCTURE BUILDER: A CONVERSATIONAL PODCAST, A VISUAL PRESENTATION, AND A VIDEO OVERVIEW.
            </p>
          </div>
          <div className="metadata-br mono-11">DEADLINE: 23.03.2026</div>
        </div>
      </section>

      {/* 003 Video */}
      <section className="video-section grain" id="sec-003">
        <div className="video-flex">
          <div className="video-embed">
            <iframe 
              src="https://www.youtube.com/embed/clmu6EOJZDs" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-text">
            <span className="section-num mono-10">003 — VISUAL OVERVIEW</span>
            <h2 className="grotesk-48" style={{ marginBottom: '20px' }}>WATCH</h2>
            <p className="mono-16" style={{ color: 'var(--warm-gray)', marginBottom: '20px' }}>Who I Am as a Creative</p>
            <div className="mono-11">DURATION: 00:02:30</div>
            <div className="mono-11">FORMAT: VIDEO/YOUTUBE</div>
          </div>
        </div>
      </section>

      {/* 004 Audio */}
      <section className="audio-section" id="sec-004">
        <div className="content-wrap">
          <span className="section-num mono-10">004 — AUDIO EXPLORATION</span>
          <div className="audio-flex">
            <div className="audio-text">
              <h2 className="grotesk-48" style={{ marginBottom: '20px' }}>LISTEN</h2>
              <p className="mono-16" style={{ color: 'var(--warm-gray)', marginBottom: '20px' }}>Full Creative Identity</p>
              <div className="mono-11">DURATION: 00:19:00</div>
              <div className="mono-11">FORMAT: AUDIO/PODCAST</div>
              <div className="mono-11">SOURCE: NOTEBOOKLM</div>
            </div>
            <div className="audio-embed">
              <iframe 
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/tobafo19/tobi-afolayan-coding-cultural&color=%238b4513&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
              ></iframe>
              <p className="mono-11" style={{ marginTop: '10px', textAlign: 'right' }}>For reviewers who want the complete story</p>
            </div>
          </div>
        </div>
      </section>

      {/* 005 Slides */}
      <section className="slides-section grain" id="sec-005">
        <div className="content-wrap">
          <span className="section-num mono-10">005 — VISUAL DECK</span>
          <h2 className="grotesk-48" style={{ marginBottom: '10px' }}>ARCHITECTING CULTURE</h2>
          <p className="mono-18" style={{ color: 'var(--warm-gray)', marginBottom: '60px' }}>15-SLIDE PRESENTATION</p>
          
          <div className="button-group">
            <a href="https://drive.google.com/file/d/1teMbaqeJ2iLZ7tH2ydHs6zUgEN0AKrUN/view" target="_blank" rel="noopener noreferrer" className="brutalist-btn btn-filled">VIEW SLIDES</a>
            <a href="https://drive.google.com/uc?export=download&id=1teMbaqeJ2iLZ7tH2ydHs6zUgEN0AKrUN" download target="_blank" rel="noopener noreferrer" className="brutalist-btn btn-outline">DOWNLOAD PDF</a>
          </div>
        </div>
      </section>

      {/* 006 Portfolio */}
      <section className="portfolio" id="sec-006">
        <div className="content-wrap">
          <span className="section-num mono-10">006 — INFRASTRUCTURE</span>
          <div className="portfolio-grid">
            <a href="https://apollowrldx.com" target="_blank" rel="noopener noreferrer" className="p-card">
              <h3 className="grotesk-48">APOLLO WRLDX</h3>
              <div className="divider"></div>
              <ul className="meta-list">
                <li>30+ EVENTS</li>
                <li>7,000+ ATTENDEES</li>
                <li>CULTURAL INFRASTRUCTURE</li>
                <li>DIASPORA COMMUNITIES</li>
              </ul>
            </a>
            <a href="https://musicdna.lovable.app/" target="_blank" rel="noopener noreferrer" className="p-card">
              <h3 className="grotesk-48">MUSIC DNA</h3>
              <div className="divider"></div>
              <ul className="meta-list">
                <li>AI-POWERED CURATION</li>
                <li>300+ ARTIST DATABASE</li>
                <li>20 HRS → 3 MINS</li>
                <li>PLATFORM: WEB APP</li>
              </ul>
            </a>
            <a href="https://tobiafo.com" target="_blank" rel="noopener noreferrer" className="p-card">
              <h3 className="grotesk-48">FULL PORTFOLIO</h3>
              <div className="divider"></div>
              <ul className="meta-list">
                <li>ENGINEERING</li>
                <li>CULTURAL PRODUCTION</li>
                <li>COMPLETE WORK</li>
                <li>PROJECTS + PROCESS</li>
              </ul>
            </a>
          </div>
        </div>
      </section>

      {/* 007 Footer */}
      <footer className="footer grain">
        <div className="content-wrap">
          <p className="mono-18" style={{ color: 'var(--bone)', marginBottom: '4px' }}>TOBI AFOLAYAN</p>
          <p className="mono-11">CREATIVE TECHNOLOGIST</p>
          <p className="mono-11" style={{ marginTop: '10px' }}><a href="https://tobiafo.com" target="_blank" rel="noopener noreferrer">TOBIAFO.COM</a></p>
          <div className="divider"></div>
          <div className="mono-11">BUILT: GOOGLE AI STUDIO</div>
          <div className="mono-11">ARTIFACTS: GOOGLE NOTEBOOKLM</div>
          <div className="mono-11">RAW ASSETS: <a href="https://drive.google.com/drive/folders/1Foex_2JxPonPb2GrhRKwx3JW4TPSczD7?usp=drive_link" target="_blank" rel="noopener noreferrer">GOOGLE DRIVE</a></div>
          <div className="mono-11">DEPLOYED: 2026</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
