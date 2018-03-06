/**
 * Created by Dell on 2018/3/5.
 */
import React, {Component} from 'react';
import Nav from './Nav';
import Carousels from './Carousels';
import Grids from './Grids';
import InfoList from './InfoList';
import FilterWrap from './FilterWrap';
import Api from '../api/Api.js';

import './Main.css';

const typeData = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}]

function BookTags(props) {
  return (
    <ul className="b-tags">
      {
        props.tags.map((val) => (
          <li key={val}>{val}</li>
        ))
      }
    </ul>
  )
}
function BookListWrap(props) {
  return (
    <div className="book-list-wrap">
      <h1>{props.title || '默认标题'}</h1>
      {props.children}
    </div>
  )

}
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['科幻', '游戏', '末世', '校花'],
      bookData: [],
      typeData: [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}],
      currentId: 'boy',

    }
  }

  getBookList(id) {
    console.log(id);
    Api.get(`/${id}`)
      .then(response => {
        console.log(response)
        this.setState({
          bookData: response.data.data,
          currentId: id
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <FilterWrap title="选择阅读喜好"
                    typeData={typeData}
                    currentId={this.state.currentId}
                    getBookList={this.getBookList.bind(this)}/>
        <Carousels />
        <Grids />
        <BookListWrap title="精品推荐" children={
          [
            <BookTags key="0" tags={this.state.tags}/>,
            <InfoList key="1" data={this.state.bookData}/>
          ]
        }/>
      </div>
    )
  }
}

export default Main;
