import { Category } from '../../categories/entities/category.entity';
export declare class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    categoryId: number;
    category: Category;
}
