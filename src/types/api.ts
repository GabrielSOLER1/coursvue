export type HydraContext<T> = T & {
  '@id': string;
  '@context': string;
  '@type': string;
}
