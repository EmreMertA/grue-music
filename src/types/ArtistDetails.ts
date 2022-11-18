export interface ArtistDetails {
  albums: { [key: string]: Album };
  artists: Artists | any;
  songs: { [key: string]: Song } | any;
}

export interface Album {
  attributes?: AlbumAttributes;
  href: string;
  id: string;
  type: Type;
}

export interface AlbumAttributes {
  albumName?: string;
  artistName: Name;
  artwork: Artwork;
  audioLocale?: AudioLocale;
  audioTraits: AudioTrait[];
  composerName?: ComposerName;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: RecordLabel;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

export enum Name {
  TheBeatles = 'The Beatles',
}

export interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

export enum AudioLocale {
  EnUS = 'en-US',
}

export enum AudioTrait {
  Atmos = 'atmos',
  HiResLossless = 'hi-res-lossless',
  Lossless = 'lossless',
  LossyStereo = 'lossy-stereo',
  Spatial = 'spatial',
}

export enum ComposerName {
  BertRussellPhilMedley = 'Bert Russell & Phil Medley',
  GeorgeHarrison = 'George Harrison',
  JohnLennonPaulMcCartney = 'John Lennon & Paul McCartney',
  PaulMcCartneyJohnLennon = 'Paul McCartney & John Lennon',
}

export interface PurpleEditorialNotes {
  short: string;
  standard?: string;
}

export interface PlayParams {
  id: string;
  kind: Kind;
}

export enum Kind {
  Album = 'album',
  Song = 'song',
}

export interface Preview {
  url: string;
}

export enum RecordLabel {
  UMCUniversalMusicCatalogue = 'UMC (Universal Music Catalogue)',
}

export enum Type {
  Albums = 'albums',
  Songs = 'songs',
}

export interface Artists {
  '136975': The136975;
}

export interface The136975 {
  attributes: The136975_Attributes;
  href: string;
  id: string;
  meta: The136975_Meta;
  relationships: Relationships;
  type: string;
  views: The136975_Views;
}

export interface The136975_Attributes {
  artwork: Artwork;
  genreNames: GenreName[];
  name: Name;
  url: string;
}

export enum GenreName {
  Music = 'Music',
  Pop = 'Pop',
  Rock = 'Rock',
}

export interface The136975_Meta {
  views: MetaViews;
}

export interface MetaViews {
  order: string[];
}

export interface Relationships {
  albums: Albums | undefined;
}

export interface Albums {
  attributes?: AlbumsAttributes;
  data: AlbumsDatum[];
  href: string;
  next: string;
}

export interface AlbumsAttributes {
  title: string;
}

export interface AlbumsDatum {
  href: string;
  id: string;
  type: Type;
}

export interface The136975_Views {
  'latest-release': LatestRelease;
  'top-songs': Albums;
}

export interface LatestRelease {
  attributes: AlbumsAttributes;
  data: LatestReleaseDatum[];
  href: string;
}

export interface LatestReleaseDatum {
  attributes?: DatumAttributes;
  href: string;
  id: string;
  type: Type;
}

export interface DatumAttributes {
  artistName: Name;
  artwork: Artwork;
  audioTraits: AudioTrait[];
  copyright: string;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  isCompilation: boolean;
  isComplete: boolean;
  isMasteredForItunes: boolean;
  isPrerelease: boolean;
  isSingle: boolean;
  name: string;
  playParams: PlayParams;
  recordLabel: RecordLabel;
  releaseDate: Date;
  trackCount: number;
  upc: string;
  url: string;
}

export interface Song {
  attributes?: SongAttributes;
  href: string;
  id: string;
  meta?: SongMeta;
  type: Type;
}

export interface SongAttributes {
  albumName?: string;
  artistName: Name;
  artwork: Artwork;
  audioLocale?: AudioLocale;
  audioTraits: AudioTrait[];
  composerName?: ComposerName;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: FluffyEditorialNotes;
  genreNames: GenreName[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: RecordLabel;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

export interface FluffyEditorialNotes {
  short: string;
}

export interface SongMeta {
  formerIds: string[];
}
