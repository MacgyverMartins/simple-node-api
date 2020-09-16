import DomainError from '../utils/DomainError'
const _memoryMedias = []

const _findMediaById = (id) => _memoryMedias.find((media) => media.id === id) || null

const _findIndexById = (id) => _memoryMedias.findIndex(({ id: mediaId }) => mediaId === id)

const _serializeMedia = (media) => {
  const { expires_at } = media
  const doc = { ...media }
  doc.expired = expires_at < new Date().getTime()
  return doc
}

const _createMedia = (doc) => {
  _memoryMedias.push(doc)
  return doc
}

const _verifyId = (id) => {
  if (_findMediaById(id)) {
    throw new DomainError(`ID ${id} already exists`)
  }
}

export default class Media {
  static all() {
    return _memoryMedias
  }

  static findById(id) {
    const media = _findMediaById(id)
    if (!media) return media
    media.watched = true
    return _serializeMedia(media)
  }

  static create(doc) {
    _verifyId(doc.id)
    return _createMedia(doc)
  }

  static update(id, doc) {
    const index = _findIndexById(id)
    if (index < 0) {
      throw new DomainError(`ID ${id} not found`)
    }
    _verifyId(doc.id)
    const item = _memoryMedias[index]
    return _memoryMedias[index] = {
      ...item,
      ...doc,
      watched: false
    }
  }
}