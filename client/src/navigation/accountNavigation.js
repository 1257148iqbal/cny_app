import { GitCommit, User } from 'react-feather';

export const accountNavigation = [
  {
    id: 'account',
    title: 'Account',
    icon: <GitCommit size={20} />,
    children: [
      {
        id: 'user',
        title: 'User',
        icon: <User size={20} />,
        navLink: '/users'
      }
    ]
  }
];
