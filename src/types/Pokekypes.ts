export interface BasicPokeResponse {
  count: number;
  next: string;
  previous: string;
  results: BasicPokeInfo[];
}

export interface BasicPokeInfo {
  name: string;
  url: string;
}

export interface PokeItemProps {
  poke: BasicPokeInfo;
}

export interface PokeInfo {
  abilities: {
    ability: { name: string; url: string };
    is_hidden: boolean;
    slot: number;
  }[];
  base_experience: number;
  forms: { name: string; url: string }[];
  game_indices: {
    game_index: number;
    version: { name: string; url: string };
  }[];
  height: number;
  held_items: { name: string }[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {
    move: { name: string; url: string };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: { name: string; url: string };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  name: string;
  order: number;
  past_types: { name: string }[];
  species: { name: string; url: string };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      home: {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      'generation-ii': {
        cristal: {
          back_default: string;
          front_default: string;
          back_shiny: string;
          front_shiny: string;
          front_shiny_transparent: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          front_default: string;
          back_shiny: string;
          front_shiny: string;
          front_shiny_transparent: string;
        };
        silver: {
          back_default: string;
          front_default: string;
          back_shiny: string;
          front_shiny: string;
          front_shiny_transparent: string;
        };
      };
      'generation-vii': {
        icons: {
          front_default: string;
          front_female: string;
        };
      };
    };
  };
  stats: {
    stat: { name: string; url: string };
    base_stat: number;
    effort: number;
  }[];
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  weight: number;
}

export interface PokeType {}
