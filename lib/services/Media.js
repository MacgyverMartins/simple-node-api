import { v4 as uuidv4 } from 'uuid';

const _memoryMedias = []
const _getMedia = (id) => _memoryMedias.find((media) => media.id === id) || null

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
    return _getMedia(id)
  }

  static create(doc) {
    return createMedia(doc)
  }

  static update(id, doc) {
    console.log(_memoryMedias)
    const index = _memoryMedias.findIndex(({ id: mediaId }) => mediaId === id)
    if (index < 0) {
      throw new Error('ID not found')
    }

    const item = _memoryMedias[index]
    return _memoryMedias[index] = { ...item, ...doc }
  }
}