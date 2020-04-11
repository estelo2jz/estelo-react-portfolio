import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faTrash, 
  faSignOutAlt, 
  faEdit, faUnlink, 
  faSpinner, 
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faLock,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
  return library.add(
    faTrash, 
    faSignOutAlt, 
    faEdit, faUnlink, 
    faSpinner, 
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faUserCircle
  );
}

export default Icons;