class BookModel {
  public id: number;
  public title: string;
  public author?: string;
  public description?: string;
  public copies?: Number;
  public copiesAvailable?: Number;
  public category?: string;
  public img?: string;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    copies: number,
    copiesAvailable: Number,
    category: string,
    img: string
  ) {
    this.id=id;
    this.title=title;
    this.author=author;
    this.description=description;
    this.copies=copies;
    this.copiesAvailable=copiesAvailable;
    this.category=category;
    this.img=img;
  }
}

export default BookModel;
