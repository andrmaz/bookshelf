export interface BookListData {
  status: string
  copyright: string
  num_results: number
  last_modified: Date
  results: Results
}

export interface Results {
  list_name: string
  list_name_encoded: ListNameEncoded
  bestsellers_date: Date
  published_date: Date
  published_date_description: string
  next_published_date: string
  previous_published_date: Date
  display_name: string
  normal_list_ends_at: number
  updated: Updated
  books: Book[]
  corrections: unknown[]
}

export interface Book {
  rank: number
  rank_last_week: number
  weeks_on_list: number
  asterisk: number
  dagger: number
  primary_isbn10: string
  primary_isbn13: string
  publisher: string
  description: string
  price: string
  title: string
  author: string
  contributor: string
  contributor_note: string
  book_image: string
  book_image_width: number
  book_image_height: number
  amazon_product_url: string
  age_group: string
  book_review_link: string
  first_chapter_link: string
  sunday_review_link: string
  article_chapter_link: string
  isbns: Isbn[]
  buy_links: BuyLink[]
  book_uri: string
}

export interface BuyLink {
  name: Name
  url: string
}

export type Name =
  | 'Amazon'
  | 'Apple Books'
  | 'Barnes and Noble'
  | 'Books-A-Million'
  | 'Bookshop'
  | 'IndieBound'

export interface Isbn {
  isbn10: string
  isbn13: string
}

export type ListNameEncoded =
  | 'combined-print-and-e-book-fiction'
  | 'combined-print-and-e-book-nonfiction'
  | 'hardcover-fiction'
  | 'hardcover-nonfiction'
  | 'trade-fiction-paperback'
  | 'paperback-nonfiction'
  | 'advice-how-to-and-miscellaneous'
  | 'childrens-middle-grade-hardcover'
  | 'picture-books'
  | 'series-books'
  | 'young-adult-hardcover'
  | 'audio-fiction'
  | 'audio-nonfiction'
  | 'business-books'
  | 'graphic-books-and-manga'
  | 'mass-market-monthly'
  | 'middle-grade-paperback-monthly'
  | 'young-adult-paperback-monthly'

export type Updated = 'WEEKLY' | 'MONTHLY'
