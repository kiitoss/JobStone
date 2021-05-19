class User {
  constructor(id, pseudo, mail, color, money, postal_code, city, password, isAdmin=0) {
    this.id = id;
    this.pseudo = pseudo.slice(0, 32);
    this.mail = mail.slice(0, 32);
    this.color = color;
    this.money = money;
    this.postalCode = postal_code;
    this.city = city;
    this.isAdmin = isAdmin;
    this.password = password;
  }
}