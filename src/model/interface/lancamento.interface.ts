export interface Lancamento {
    flight_number: number;
    mission_name: string;
    mission_id?: Array<any>;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    is_tentative: boolean;
    tentative_max_precision: string;
    rocket: Rocket;
    ships: Array<string>;
    telemetry: Telemetry;
    launch_site: Launch_site;
    launch_success: boolean;
    links: Links;
    details: string;
    upcoming: boolean;
    static_fire_date_utc: Date;
    static_fire_date_unix: number;
};

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: First_stage;
    second_stage: Second_stage;
    fairings: Fairings;
};

export interface Telemetry {
    flight_club: string;
};

export interface Launch_site {
    site_id: string;
    site_name: Date;
    site_name_long: Date;
};

export interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string;
    reddit_recovery?: any;
    reddit_media: string;
    presskit: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
    flickr_images: Array<string>;
};

export interface First_stage {
    cores: Array<Cores>;
};

export interface Second_stage {
    block: number;
    payloads: Array<Payloads>;
};

export interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship?: any;
};

export interface Cores {
    core_serial: string;
    flight: number;
    block: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: string;
    landing_vehicle: string;
};

export interface Payloads {
    payload_id: string;
    norad_id: Array<number>;
    reused: boolean;
    customers: Array<string>;
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: Orbit_params;
};

export interface Orbit_params {
    reference_system: string;
    regime: string;
    longitude?: any;
    semi_major_axis_km: number;
    eccentricity: number;
    periapsis_km: number;
    apoapsis_km: number;
    inclination_deg: number;
    period_min: number;
    lifespan_years: number;
    epoch: Date;
    mean_motion: number;
    raan: number;
    arg_of_pericenter: number;
    mean_anomaly: number;
};

