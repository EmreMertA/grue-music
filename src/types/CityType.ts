export interface cityType {
  code: string;
  list_id: string;
  momentum_list_id?: string;
  name: string;
  cities: City[] | undefined;
  genres?: Genre[];
}

export interface City {
  id: string;
  name: string;
  country_code: string;
  list_id: string;
}

export interface Genre {
  id: string;
  country_code: string;
  list_id: string;
  name: string;
  slug: string;
  count: number;
}
