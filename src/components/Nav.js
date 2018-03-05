/**
 * Created by Dell on 2018/3/5.
 */
import React,{Component} from 'react';

import { NavBar, Icon } from 'antd-mobile';
import './Nav.css';
class Nav extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          ]}
        >书城</NavBar>
        <div className="navn"></div>
      </div>

    )
  }
}

export default Nav;
