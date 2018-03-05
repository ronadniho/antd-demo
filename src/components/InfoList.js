/**
 * Created by Dell on 2018/3/5.
 */
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class InfoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="InfoItemList b-list">
        {
          this.props.data.map(val=>(
            <li key={val.id}>
              <Link to={{

              }}>
              </Link>
            </li>
          ))
        }
      </ul>


    )

  }
}

export default InfoList;
