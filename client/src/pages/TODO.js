import React from 'react';
import '../defualt.css';
import {Link} from "react-router-dom";
import Topbar from './Topbar';

// const TODO = ({match}) => {
class TODO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      selected: null
    }
  }

  onClickHandle = (e) => {
    this.setState({selected: e.target.id});
  };
  selectEventHandle = () => {
    let target = this.state.selected;
    let filtered = this.state.users.filter(el => el._id === target);
    if (target !== null) {
      this.props.history.push('/TODO/' + filtered[0].name);
    }
    this.setState({curUser: filtered[0]})
  };
  backEventHandle = () => {
    this.props.history.push('/HOME');
  };

  componentDidMount() {
    if (this.state.load === false) {
      return fetch("http://127.0.0.1:5000/user", {})
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            console.log(res, "JONSED");
            this.setState({...this.state, users: res});

          }).then(
              (res) => {
                this.setState({load: true});
                if (this.props.match.params.name !== undefined) {
                  let filteredArr = this.state.users.filter((el) => el.name === this.props.match.params.name);
                  this.setState({curUser: filteredArr[0]});
                }
              }
          ).catch(err => console.log(err));
    }
  }

  // to={`/TODO/${e.name}`}
  // 마운트 후 FETCH 유저데이터 붙이기;
  render() {
    let userList;

    if (this.state.users !== undefined) {
      userList = this.state.users.map((el) => {
        return <button id={el._id} onClickCapture={this.onClickHandle} className="UserList"
                       key={el._id}> {el.name} </button>
      })
    }
    if (this.props.match.params.name === undefined) {
      return (
          <div>
            <Topbar/>
            <div className="TODO-BOX">
              <h2> 유저 리스트 </h2>
              <div className="List-BOX">
                {userList}
              </div>
            </div>
            <div className="Bottom-BOX">
              <button onClick={this.selectEventHandle} className="Select"> 선택</button>
              <button onClick={this.backEventHandle} className="cancel"> 뒤로가기</button>
            </div>
          </div>

      )
    } else {
      let src = "https://randomuser.me/api/portraits/men/" + Math.floor(Math.random() * 99) + ".jpg";
      if (this.state.curUser === undefined || this.state.load === false) {

        return (
            <div>{"pleasse Wait!..(예외처리중입니다.) "}</div>
        )
      } else {
        return (
            <div>
              <Topbar/>

              <div className="TODO-BOX">
                <div><h2> TODO of {this.props.match.params.name ? this.props.match.params.name : "기본페이지"}</h2></div>
                <img src={src} alt="데이터 실패"/>
                <div className={"info-BOX"}> {this.state.curUser.name}</div>
                <div className={"info-BOX"}>{this.state.curUser.email}</div>
                <div className={"info-BOX"}>{this.state.curUser.phone}</div>

              </div>
            </div>
        )
      }
    }

  }
}

export default TODO;

// let a = {
//   "name": "이정도",
//   "email": "lee.jungdo@gmail.com",
//   "phone": "010-3192-2910",
// };