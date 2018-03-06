import React,{Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';

class Search extends Component{

  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left"/>}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
          ]}
        >搜索</NavBar>
      </div>
    )
  }

}

export default Search;
