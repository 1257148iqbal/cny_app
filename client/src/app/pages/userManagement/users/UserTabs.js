import { CustomTab, Spinner } from 'app/components/CustomControls';
import PageContainer from 'app/components/PageComponents/layouts/PageContainer';
import React from 'react';
import ActiveUserList from './list/ActiveUserList'
import ArchiveUserList from './list/ArchiveUserList';

const UserList = () => {

  const components = [
    {
      index: 0,
      heading: 'Active',
      component: (
        <React.Fragment>
          <ActiveUserList />
          <Spinner />
        </React.Fragment>
      ),
      hasPermission: true
    },
    {
      index: 1,
      heading: 'Archive',
      component: (
        <React.Fragment>
          <ArchiveUserList />
          <Spinner />
        </React.Fragment>
      ),
      hasPermission: true
    }
  ];

  return (
    <PageContainer heading="Users">
      <CustomTab components={components.filter(item => item.hasPermission)} />
    </PageContainer>
  );
};

export default UserList;
