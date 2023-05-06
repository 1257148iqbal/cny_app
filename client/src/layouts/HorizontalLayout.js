// !Do not remove the Layout import
import Layout from './HorizontalLayoutMain';


const HorizontalLayout = props => (

  <Layout
    // menu={props => <CustomMenu {...props} />}
    // navbar={props => < ErpNavigation {...props} />}
    // footer={props => <CustomFooter {...props} />}
    {...props}
  >
    {props.children}
  </Layout >
);

export default HorizontalLayout;
