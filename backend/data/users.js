import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Johan Parker',
    email: 'johan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Denis Diba',
    email: 'denis@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
