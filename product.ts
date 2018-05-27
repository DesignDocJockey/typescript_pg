export class Product 
{
    private name: string;
    private price: number;
    private isbn: string

    constructor(name: string, price: number, isbn:string) {
        this.name = name;
        this.price = price;
        this.isbn = isbn;
    }

    getName(): string { return this.name; }

    getPrice(): number { return this.price; }

    getDiscountedPrice(discount: number): number {
            return this.price - (this.price * discount / 100);
    }

    getISBN():string { return this.isbn;}
}