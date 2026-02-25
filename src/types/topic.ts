export interface Topic {
  id: number
  title: string
  description: string
}

export const defaultTopic = () => ({
  id: 0,
  title: '',
  description: '',
  '@id': '',
  '@context': '',
  '@type': '',
})
