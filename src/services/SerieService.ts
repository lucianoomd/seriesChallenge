import API from './API'
import Episode from '../beans/Episode'
import Masks from '../utils/Masks'
import Serie from '../beans/Serie'

export default class SerieService extends API {
  async getSeries(serieName) {
    const endpoint = `/search/shows?q=${serieName}`
    const response = await this.doGet(endpoint)

    response.data = response.data.map((item) => {
      const show = item.show
      const serie: Serie = {
        id: show.id,
        name: show.name,
        thumbnail: show.image ? show.image.medium : show.image,
        poster: show.image ? show.image.original : show.image,
        genres: show.genres,
        summary: Masks.REMOVE_HTML_TAGS(show.summary),
        ratingAverage: show.rating.average,
        schedule: `${show.schedule.days.toString().split(',').join(', ')} at ${show.schedule.time ? show.schedule.time : 'no specific time'}`

      }
      return serie
    })

    return response
  }

  async getEpisodes(serieId) {
    const endpoint = `/shows/${serieId}/episodes`

    const response = await this.doGet(endpoint)

    response.data = response.data.map(item => {
      const episode: Episode = {
        id: item.id,
        name: item.name,
        number: item.number,
        season: item.season,
        summary: Masks.REMOVE_HTML_TAGS(item.summary),
        poster: item.image ? item.image.original : item.image,
      }
      return episode
    })

    return response
  }
  
  /*
    ============================================================
    ======================= Local data =========================
    ============================================================
  */
  async saveFavoriteSeriesLocally(series: Serie[]) {
    const result = this.localStorageSet('@FavoriteSeries', series)
    return await result
  }

  async getFavoriteSeriesLocally() {
    return await this.localStorageGet('@FavoriteSeries')
  }
}
