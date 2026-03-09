// ============================================================
//  NETINIMA — SHOW REGISTRY
//  ============================================================
//  This is the ONLY file you need to edit to add or remove
//  shows from the homepage. The hub reads this automatically.
//
//  TO ADD A SHOW: Copy one of the objects below and fill it in.
//  TO REMOVE A SHOW: Delete its object from the array.
//  TO FEATURE A SHOW ON THE HERO: Set  featured: true
//    (only the first show with featured:true becomes the hero)
//
//  FIELDS:
//    id          unique slug, matches your filename (no .html)
//    file        path to the show page from the root
//    title       full show title
//    year        release year
//    type        "Series" | "Film" | "Short"
//    seasons     e.g. "2 Seasons" | "Film" | "Short"
//    episodes    e.g. "12 Episodes" | "1 Film" | "4:22"
//    runtime     e.g. "22 min avg" | "4:22"
//    views       e.g. "12 views" | "1.5M views"
//    stars       star string e.g. "★★★★★"
//    rating      numeric string e.g. "9.4"
//    badge       "NEW" | "HOT" | ""   (empty = no badge)
//    genres      array of genre strings
//    thumbYt     YouTube video ID — used as the card thumbnail
//    heroDesc    1-2 sentence hook shown on the hero banner
//    featured    true | false — first true entry becomes the hero
// ============================================================

const SHOW_REGISTRY = [

  {
    id:       'dragon-egg',
    file:     'shows/dragon-egg.html',
    title:    'The Search for the Dragon Egg',
    year:     '2026',
    type:     'Film',
    seasons:  'Film',
    episodes: '4:22',
    runtime:  '4:22',
    views:    '12 views',
    stars:    '★★★★★',
    rating:   '9.0',
    badge:    'NEW',
    genres:   ['Action', 'Adventure', 'Comedy'],
    thumbYt:  'OG1c3D0N2WY',
    heroDesc: 'DuckLeader_ goes on an adventure to look for a dragon egg — cuz y not.',
    featured: true,
  },

  // ── ADD YOUR NEXT SHOW BELOW THIS LINE ──
  // {
  //   id:       'your-show-id',
  //   file:     'shows/your-show.html',
  //   title:    'Your Show Title',
  //   year:     '2026',
  //   type:     'Series',
  //   seasons:  '1 Season',
  //   episodes: '6 Episodes',
  //   runtime:  '15 min avg',
  //   views:    '0 views',
  //   stars:    '★★★★★',
  //   rating:   '9.0',
  //   badge:    'NEW',
  //   genres:   ['Adventure', 'Drama'],
  //   thumbYt:  'YOUR_YOUTUBE_ID',
  //   heroDesc: 'A short punchy description that makes people want to watch.',
  //   featured: false,
  // },

];
