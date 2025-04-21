import React from 'react';
import styled from 'styled-components';
import { Card, Avatar, Button, Tabs, List, Tag } from 'antd';
import { UserOutlined, ShoppingOutlined, HeartOutlined, SettingOutlined } from '@ant-design/icons';

const AccountContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const UserInfo = styled.div`
  h2 {
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    margin-bottom: 1rem;
  }
`;

const StyledCard = styled(Card)`
  margin-bottom: 1rem;
  
  .ant-card-head {
    background: #f8f9fa;
  }
`;

const OrderItem = styled(List.Item)`
  .ant-list-item-meta-title {
    margin-bottom: 0.5rem;
  }
  
  .ant-list-item-meta-description {
    color: #666;
  }
`;

const AccountPage: React.FC = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  };

  // Sample orders data
  const orders = [
    {
      id: 1,
      date: '2024-01-15',
      status: 'Delivered',
      total: 199.99,
      items: ['Wireless Headphones']
    },
    {
      id: 2,
      date: '2024-01-10',
      status: 'Processing',
      total: 249.99,
      items: ['Smart Watch']
    }
  ];

  // Sample wishlist data
  const wishlist = [
    {
      id: 1,
      name: 'Camera Lens',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const items = [
    {
      key: '1',
      label: 'Orders',
      icon: <ShoppingOutlined />,
      children: (
        <List
          itemLayout="horizontal"
          dataSource={orders}
          renderItem={order => (
            <OrderItem
              actions={[
                <Button type="link">View Details</Button>,
                <Button type="link">Track Order</Button>
              ]}
            >
              <List.Item.Meta
                title={`Order #${order.id}`}
                description={
                  <>
                    <div>Date: {order.date}</div>
                    <div>Items: {order.items.join(', ')}</div>
                    <Tag color={order.status === 'Delivered' ? 'green' : 'blue'}>
                      {order.status}
                    </Tag>
                  </>
                }
              />
              <div>${order.total.toFixed(2)}</div>
            </OrderItem>
          )}
        />
      )
    },
    {
      key: '2',
      label: 'Wishlist',
      icon: <HeartOutlined />,
      children: (
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={wishlist}
          renderItem={item => (
            <List.Item>
              <Card
                hoverable
                cover={<img alt={item.name} src={item.image} />}
              >
                <Card.Meta
                  title={item.name}
                  description={`$${item.price.toFixed(2)}`}
                />
                <Button type="primary" style={{ marginTop: '1rem', width: '100%' }}>
                  Add to Cart
                </Button>
              </Card>
            </List.Item>
          )}
        />
      )
    },
    {
      key: '3',
      label: 'Settings',
      icon: <SettingOutlined />,
      children: (
        <StyledCard title="Account Settings">
          <Button type="primary" style={{ marginRight: '1rem' }}>
            Change Password
          </Button>
          <Button>
            Edit Profile
          </Button>
        </StyledCard>
      )
    }
  ];

  return (
    <AccountContainer>
      <ProfileSection>
        <Avatar size={100} src={user.avatar} icon={<UserOutlined />} />
        <UserInfo>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>Member since {user.joinDate}</p>
          <Button type="primary">Edit Profile</Button>
        </UserInfo>
      </ProfileSection>

      <Tabs
        defaultActiveKey="1"
        items={items}
        size="large"
      />
    </AccountContainer>
  );
};

export default AccountPage; 