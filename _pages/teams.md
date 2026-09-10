---
layout: page
title: Teams
permalink: /teams/
nav: true
nav_order: 2
_styles: >
  .team-accordion {
    border-top: 1px solid var(--global-divider-color);
  }

  .team-member {
    border-bottom: 1px solid var(--global-divider-color);
  }

  .team-member summary {
    cursor: pointer;
    list-style: none;
    padding: 1.5rem 3rem 1.5rem 0;
    position: relative;
  }

  .team-member summary::-webkit-details-marker {
    display: none;
  }

  .team-member summary::after {
    color: var(--global-theme-color);
    content: "+";
    font-size: 1.75rem;
    line-height: 1;
    position: absolute;
    right: 0.5rem;
    top: 1.5rem;
  }

  .team-member[open] summary::after {
    content: "-";
  }

  .team-name {
    color: var(--global-text-color);
    display: block;
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: 0.35rem;
  }

  .team-member summary:hover .team-name,
  .team-member summary:focus .team-name {
    color: var(--global-theme-color);
  }

  .team-content {
    padding: 0 0 1.5rem;
  }
---

<div class="team-accordion">
  <details class="team-member" id="yang-yang">
    <summary>
      <span class="team-name">Yang Yang</span>
      <strong>Principal Investigator · Assistant Professor</strong>
    </summary>
    <div class="team-content">
      <p>I am an Assistant Professor in the School for the Environment at the University of Massachusetts Boston. My research focuses on hydrological modeling and urban hydrology. I develop and apply numerical models to improve predictions of water quantity and quality and to inform decision-making for sustainable water resources management. I hold a PhD from The University of Hong Kong, master’s degrees from IHE-Delft, TU Dresden, and UPC BarcelonaTech, and a bachelor’s degree from Hohai University. Before joining UMass Boston, I worked as a research assistant professor and a postdoctoral fellow at The University of Hong Kong.</p>
    </div>
  </details>

  <details class="team-member" id="reo-peters">
    <summary>
      <span class="team-name">Reo Peters</span>
      <strong>Undergraduate Research Assistant</strong>
    </summary>
    <div class="team-content">
      <p>I am in my senior year at UMass Boston working on my bachelor’s degree in environmental science. My first foray into research was a project I conducted as a high school senior measuring irradiance, nitrates, and soil texture around my property to explore the ways in which development might influence growing conditions.</p>
      <p>Recently, I’ve become interested in studying green stormwater infrastructure as a mitigation strategy for issues like flooding, urban heat, combined sewer overflow, and water pollution.</p>
      <p>For many years, I’ve been interested in making the relationship between humans and the environment more harmonious—especially in urban areas. I’m hoping that the work I do for the remainder of my undergraduate program allows me to investigate this relationship within a local context.</p>
    </div>
  </details>
</div>
