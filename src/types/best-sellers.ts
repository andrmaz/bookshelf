export interface BestSellersData {
  status: string
  copyright: string
  num_results: number
  results: Result[]
}

export interface Result {
  title: string
  description: string
  contributor: string
  author: string
  contributor_note: string
  price: number
  age_group: string
  publisher: string
  isbns: Isbn[]
  ranks_history: RanksHistory[]
  reviews: Review[]
}

export interface Isbn {
  isbn10: string
  isbn13: string
}

export interface RanksHistory {
  primary_isbn10: string
  primary_isbn13: string
  rank: number
  list_name: string
  display_name: string
  published_date: Date
  bestsellers_date: Date
  weeks_on_list: number
  ranks_last_week: null
  asterisk: number
  dagger: number
}

export interface Review {
  book_review_link: string
  first_chapter_link: string
  sunday_review_link: string
  article_chapter_link: string
}
