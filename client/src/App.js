// ** Router Import
//import '@custom-styles/basic/tooltip.scss';
import Router from './router/Router';
const App = props => <Router />;
//For Remove Console From Production Mode
if ( process.env.NODE_ENV === "production" ) console.log = () => { };


export default App;
