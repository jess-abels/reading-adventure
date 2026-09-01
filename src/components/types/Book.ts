export interface Page {
  pageNumber: number;
  text: string;
}

export interface Book {
  id: number;
  title:string;
  author: string;
  description: string;
  status: string;
  cover: string;
  pages: Page[];
  currentPage: number | null;
}
