/**
 * Created by Dell on 2018/3/5.
 */
import React, {Component} from 'react';
import {Grid, Toast} from 'antd-mobile';
import './Grids.css';
const type1 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%23F57749' rx='28'/%3E%3Cpath fill='%23FFF' d='M39.757 37.316L16.784 18.04C19.532 14.947 23.538 13 28 13c8.284 0 15 6.716 15 15 0 3.52-1.213 6.757-3.243 9.316zm-2.095 2.158C35.052 41.674 31.682 43 28 43c-8.284 0-15-6.716-15-15 -1-2.742.736-5.312 2.02-7.524l22.642 18.998z'/%3E%3Cpath fill='%23F57749' d='M30.423 25H35v3h-5v2h5v3h-5v5h-4v-5h-5v-3h5v-2h-5v-3h4.175L22 19.5l2.598-1.5 3.2 5.544L31 18l2.598 1.5-3.175 5.5z'/%3E%3C/g%3E%3C/svg%3E`;
const type3 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2364A7FA' rx='28'/%3E%3Cpath fill='%23FFF' d='M32 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 16h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zm14 0h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2zM18 30h6c1.105 0 2 .895 2 2v6c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2v-6c0-1.105.895-2 2-2z'/%3E%3C/g%3E%3C/svg%3E`;
const type4 = `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%2360BF99' rx='28'/%3E%3Cpath fill='%23FFF' d='M19.5 15h17c1.38 0 2.5 1.12 2.5 2.5v20c0 1.38-1.12 2.5-2.5 2.5h-17c-1.38 0-2.5-1.12-2.5-2.5v-20c0-1.38 1.12-2.5 2.5-2.5zm1.5 0v8l3.5-2 3.5 2v-8h-7z'/%3E%3C/g%3E%3C/svg%3E`;
const cardData = [{icon: type1, text: '免费'}, {icon: type4, text: '排行'}, {icon: type3, text: '分类'}, {
  icon: type4,
  text: '完本'
}];

class Grids extends Component {
  failToast(){
    Toast.fail('暂未开放', 1);
  };

  render() {
    return (
      <div>
        <Grid data={cardData} hasLine={false} onClick={this.failToast}/>

      </div>
    )
  }
}


export default Grids;
