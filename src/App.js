import React from "react";
import Calendar from "./Components/Calendar";
import Today from "./Components/Today";
import events from "./Components/Programs";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    sDate: new Date(),
    EventsKendra: events,
    Today: [
      {
        id:1,
        Date: '5/12/2019',
        Program:'Sunday Pravachan - GP',
        Type: "Regular"
      },
      {
        id:2,
        Date:'5/20/2019',
        Program:'Bheti-Gathi - GP',
        Type: "Regular"
      },
      {
        id:3,
        Date:'5/21/2019',
        Program:'Wednesday Pravachan - GP',
        Type: "Regular"
      },
      {
        id:4,
        Date:'6/12/2019',
        Program:'Swami Makarandnath Vardhapandin - GP',
        Type: "Special"
      },
      {
        id:5,
        Date:'5/26/2019',
        Program:'Swami Makarandnath Vardhapandin - BG',
        Type: "Special"
      },
    ]
  }}

  
  setCurrentDate =(selectedCalDate)=>{
    this.setState({sDate:selectedCalDate});
  }

  setPrograms =(Today)=>{
    this.setState({Today});
  }
  
  render() {
    const {sDate}=this.state;
    return (
      <div className="App">
        <main>
          <Calendar setCurrentDate={this.setCurrentDate} Today = {this.state.Today}/>
        </main>
        
        <Today Today = {this.state.Today} Currdate = {sDate}/>
      </div>
    );
  }
}

export default App;