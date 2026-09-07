// User configuration for the startpage
// Bookmarks imported from your collection and grouped into clean, practical tabs.

// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
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
