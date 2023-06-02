import localforage from 'localforage'

const BOOKSHELF_KEY = 'bookshelf'

async function addToBookshelf(title: string) {
  try {
    const list =
      (await localforage.getItem<Set<string>>(BOOKSHELF_KEY)) ||
      new Set<string>([])
    if (list.has(title)) {
      console.info(`Book ${title} already in list`)
      return
    }
    await localforage.setItem(BOOKSHELF_KEY, list.add(title))
    // Delay execution
    await new Promise(r => setTimeout(r, 1000))
    console.info(`Successfully added ${title} to your bookshelf`)
  } catch (error) {
    console.error(error)
  }
}

export {addToBookshelf}
