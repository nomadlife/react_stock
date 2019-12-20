import './App.css';

import React, { Component } from 'react'
import Header from './components/layout/header';
import About from './components/pages/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, title, code, date, price, share, rate, share_after_tax) {
  return { id, title, code, date, price, share, rate, share_after_tax };
}

const rows = [
  createData(1, '롯데리츠', '033590','2019-12', 6230, 84, 1.35, 71),
  createData(2, '롯데리츠', '033590', '2020.06', 6230, 158, 2.545, 134),
  createData(3, '롯데리츠', '033590', '2020.12.', 6230, 158, 2.54, 134),
  createData(4, 'NH프라임리츠', '388100', '2020.05.', 6030, 125, 2.07, 106),
  createData(5, 'NH프라임리츠', '388100', '2020.09.', 6030, 125, 2.07, 106),
  createData(6, '신한알파리츠', '293940', '2020.03', 7570, 140, 1.85, 118),
  createData(7, '신한알파리츠', '293940', '2020.09', 7570, 140, 1.85, 118),
  createData(8, '이리츠코크렙', '088260', '2019.12', 6820, 169, 2.48, 143),
  createData(9, '이리츠코크렙', '088260', '2020.06', 6820, 170, 2.49, 144),
  createData(10, '이리츠코크렙', '088260', '2020.12', 6820, 170, 2.49, 144),
];

export class App extends Component {

  

  
  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>

                  <TableHead>
                    <TableRow rowSpan="2">
                      <TableCell align="center">리츠명</TableCell>
                      <TableCell align="right">배당시기</TableCell>
                      <TableCell align="right">
                        현재주가(원)
                        </TableCell>
                      <TableCell align="right">배당금(원)</TableCell>
                      <TableCell align="right">배당률</TableCell>
                      <TableCell align="right">배당금(원,세후)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.id}>
                        <TableCell align="left">{row.title}\n{'\n'}
                        {row.code}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.share}</TableCell>
                        <TableCell align="right">{row.rate}</TableCell>
                        <TableCell align="right">{row.share_after_tax}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>

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


