/**
 * Title: Custom Drawer
 * Description: Custom Drawer
 * Author: Nasir Ahmed
 * Date: 05-December-2021
 * Modified: 05-December-2021
 **/

import Sidebar from '@core/components/sidebar';

const CustomDrawer = (props) => {
  const { children, open, toggleSidebar, title } = props;
  return (
    <Sidebar
      size="lg"
      open={open}
      title={title}
      headerClassName="mb-1"
      contentClassName="pt-0"
      toggleSidebar={toggleSidebar}
    >
      {children}
    </Sidebar>
  );
};

export default CustomDrawer;
