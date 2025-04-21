import React from 'react';
import styled from 'styled-components';
import { Table, Button, InputNumber, Empty, message } from 'antd';
import { DeleteOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart, clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 2rem 0;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
  }
`;

const CartActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: flex-end;
`;

const TotalSection = styled.div`
  text-align: right;
  margin-top: 2rem;
  font-size: 1.2rem;
  
  .total-amount {
    font-weight: bold;
    color: #1890ff;
  }
`;

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (quantity: number, record: any) => (
        <InputNumber
          min={1}
          max={10}
          value={quantity}
          onChange={(value) => {
            if (value) {
              // Handle quantity change
              dispatch({
                type: 'cart/updateQuantity',
                payload: {
                  id: record.id,
                  quantity: value
                }
              });
            }
          }}
        />
      ),
    },
    {
      title: 'Total',
      key: 'total',
      render: (record: any) => `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: any) => (
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => {
            dispatch(removeFromCart(record.id));
            message.success('Item removed from cart');
          }}
        />
      ),
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      message.warning('Your cart is empty');
      return;
    }
    message.success('Proceeding to checkout');
    // Add checkout logic here
  };

  return (
    <CartContainer>
      <CartHeader>
        <h1>Your Cart</h1>
        {cartItems.length > 0 && (
          <Button danger onClick={() => {
            dispatch(clearCart());
            message.success('Cart cleared');
          }}>
            Clear Cart
          </Button>
        )}
      </CartHeader>
      
      {cartItems.length > 0 ? (
        <>
          <Table
            columns={columns}
            dataSource={cartItems}
            pagination={false}
            rowKey="id"
          />
          <TotalSection>
            <div>Total: <span className="total-amount">${total.toFixed(2)}</span></div>
          </TotalSection>
          <CartActions>
            <Button 
              icon={<ShoppingOutlined />}
              onClick={() => navigate('/')}
            >
              Continue Shopping
            </Button>
            <Button 
              type="primary"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </CartActions>
        </>
      ) : (
        <Empty
          description="Your cart is empty"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        >
          <Button 
            type="primary"
            onClick={() => navigate('/')}
          >
            Start Shopping
          </Button>
        </Empty>
      )}
    </CartContainer>
  );
};

export default CartPage;