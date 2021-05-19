class Post {
  constructor(id, idOwner, idCategory, datePublication, title, startDate, endDate, postalCode, city, description, price) {
    this.id = id;
    this.idOwner = idOwner;
    this.idCategory = idCategory;
    this.datePublication = datePublication;
    this.title = title.slice(0, 100);
    this.startDate = startDate;
    this.endDate = endDate;
    this.postalCode = postalCode;
    this.city = city.slice(0, 49);
    this.description = description.slice(0, 500);
    this.price = price;
  }
}