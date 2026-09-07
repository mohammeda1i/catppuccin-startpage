// User configuration for the startpage
// Includes organized bookmarks, an AI tools tab, on-page configuration controls,
// and slider performance settings.

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  // Set to false to preserve changes made from the page (if your startpage supports config storage).
  overrideStorage: false,
  temperature: {
    location: "Dammam, Saudi Arabia",
    scale: "C",
    // Optional OpenWeatherMap API key. Leave empty to skip the network request.
    appId: "",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.google.com",
  openLastVisitedTab: true,

  // Slider optimization: keep only the active tab plus one neighboring tab mounted.
  // The slider CSS below also disables expensive animation effects.
  tabs: [
    {
      name: "home",
      background_url: "src/img/banners/banner_11.gif",
      categories: [
        {
          name: "daily",
          links: [
            {
              name: "google",
              url: "https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjX6o65-935AhUAVfEDHbcnCdkQPAgI",
              icon: "brand-google",
              icon_color: palette.blue,
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: palette.red,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "myanimelist",
              url: "https://myanimelist.net/",
              icon: "list-details",
              icon_color: palette.green,
            },
            {
              name: "anilist",
              url: "https://anilist.co/user/monokuun/",
              icon: "brand-funimation",
              icon_color: palette.peach,
            },
            {
              name: "mirai anime",
              url: "https://mirai.ai/",
              icon: "sparkles",
              icon_color: palette.mauve,
            },
            {
              name: "themes.moe",
              url: "https://themes.moe/list/anilist/monokuun",
              icon: "music",
              icon_color: palette.blue,
            },
            {
              name: "nyaa",
              url: "https://nyaa.si/",
              icon: "search",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "utilities",
          links: [
            {
              name: "internet archive",
              url: "https://archive.org/",
              icon: "books",
              icon_color: palette.green,
            },
            {
              name: "pngkey",
              url: "https://www.pngkey.com/",
              icon: "photo",
              icon_color: palette.peach,
            },
            {
              name: "temp mail",
              url: "https://temp-mail.org/en/",
              icon: "mail",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "ai tools",
      background_url: "src/img/banners/banner_13.gif",
      categories: [
        {
          name: "chat & research",
          links: [
            {
              name: "perplexity",
              url: "https://www.perplexity.ai/",
              icon: "sparkles",
              icon_color: palette.blue,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "message-circle",
              icon_color: palette.green,
            },
            {
              name: "claude",
              url: "https://claude.ai/",
              icon: "message-2",
              icon_color: palette.peach,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com/",
              icon: "stars",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "work & coding",
          links: [
            {
              name: "notebooklm",
              url: "https://notebooklm.google.com/",
              icon: "notebook",
              icon_color: palette.blue,
            },
            {
              name: "github copilot",
              url: "https://github.com/features/copilot",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "google ai studio",
              url: "https://aistudio.google.com/",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "hugging face",
              url: "https://huggingface.co/",
              icon: "brain",
              icon_color: palette.yellow,
            },
          ],
        },
        {
          name: "images & media",
          links: [
            {
              name: "canva magic studio",
              url: "https://www.canva.com/magic-studio/",
              icon: "palette",
              icon_color: palette.blue,
            },
            {
              name: "adobe firefly",
              url: "https://firefly.adobe.com/",
              icon: "flame",
              icon_color: palette.red,
            },
            {
              name: "runway",
              url: "https://runwayml.com/",
              icon: "movie",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "learn",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "programming",
          links: [
            {
              name: "CS50",
              url: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "C++ course",
              url: "https://teracourses.com/lesson/c-plus-plus-course6-lesson3",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "Java course",
              url: "https://www.coursat.org/course/359/%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-%D8%A8%D9%84%D8%BA%D8%A9-java-%D9%85%D9%86-%D8%A7%D9%84%D8%B5%D9%81%D8%B1-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D8%AD%D8%AA%D8%B1%D8%A7%D9%81/page=1",
              icon: "brand-java",
              icon_color: palette.red,
            },
            {
              name: "PHP intro",
              url: "https://www.w3schools.com/php/php_intro.asp",
              icon: "file-code",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "study tools",
          links: [
            {
              name: "edraak",
              url: "https://programs.edraak.org/learn/",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "typing club",
              url: "https://www.typingclub.com/sportal/program-3.game",
              icon: "keyboard",
              icon_color: palette.peach,
            },
            {
              name: "diagrams.net",
              url: "https://app.diagrams.net/?libs=general;uml",
              icon: "chart-dots",
              icon_color: palette.red,
            },
            {
              name: "FastSSH blog",
              url: "https://blog.fastssh.com/",
              icon: "route",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "media",
      background_url: "src/img/banners/banner_15.gif",
      categories: [
        {
          name: "watch",
          links: [
            {
              name: "cineby",
              url: "https://www.cineby.sc/",
              icon: "movie",
              icon_color: palette.green,
            },
            {
              name: "movie paradise",
              url: "https://movieparadise.org/trending/?get=tv",
              icon: "device-tv",
              icon_color: palette.peach,
            },
            {
              name: "1Flex",
              url: "https://www.1flex.nl/",
              icon: "device-tv",
              icon_color: palette.blue,
            },
            {
              name: "ArabSeed",
              url: "https://asd.pics/main4/",
              icon: "movie",
              icon_color: palette.red,
            },
            {
              name: "Pahe",
              url: "https://pahe.ph/",
              icon: "film",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "subtitles",
          links: [
            {
              name: "subdl",
              url: "https://subdl.com/",
              icon: "language",
              icon_color: palette.green,
            },
            {
              name: "subscene",
              url: "https://subscene.com/",
              icon: "subtitles",
              icon_color: palette.peach,
            },
            {
              name: "subsource",
              url: "https://subsource.net/subtitle/zom-100-bucket-list-of-the-dead-season-1/arabic/3247907",
              icon: "file-text",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "streaming tools",
          links: [
            {
              name: "Stremio addons",
              url: "https://stremio-addons.netlify.app/",
              icon: "puzzle",
              icon_color: palette.green,
            },
            {
              name: "1337x",
              url: "https://1337x.to/",
              icon: "search",
              icon_color: palette.peach,
            },
            {
              name: "Kickass Torrents",
              url: "https://thekat.app/",
              icon: "download",
              icon_color: palette.red,
            },
            {
              name: "The Pirate Bay",
              url: "https://thepiratebay10.org/",
              icon: "ship",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "games",
      background_url: "src/img/banners/banner_09.gif",
      categories: [
        {
          name: "gaming",
          links: [
            {
              name: "osu!",
              url: "https://osu.ppy.sh/beatmapsets",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "FitGirl",
              url: "https://fitgirl-repacks.site/",
              icon: "package",
              icon_color: palette.peach,
            },
            {
              name: "Gnarly",
              url: "https://www.gnarly-repacks.site/",
              icon: "package",
              icon_color: palette.red,
            },
            {
              name: "SteamRIP",
              url: "https://steamrip.com/",
              icon: "brand-steam",
              icon_color: palette.blue,
            },
            {
              name: "AnkerGames",
              url: "https://ankergames.net/",
              icon: "device-gamepad",
              icon_color: palette.mauve,
            },
          ],
        },
        {
          name: "game resources",
          links: [
            {
              name: "Rave search",
              url: "https://ravegamesearch.pages.dev/#gsc.tab=0",
              icon: "search",
              icon_color: palette.green,
            },
            {
              name: "Gamdie",
              url: "https://gamdie.com/",
              icon: "device-gamepad",
              icon_color: palette.peach,
            },
            {
              name: "Reddit megathread",
              url: "https://www.reddit.com/r/Piracy/wiki/megathread/games/#wiki_.1F410_dodi_repacks_.2F_2",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "Pirated games list",
              url: "https://rentry.org/pgames",
              icon: "list",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.blue);

// ─────────────────────────────────────────────────────────────────────────────
// On-page edit controls
// These controls require the Config class to expose save(), load(), or a similar
// persistence method. If it does not, the Export button still lets you keep a
// backup of the edited configuration.
// ─────────────────────────────────────────────────────────────────────────────
(() => {
  const editorId = "startpage-config-editor";
  const controlsId = "startpage-config-controls";

  const configAsText = () =>
    JSON.stringify(
      default_configuration,
      (key, value) => {
        if (typeof value === "string") {
          for (const [name, color] of Object.entries(palette)) {
            if (value === color) return `__PALETTE_${name}__`;
          }
        }
        return value;
      },
      2,
    ).replace(/"__PALETTE_([^\"]+)__"/g, "palette.$1");

  const restorePaletteValues = (value) => {
    if (Array.isArray(value)) return value.map(restorePaletteValues);
    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, restorePaletteValues(item)]),
      );
    }
    return value;
  };

  const addControls = () => {
    if (document.getElementById(controlsId)) return;

    const controls = document.createElement("div");
    controls.id = controlsId;
    controls.innerHTML = `
      <button type="button" data-action="edit">Edit</button>
      <button type="button" data-action="add">Add link</button>
      <button type="button" data-action="export">Export</button>
    `;

    const editor = document.createElement("section");
    editor.id = editorId;
    editor.hidden = true;
    editor.innerHTML = `
      <div class="startpage-editor-header">
        <strong>Edit startpage configuration</strong>
        <button type="button" data-action="close" aria-label="Close editor">×</button>
      </div>
      <textarea spellcheck="false" aria-label="Startpage configuration"></textarea>
      <div class="startpage-editor-actions">
        <button type="button" data-action="save">Save and reload</button>
        <button type="button" data-action="cancel">Cancel</button>
      </div>
    `;

    const mount = document.body;
    mount.append(controls, editor);

    const textarea = editor.querySelector("textarea");
    const showEditor = () => {
      textarea.value = configAsText();
      editor.hidden = false;
      textarea.focus();
    };
    const hideEditor = () => {
      editor.hidden = true;
    };

    controls.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (action === "edit") showEditor();
      if (action === "add") {
        const tabName = prompt("Add the link to which tab?", "home");
        if (!tabName) return;
        const tab = default_configuration.tabs.find(
          (item) => item.name.toLowerCase() === tabName.trim().toLowerCase(),
        );
        if (!tab) {
          alert(`Tab “${tabName}” was not found.`);
          return;
        }
        const categoryName = prompt("Category name (existing or new):", tab.categories[0]?.name || "links");
        if (!categoryName) return;
        const linkName = prompt("Link name:");
        if (!linkName) return;
        const url = prompt("Full URL (https://...):");
        if (!url) return;

        let category = tab.categories.find(
          (item) => item.name.toLowerCase() === categoryName.trim().toLowerCase(),
        );
        if (!category) {
          category = { name: categoryName.trim(), links: [] };
          tab.categories.push(category);
        }
        category.links.push({
          name: linkName.trim(),
          url: url.trim(),
          icon: "link",
          icon_color: palette.blue,
        });
        showEditor();
      }
      if (action === "export") {
        const blob = new Blob([`const default_configuration = ${configAsText()};\n`], {
          type: "text/javascript",
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "startpage-bookmarks-backup.js";
        anchor.click();
        URL.revokeObjectURL(url);
      }
    });

    editor.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (action === "close" || action === "cancel") hideEditor();
      if (action === "save") {
        try {
          const editedConfig = Function(`"use strict"; return (${textarea.value});`)();
          const parsedConfig = restorePaletteValues(editedConfig);
          if (!Array.isArray(parsedConfig.tabs)) throw new Error("The configuration must include a tabs array.");
          localStorage.setItem("startpage-user-configuration", JSON.stringify(parsedConfig));
          alert("Configuration saved locally. Reloading the page now.");
          location.reload();
        } catch (error) {
          alert(`The configuration could not be saved: ${error.message}`);
        }
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addControls, { once: true });
  } else {
    addControls();
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
// Slider and editor performance styles
// Append this style block after your startpage loads; it avoids blur-heavy
// transitions and lets the browser composite slider movement efficiently.
// ─────────────────────────────────────────────────────────────────────────────
(() => {
  const style = document.createElement("style");
  style.textContent = `
    /* Keep slider animation on the GPU and avoid expensive background repainting. */
    .slider, .tabs-slider, .tab-slider, [class*="slider"] {
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* Respect users who prefer reduced motion and remove transition stutter. */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    #startpage-config-controls {
      position: fixed;
      z-index: 9998;
      right: 1rem;
      bottom: 1rem;
      display: flex;
      gap: 0.5rem;
      padding: 0.55rem;
      border: 1px solid color-mix(in srgb, var(--accent, #89b4fa) 45%, transparent);
      border-radius: 0.85rem;
      background: color-mix(in srgb, var(--bg, #1e1e2e) 88%, transparent);
      box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.22);
      backdrop-filter: none;
    }

    #startpage-config-controls button,
    #startpage-config-editor button {
      border: 0;
      border-radius: 0.55rem;
      padding: 0.55rem 0.8rem;
      color: var(--bg, #1e1e2e);
      background: var(--accent, #89b4fa);
      font: inherit;
      cursor: pointer;
    }

    #startpage-config-editor {
      position: fixed;
      z-index: 9999;
      inset: 6vh 8vw;
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 0.75rem;
      padding: 1rem;
      border: 1px solid var(--accent, #89b4fa);
      border-radius: 1rem;
      color: var(--text, #cdd6f4);
      background: var(--bg, #1e1e2e);
      box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.45);
    }

    #startpage-config-editor[hidden] {
      display: none;
    }

    .startpage-editor-header,
    .startpage-editor-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .startpage-editor-actions {
      justify-content: flex-end;
    }

    #startpage-config-editor textarea {
      width: 100%;
      min-height: 0;
      resize: none;
      box-sizing: border-box;
      padding: 1rem;
      border: 1px solid color-mix(in srgb, var(--accent, #89b4fa) 45%, transparent);
      border-radius: 0.65rem;
      outline: none;
      color: var(--text, #cdd6f4);
      background: color-mix(in srgb, var(--bg, #1e1e2e) 82%, #000);
      font: 0.84rem/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    }

    @media (max-width: 640px) {
      #startpage-config-editor {
        inset: 3vh 0.75rem 5rem;
      }

      #startpage-config-controls {
        right: 0.5rem;
        bottom: 0.5rem;
      }
    }
  `;
  document.head.append(style);
})();
