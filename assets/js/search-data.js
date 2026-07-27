// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research-projects",
          title: "Research Projects",
          description: "Current research on urban hydrology, green infrastructure, and resilient water systems.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications; names of lab members are highlighted.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-call-for-abstracts-intelligent-and-resilient-urban-water-systems-agu-2026",
          title: 'Call for Abstracts: Intelligent and Resilient Urban Water Systems (AGU 2026)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/agu-urban-waters-call-for-abstracts/";
            },},{id: "projects-smart-monitoring-for-long-term-performance-of-green-stormwater-infrastructure",
          title: 'Smart Monitoring for Long-Term Performance of Green Stormwater Infrastructure',
          description: "Linking smartphone images, hydrologic screening, and maintenance decisions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_smart_monitoring/";
            },},{id: "projects-understanding-variability-in-green-stormwater-infrastructure-performance-under-real-world-conditions-in-boston",
          title: 'Understanding Variability in Green Stormwater Infrastructure Performance Under Real-World Conditions in Boston',
          description: "Examining why green stormwater systems perform differently across seasons, sites, and maintenance conditions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_real_world_performance/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%61%6E%67.%79%61%6E%67@%75%6D%62.%65%64%75", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
