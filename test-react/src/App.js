import React, { Component } from 'react';
import style from './style.css'
import DatePicker from 'react-date-picker';
import Moment from 'moment';

class App extends Component {
  constructor() {
    super()
    this.state = {
      typeGestate: " ",
      weightPre: 0,
      weightPost: 0,
      heightPre: 0,
      heightPost: 0,
      dateStart: Moment(new Date()).format('Y-MM-DD'),
      dateEnd: Moment(new Date()).format('Y-MM-DD')
    }
    console.log(this.state.dateStart)
  }
  setSelectTypeGestate = (evt) => {
    this.setState({ typeGestate: evt.target.value })
  }
  setInputWeightPre = (evt) => {
    this.setState({ weightPre: evt.target.value })
  }
  setInputWeightPost = (evt) => {
    this.setState({ weightPost: evt.target.value })

  }
  setInputHeightPre = (evt) => {
    this.setState({ heightPre: evt.target.value })
  }
  setInputHeightPost = (evt) => {
    this.setState({ heightPost: evt.target.value })
  }
  calculatorBmi = () => {
    let totalBmiPre = 0, totalBmiPost = 0
    let weightPre = this.state.weightPre
    let weightPost = this.state.weightPost
    let heightPre = this.state.heightPre
    let heightPost = this.state.heightPost
    if (weightPre === 0 || weightPost === 0 || heightPre === 0 || heightPost === 0) {
      totalBmiPre = 0, totalBmiPost = 0
    } else {
      totalBmiPre = parseInt(weightPre) / ((parseInt(heightPre) / 100) * 2),
        totalBmiPost = parseInt(weightPost) / ((parseInt(heightPost) / 100) * 2)
    }
    return [totalBmiPre, totalBmiPost]
  }
  setInputDate = async (evt) => {
    await this.setState({
      dateEnd: evt.target.value
    })
    return this.checkDate()
  }
  checkDate=()=>{
    let dateStart = this.state.dateStart
    let dateEnd = this.state.dateEnd
    console.log(Date.parse(dateStart))
    // console.log(dateStart,dateEnd)
    let timeDiff = Math.abs(Date.parse(dateEnd)- Date.parse(dateStart))
    let totalDate = Math.ceil(timeDiff / (1000 * 3600 * 24))
    let total = Math.floor(totalDate/7)
    console.log(total)
    if(total > 40) {
      alert('กรอกวันที่ใหม่!!')
    }
    return total
  }
  render() {
    return (
      <div className="container">

        <div className="header">
          <div className="border-header">
            <h1><i className="fa fa-heartbeat"></i> <a href="index.html">BMI Gestate</a> </h1>
          </div>
        </div>
        <div className="content">
          <h2> คำนวณค่าดัชนีมวลกายสำหรับผู้ตั้งครรภ์</h2>
          <div className="select-gestate">
            <select onChange={this.setSelectTypeGestate}>
              <option>เลือกประเภทการตั้งครรภ์</option>
              <option value="ตั้งครรภ์ 1 คน"> ตั้งครรภ์ 1 คน </option>
              <option value="ตั้งครรภ์ 2 คน"> ตั้งครรภ์ 2 คน </option>
            </select>
          </div>
          <div 
            className="input-text" 
            onChange={this.setInputWeightPre}
          >
            <input placeholder="กรอกน้ำหนักก่อนตั้งครรภ์" type="number" />
          </div>
          <div 
            className="input-text" 
            onChange={this.setInputHeightPre}
            >  
              <input placeholder="กรอกส่วนสูงก่อนตั้งครรภ์" type="number" /> 
          </div>
          <div 
            className="input-text" 
            onChange={this.setInputWeightPost}
          > 
            <input placeholder="กรอกน้ำหนักหลังตั้งครรภ์" type="number" /> 
          </div>
          <div 
            className="input-text" 
            onChange={this.setInputHeightPost}
          > 
            <input placeholder="กรอกส่วนสูงหลังตั้งครรภ์" type="number" /> 
          </div>
          <div className="text-date">
            <p> เลือกวัน/เดือน/ปี ก่อนตั้งครรภ์ </p>
          </div>
          <div className="input-text">
            <input type="date" max={this.state.dateStart} onChange={this.setInputDate}/>
          </div>
          <div className="input-text" > <input placeholder={`ตั้งครรภ์: ${this.checkDate()} สัปดาห์`}/></div>
          <div className="button-calculator" onClick={this.calculatorBmi}> <a href="index.html#answer"><button><i className="fa fa-calculator"></i> คำนวณ </button></a> </div>
          <div id="answer" className="answerBmi">
            <h2> ผลBMI </h2>
            <p>ก่อนตั้งครรภ์: {this.calculatorBmi()[0]}</p>
            <p>ก่อนตั้งครรภ์: {this.calculatorBmi()[1]}</p>
          </div>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
