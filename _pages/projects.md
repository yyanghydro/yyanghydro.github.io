---
layout: page
title: Research Projects
permalink: /projects/
description: Current research on urban hydrology, green infrastructure, and resilient water systems.
nav: true
nav_order: 3
_styles: >
  .project-accordion {
    border-top: 1px solid var(--global-divider-color);
  }

  .project-item {
    border-bottom: 1px solid var(--global-divider-color);
  }

  .project-item summary {
    cursor: pointer;
    list-style: none;
    padding: 1.5rem 3rem 1.5rem 0;
    position: relative;
  }

  .project-item summary::-webkit-details-marker {
    display: none;
  }

  .project-item summary::after {
    color: var(--global-theme-color);
    content: "+";
    font-size: 1.75rem;
    line-height: 1;
    position: absolute;
    right: 0.5rem;
    top: 1.5rem;
  }

  .project-item[open] summary::after {
    content: "-";
  }

  .project-title {
    color: var(--global-text-color);
    display: block;
    font-size: 1.35rem;
    font-weight: 600;
    line-height: 1.35;
    margin-bottom: 0.35rem;
  }

  .project-period {
    color: var(--global-theme-color);
    display: block;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.35rem;
  }

  .project-item summary:hover .project-title,
  .project-item summary:focus .project-title {
    color: var(--global-theme-color);
  }

  .project-summary {
    color: var(--global-text-color-light);
    display: block;
  }

  .project-content {
    padding: 0 0 1.5rem;
  }
---

<div class="project-accordion">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    <details class="project-item">
      <summary>
        <span class="project-title">{{ project.title }}</span>
        <span class="project-period">{{ project.period }}</span>
        <span class="project-summary">{{ project.description }}</span>
      </summary>
      <div class="project-content">
        {{ project.content }}
      </div>
    </details>
  {% endfor %}
</div>
