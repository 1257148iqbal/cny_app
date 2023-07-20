import { Mail, Home, Book, Folder, Users } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'news',
    title: 'News',
    icon: <Book size={20} />,
    navLink: '/news'
  },
  {
    id: 'categories',
    title: 'Categories',
    icon: <Folder size={20} />,
    navLink: '/categories'
  },
  {
    id: 'users',
    title: 'Users',
    icon: <Users size={20} />,
    navLink: '/users'
  }
]
