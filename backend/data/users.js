import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Jason',
    email: 'jason@example.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
  {
    name: 'Gilchrist',
    email: 'gilchrist@example.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
]

export default users
