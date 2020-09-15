import { v4 as uuidv4 } from 'uuid';

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

  static findById(id) {
    return _memoryMedias.find((media) => media.id === id) || null
  }

  static create(doc) {
    return createMedia(doc)
  }
}