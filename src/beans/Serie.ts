import Episode from './Episode'

export default class Serie {
  id?: number
  name?: string
  thumbnail?: string
  poster?: string
  schedule?: string
  genres?: string[]
  summary?: string
  episodes?: Episode[]
  ratingAverage?: number

  constructor() {
    this.id = 0
    this.name = ''
    this.thumbnail = ''
    this.poster = ''
    this.schedule = ''
    this.genres = []
    this.summary = ''
    this.episodes = []
    this.ratingAverage = 0
  }
}