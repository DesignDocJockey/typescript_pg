const ProductModule = require('../product');

describe('product unit test', () => 
{
    let product;

    beforeEach( ()=> {
        product = new ProductModule.Product('football', 70);
    });

    it('returns the product name', () => {
        expect(product.getName()).toBe('football');
    });

    it('returns the price', () => {
        expect(product.getPrice()).toBe(70);
    });

    it('returns the a discounted price', () => {
        expect(product.getDiscountedPrice(50)).toBe(35);
    });
});