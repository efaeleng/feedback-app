import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from "./shared/Card";

function Feedbackitem({item, handleDelete}) {

  return (   
      <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close">
          <FaTimes onClick={() => handleDelete(item.id)}/>
        </button>
        <div className="text-display">{item.text}</div>
      </Card>    
   );
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}
 
export default Feedbackitem;