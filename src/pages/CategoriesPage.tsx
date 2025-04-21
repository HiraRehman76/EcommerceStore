import React from 'react';
import styled from 'styled-components';
import { Card, Button, message } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/store';

const PageContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProductCard = styled(Card)`
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .ant-card-cover {
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  originalPrice?: number;
  category: string;
}

const CategoriesPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state: RootState) => state.search.query);

  // Sample products data for each category
  const products: Record<string, Product[]> = {
    'new-arrivals': [
      {
        id: 1,
        name: 'Wireless Earbuds Pro',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Latest wireless earbuds with noise cancellation',
        category: 'new-arrivals'
      },
      {
        id: 2,
        name: 'Smart Home Hub',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1558002038-1055eec2f2e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Control your smart home devices',
        category: 'new-arrivals'
      }
    ],
    'men': [
      {
        id: 3,
        name: 'Men\'s Casual Shirt',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Comfortable cotton shirt',
        category: 'men'
      },
      {
        id: 4,
        name: 'Men\'s Sneakers',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Stylish and comfortable',
        category: 'men'
      }
    ],
    'women': [
      {
        id: 5,
        name: 'Women\'s Dress',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Elegant summer dress',
        category: 'women'
      },
      {
        id: 6,
        name: 'Women\'s Handbag',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Designer handbag',
        category: 'women'
      }
    ],
    'electronics': [
      {
        id: 7,
        name: '4K Smart TV',
        price: 599.99,
        image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: '55-inch 4K Smart TV',
        category: 'electronics'
      },
      {
        id: 8,
        name: 'Gaming Laptop',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'High-performance gaming laptop',
        category: 'electronics'
      }
    ],
    'home-living': [
      {
        id: 9,
        name: 'Modern Sofa',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Comfortable 3-seater sofa',
        category: 'home-living'
      },
      {
        id: 10,
        name: 'Coffee Table',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1532372320572-c5c39fbc2a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Modern glass coffee table',
        category: 'home-living'
      }
    ],
    'sale': [
      {
        id: 11,
        name: 'Wireless Headphones',
        price: 99.99,
        originalPrice: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Premium wireless headphones',
        category: 'sale'
      },
      {
        id: 12,
        name: 'Smart Watch',
        price: 149.99,
        originalPrice: 249.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Latest smart watch',
        category: 'sale'
      }
    ]
  };

  const filteredProducts = products[category as keyof typeof products]?.filter(product => 
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (category === 'all' || product.category === category)
  ) || [];

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
    message.success(`${product.name} added to cart`);
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <PageContainer>
      <h1>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products'}</h1>
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            hoverable
            cover={<img alt={product.name} src={product.image} />}
            onClick={() => handleProductClick(product.id)}
          >
            <Card.Meta
              title={product.name}
              description={
                <>
                  <div>
                    {product.originalPrice ? (
                      <>
                        <span style={{ color: 'red', marginRight: '8px' }}>
                          ${product.price.toFixed(2)}
                        </span>
                        <span style={{ textDecoration: 'line-through', color: '#999' }}>
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span>${product.price.toFixed(2)}</span>
                    )}
                  </div>
                  <div>{product.description}</div>
                </>
              }
            />
            <Button 
              type="primary" 
              icon={<ShoppingCartOutlined />}
              onClick={(e) => handleAddToCart(e, product)}
              style={{ marginTop: '1rem', width: '100%' }}
            >
              Add to Cart
            </Button>
          </ProductCard>
        ))}
      </ProductGrid>
    </PageContainer>
  );
};

export default CategoriesPage; 