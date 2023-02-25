

import React, { useRef, useEffect, useState } from 'react';
import PieChartFunctional from "./PieChartFunctional.jsx";
import PieChartClass from "./PieChartClass.jsx";
import './App.css';


/* App */
function App(props) {

  let data1=props.data;

  //const [pieData1, setPieData1] =   useState(data1);
  
  //const [pieData2, setPieData2] =   useState(data2);

  // don't keep making it longer!
  
  
  //console.log("rendering App");
  let head1=props.string1;
  return (
    <div>
      <h2>{head1}</h2>
      <div>
        <PieChartClass name={"pie1"} data={data1} />
      </div>
    </div>
  )

}

export default App;