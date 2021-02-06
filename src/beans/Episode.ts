export default class Episode {
  id?: number
  name?: string
  season?: number
  number?: number
  summary?: string
  poster?: string

  constructor() {
    this.id = 0
    this.name = ''
    this.season = 0
    this.number = 0
    this.summary = ''
    this.poster = ''
  }
}