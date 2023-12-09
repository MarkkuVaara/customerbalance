
import { Circles } from 'react-loading-icons';

const Popup = (props) => {

    return (
      <div className="popup-box">
        <div className="box">
          <div className="close-icon" onClick={props.handleClose}>
            {props.circles && <Circles height={50} stroke="#ff4500" strokeOpacity={.5} speed={1.25} />}
          </div>
          {props.content}
        </div>
      </div>
    );
  
};

export default Popup;
