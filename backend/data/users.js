import bcrypt from 'bcryptjs';
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Avin Thomas',
    email: 'avin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Elvin Morgan',
    email: 'elvin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
