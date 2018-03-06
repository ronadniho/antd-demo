import React, {Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.back = this.back.bind(this);
  }

  componentDidMount() {
  }
  back(){
    console.log(this.props)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left"/>}
          onLeftClick={this.back.bind(this)}
          rightContent={[
            <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
          ]}
        >简介</NavBar>
        <div>
          {this.props.match.params.id}
        </div>
      </div>
    )
  }
}

export default BookDetails;
