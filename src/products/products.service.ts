import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products =[
        {id: 1, name: 'laptop', price: 2500},
        {id: 2, name: 'souris', price: 40},
    ]

    findAll() {return this.products; }

    findOne(id: number) {
        const p = this.products.find(x => x.id === id);
        return p;
    }
        
};
