export type HydraContext<T> = T & {
  '@id': string
  '@context': string
  '@type': string
}

export interface Collection<T> {
  totalItems: number
  search: object
  view: object
  member: HydraContext<T>[]
}

export const defaultCollection = <T>(): Collection<T> => ({
  totalItems: 0,
  search: {},
  view: {},
  member: [],
})
