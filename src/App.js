import React, { Component } from 'react';
import { HotTable } from '@handsontable/react';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      ['pascal', 'VB.net', 'cobol', 'Perl', 'cobol', 'fortran'],
      [31, 943, 112, 132, 7],
      [10, 20, 11, 143, 20, 'test'],
      [11, 30, 15, 12, 17],
      [12, 30, 15, 122, 7],
      [12, 30, 15, 12, 7],
      [12, 330, 135, 12, 7],
      [12, 30, 15, 12, 7],
    ];
  }
 
  render() {
    return (<HotTable data={this.data} colHeaders={true} rowHeaders={true} manualColumnResize={true} width="1000" height="300" />);
  }
}
 
export default App;