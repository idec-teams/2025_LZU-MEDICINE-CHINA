<div class="hero reveal">
  <div class="hero-decor">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
  </div>
  <h1>iDEC 2025 · LZU‑MEDICINE‑CHINA</h1>
  <p>Intelligent live biotherapeutic for perioperative gut dysbiosis: dual‑action precision therapy—barrier repair via oleic acid and pathogen suppression via defensin—coupled with a bile‑salt–responsive Hok/Sok biosafety system for gut‑specific survival and extra‑intestinal self‑clearance.</p>
  <div class="actions">
    <a class="button secondary" href="project/description/">Explore the Project</a>
    <a class="button primary" href="wet-lab/results/">See Results</a>
  </div>
</div>

![Project Banner](https://static.igem.wiki/teams/5562/logo/1.webp)

## Highlights

<div class="features">
  <div class="feature-card reveal">
    <div class="feature-icon">🧬</div>
    <h3>Dual‑Action Therapeutic Design</h3>
    <p>Metabolic module secretes oleic acid for barrier repair; immune module expresses defensin to clear pathogens—two synergistic pathways.</p>
    <p><a href="project/design/">Learn the design →</a></p>
  </div>
  <div class="feature-card reveal">
    <div class="feature-icon">🧠</div>
    <h3>Signal‑Coupled Biosafety</h3>
    <p>P16090 bile‑salt responsive promoter couples therapy with Hok/Sok: suppressed toxin in‑gut, rapid self‑lysis outside.</p>
    <p><a href="project/safety/">Learn safety →</a></p>
  </div>
  <div class="feature-card reveal">
    <div class="feature-icon">🧪</div>
    <h3>Reproducible Experiments</h3>
    <p>Systematic experimental design and documentation with complete results for verification and extension.</p>
    <p><a href="wet-lab/results/">See results →</a></p>
  </div>
  <div class="feature-card reveal">
    <div class="feature-icon">🧩</div>
    <h3>Modular Circuits</h3>
    <p>Therapy, sensing, and safety modules decoupled for flexible composition across hosts and scenarios.</p>
    <p><a href="project/implementation/">Implementation →</a></p>
  </div>
  <div class="feature-card reveal">
    <div class="feature-icon">🌍</div>
    <h3>Human‑Centric Practices</h3>
    <p>Education, inclusivity, and sustainability initiatives aligned with clinical needs and social impact.</p>
    <p><a href="human-practices/ihp/">Integrated Practices →</a></p>
  </div>
  <div class="feature-card reveal">
    <div class="feature-icon">📚</div>
    <h3>Open & Standardized</h3>
    <p>Complete documentation, reusable parts, and standardized records to foster open collaboration.</p>
    <p><a href="project/contribution/">Contributions & Parts →</a></p>
  </div>
</div>

## Project Overview

Perioperative gut dysbiosis is prevalent and lacks standardized therapies. We engineer an intelligent probiotic that, under gut‑specific signals, executes two coordinated therapeutic functions: secreting oleic acid to repair the barrier and expressing defensin to suppress pathogens and strengthen immune defense.

These therapeutic circuits are coupled to a bile‑salt signal–regulated Hok/Sok biosafety system to fundamentally address the risk of environmental escape: active and therapeutic in the gut, self‑clearing outside, enabling precise spatial control.

## Core Parts

| Part Name        | Type        | Description                                                                                                         |
|------------------|-------------|---------------------------------------------------------------------------------------------------------------------|
| BBa_25CA4F5T     | Coding      | Encodes stearoyl-CoA 9-desaturase (OLE1), catalyzes stearic acid to oleic acid; codon-optimized for L. lactis.      |
| BBa_25ZF6KGL     | Coding      | Encodes accA, enhances fatty acid synthesis, increases short-chain fatty acids for oleic acid production.           |
| BBa_25S2TG5Z     | Promoter    | Bile salt-responsive promoter (P16090) from Lactobacillus, regulates gene expression in response to bile salts.     |
| BBa_25VPY4CG     | Coding      | Encodes defensin DEFB4A, antimicrobial peptide from human genome, expressed in engineered bacteria.                 |
| BBa_25NBMOAR     | Measurement | Synthetic sequence (P16090-RBS-OLE1-2AA-DEFB4A-Terminator), enables bile salt-induced expression of OLE1/DEFB4A.   |
| BBa_251CFLR3     | Plasmid     | Plasmid backbone PIP501 from Enterococcus faecium, used for biosafety system construction in various microorganisms. |

<!-- Developer-only quick access and local preview removed as requested -->
