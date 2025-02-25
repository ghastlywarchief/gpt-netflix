export const BODY_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg";

export const LOGO_URL = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
    }
}   

export const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const IFRAME_EMBED_URL_PREFIX = "https://www.youtube.com/embed/"

export const IFRAME_EMBED_URL_SUFFIX = "?loop=1&autoplay=1&mute=1&si=r-YviPJmryct7LO5"

export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular"

export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated"

export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming"

export const TRAILER_PREFIX = "https://api.themoviedb.org/3/movie/"

export const TRAILER_SUFFIX = "/videos?language=en-US"

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY

export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_KEY