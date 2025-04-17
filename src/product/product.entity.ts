class ProductFeature {
    name: string;
    description: string;
}

class ProductImage {
    url: string;
    description: string;
}

export class ProductEntity {
    id: string;
    userId: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    features: ProductFeature[];
    images: ProductImage[];
}