function decodeListName(encoded?: string) {
  return encoded ? encoded.replaceAll('-', ' ') : ''
}

export {decodeListName}
