const _memoryMedias = []
// { name, duration, provider, media_type, provider_id, expires_at }
const createMedia = (doc) => {
  doc.id = uuidv4()
  _memoryMedias.push(doc)
  return doc
}

export default class Media {
  static all() {
    return _memoryMedias
  }

  static findById() {
    return _memoryMedias.find((media) => media.id === id) || null
  }

  static create() {
    return createMedia(req.body)
  }
}