import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Mattress Topper',
      slug: 'mattress-topper',
      category: 'Bedroom',
      image: '/images/mattress_topper.jpg', // 679px × 829px
      price: 20.00,
      countInStock: 10,
      brand: 'Linen Chest',
      rating: 4.5,
      numReviews: 10,
      description: 'Linen Chest White Down and Feather Mattress Topper',
    },
    {
      // _id: '2',
      name: 'Kanken Pencil Case',
      slug: 'kanken-pencil-case',
      category: 'Stationary',
      image: '/images/pencil_case.jpg',
      price: 30.00,
      countInStock: 10,
      brand: 'Fjallraven',
      rating: 4.0,
      numReviews: 10,
      description: 'Classic pen and pencil case in durable waxed fabric. Perfect for school or work.',
    },
    {
      // _id: '3',
      name: 'Math 117 Textbook',
      slug: 'math-uni-textbook',
      category: 'School',
      image: '/images/Math_Textbook.jpg',
      price: 98.16,
      countInStock: 15,
      brand: 'Woodhead Publishing',
      rating: 4.5,
      numReviews: 14,
      description: 'The third edition of this popular and effective textbook provides in one volume a unified treatment of topics essential for first year university students studying for degrees in mathematics.',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
