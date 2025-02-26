interface Movie {
    adult: boolean;
    backdrop_path: string | null; // Can be null
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string | null; // Can be null
    popularity: number;
    poster_path: string | null; // Can be null
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface TVShow {
    backdrop_path: string | null; // Can be null if there's no backdrop
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster_path: string | null; // Can be null if there's no poster
    media_type: "tv";
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    first_air_date: string;
    vote_average: number;
    vote_count: number;
    origin_country: string[];
}

interface TVShowResponse {
    page: number;
    results: TVShow[];
    total_pages: number;
    total_results: number;
}

interface Genre {
    id: number;
    name: string;
}

interface Network {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

interface TVShowDetails {
    adult: boolean;
    backdrop_path: string | null;
    created_by: CreatedBy[]; // Or specify a more precise type if needed
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: SeasonEpisode;
    name: string;
    next_episode_to_air: SeasonEpisode;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

interface CastMember {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    cast_id?: number; // Optional for cast members
    character?: string; // Optional for cast members
    credit_id: string;
    order?: number; // Optional for cast members
}

interface CrewMember {
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}

interface Credits {
    cast: CastMember[];
    crew: CrewMember[];
    id: number;
}
interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    original_name: string;
    gender: number | null;
    profile_path: string | null;
}
interface CrewMember {
    department: string;
    job: string;
    credit_id: string;
    adult: boolean;
    gender: number | null;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

interface GuestStar {
    character: string;
    credit_id: string;
    order: number;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
}

interface EpisodeDetails {
    air_date: string;
    episode_number: number;
    episode_type: string;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
    vote_average: number;
    vote_count: number;
    crew: CrewMember[];
    guest_stars: GuestStar[];
}

interface SeasonEpisode {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    episode_type: string;
    production_code: string;
    runtime: number | null;
    season_number: number;
    show_id: number;
    still_path: string | null;
}

interface Season {
    _id: string;
    air_date: string;
    episodes: EpisodeDetails[];
    name: string;
    overview: string;
    id: number;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
}

export type {
    CreatedBy,
    TVShowResponse,
    TVShow,
    Movie,
    Genre,
    Network,
    ProductionCompany,
    ProductionCountry,
    Season,
    SeasonEpisode,
    SpokenLanguage,
    EpisodeDetails,
    TVShowDetails,
    CastMember, CrewMember, Credits
};

