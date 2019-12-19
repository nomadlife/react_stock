import './App.css';

import React, { Component } from 'react'
import Header from './components/layout/header';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Todos from './components/Todos'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export class App extends Component {

  state = {
    todos:[
      {
        id:1, title:'롯데리츠', code:'033590', date:'2019-12', price:6230,
        share:84, rate:1.35, share_after_tax:71, completed:false
      },
      {
        id:2, title:'롯데리츠', code:'033590', date:'2020.06',price:6230,
        share:158, rate:2.545, share_after_tax:134, completed:false
      },
      {
        id:3, title:'롯데리츠', code:'033590', date:'2020.12.', price:6230,
        share:158, rate:2.54, share_after_tax:134, completed:false
      },
      {
        id:4, title:'NH프라임리츠', code:'388100', date:'2020.05.', price:6030,
        share:125, rate:2.07, share_after_tax:106, completed:false
      },
      {
        id:5, title:'NH프라임리츠', code:'388100', date:'2020.09.', price:6030,
        share:125, rate:2.07, share_after_tax:106, completed:false
      },
      {
        id:6, title:'신한알파리츠', code:'293940', date:'2020.03', price:7570,
        share:140, rate:1.85, share_after_tax:118, completed:false
      },
      {
        id:7, title:'신한알파리츠', code:'293940', date:'2020.09', price:7570,
        share:140, rate:1.85, share_after_tax:118, completed:false
      },
      {
        id:8, title:'이리츠코크렙', code:'088260', date:'2019.12', price:6820,
        share:169, rate:2.48, share_after_tax:143, completed:false
      },
      {
        id:9, title:'이리츠코크렙', code:'088260', date:'2020.06', price:6820,
        share:170, rate:2.49, share_after_tax:144, completed:false
      },
      {
        id:10, title:'이리츠코크렙', code:'088260', date:'2020.12', price:6820,
        share:170, rate:2.49, share_after_tax:144, completed:false
      },
    ]
  }

  
  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                
                {'리츠명'} {'배당시기'} {'현재주가'} {'배당금'} {'배당률'} {'배당금(세후)'}
                <Todos todos={this.state.todos}></Todos>

              </React.Fragment>
            )}></Route>
                

            <Route path="/about" component={About}
            ></Route>


            
          </div>
        </div>
        
  
    </Router>
    )
  }
}

export default App


