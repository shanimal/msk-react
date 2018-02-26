import Classes from '../components/Classes/Classes';
import Contact from '../components/Contact/Contact';
import Facility from '../components/Facility/Facility';
import Home from '../components/Home/Home';

const menus = [
  {id: 'home', label: 'Home', component: Home},
  {id: 'facility', label: 'Facility', component: Facility},
  {id: 'classes', label: 'Classes', component: Classes},
  {id: 'contact', label: 'Contact', component: Contact},
];

export default menus;
