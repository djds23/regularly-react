import BaseModel from './BaseModel.js'

class AlbumDueDate extends BaseModel {
  constructor ({
    id,
    dueDate,
    user,
    album,
    artist,
    embeds
  }) {
    super()
    this.id = id
    this.dueDate = dueDate
    this.user = user
    this.album = album
    this.artist = artist
    this.embeds = embeds
  }
}

export default AlbumDueDate
