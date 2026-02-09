export interface User {
  id: string;
  email: string;
  name?: string;
  role: 'USER' | 'VENDOR' | 'ADMIN';
  createdAt: Date;
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  images: string[];
  vendorId: string;
  vendor: User;
  createdAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  user: User;
  items: OrderItem[];
  total: number;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  createdAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  sessionId?: string;
  userId?: string;
}