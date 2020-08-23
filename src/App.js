import React, { useEffect, useState } from 'react';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
function App() {
  const [data,setData]=useState([]);
 useEffect(()=>{
    fetch(process.env.API)
    .then(res=>res.json())
    .then(result=>{
      setData(result)
    })
  },[])
  const uoa = data.map(item=>item.uoa);
  const rating=data.map(item=>item.rating)
  const aggressor_ind=data.map(item=>item.aggressor_ind)
  const options = {
    title: {
      text: 'My chart'
    },
    yAxis: {
      categories: ['A', 'B', 'C'],
    },
    series: [{
      name:'uao',
      data: [uoa[0],uoa[1],uoa[2],uoa[3],uoa[4],uoa[5],uoa[6],uoa[7],uoa[8],uoa[9],uoa[10],uoa[11],uoa[12],uoa[13],uoa[14]]
    },
    {
      name:'rating',
      data: [rating[0],rating[1],rating[2],rating[3],rating[4],rating[5],rating[6],rating[7],rating[8],rating[9],rating[10],rating[11],rating[12],rating[13],rating[14]]
    },
    {
      name:'aggressor_ind',
      data:[aggressor_ind[0],aggressor_ind[1],aggressor_ind[2],aggressor_ind[3],aggressor_ind[4],aggressor_ind[5],aggressor_ind[6],aggressor_ind[7],aggressor_ind[8],aggressor_ind[9],aggressor_ind[10],aggressor_ind[11],aggressor_ind[12],aggressor_ind[13],aggressor_ind[14],]
    }
  ]
  }
  return (
    <div className="App">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}

export default App;
