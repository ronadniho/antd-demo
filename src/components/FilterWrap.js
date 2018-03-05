/**
 * Created by Dell on 2018/3/5.
 */
import React,{Component} from 'react';


class FilterWrap extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.typeData&&this.getBookList(this.props.typeData[0].id);
  }
  getBookList(id,e){
    console.log(e)
    this.props.getBookList(id)
  }
  render(){
    return (
      <div className="filter-wrap">
        <div className="filter-item-title">
          <span></span>
            <h1>{this.props.title || '默认标签'}</h1>
          <span></span>
        </div>
        <ul className="filter-item-wrap">
          {this.props.typeData&&this.props.typeData.map(val=>(
            <li
            key={val.id}
            onClick={this.getBookList.bind(this, val.id)}>

            </li>
          ))}

        </ul>
      </div>
    )
  }
}

export default FilterWrap;

