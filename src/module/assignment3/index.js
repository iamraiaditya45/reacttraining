// import React from "react";
// import { Bar, Line,Doughnut, Pie } from "react-chartjs-2";
// import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";
// const useStyles = makeStyles((theme) => ({
//   chart: {
//     width: 820,
//     height:500,
//     marginLeft: 400,
//     marginBottom:350
//   },
//   chart2:{
//       width:400,
//       height:250,
//       marginLeft: 600,
//   }
// }));
// const LineChart = () => {
//   const classes = useStyles();
//   const data = {
//     labels: ["jan", "feb", "march", "april ","may","june"],
//     datasets: [
//       {
//         label: "First Quarter Sell",
//         data: [8, 3, 1, 6,8,4,7],
//         borderColor: ["rgba(255,162,235,0.2)"],
//         backgroundColor: ["rgba(255 ,162,235,0.2)"],
//         pointBackgroundColor: ["rgba(255 ,162,235,0.2)"],
//         pointBorderColor: ["rgba(255 ,162,235,0.2)"],
//       },

//       {
//         label: "Second Quarter Sell",
//         data: [6, 4, 3, 8,6,5,9],
//         borderColor: ["rgba(54 ,162,235,0.2)"],
//         backgroundColor: ["rgba(54 ,162,235,0.2)"],
//         pointBackgroundColor: ["rgba(54 ,162,235,0.2)"],
//         pointBorderColor: ["rgba(54 ,162,235,0.2)"],
//       },
//     ],
//   };
//   const options={
//       title:{
//           display:true,
//           text:'Line Chart'
//       },
//       scales:{
//           yAxes:[
//               {
//                   ticks:{
//                       min:0,
//                       max:10,
//                       stepSize:1
//                   }
//               }
//           ]
//       }
//   }
//   return (
//     <div>
//       <div className={classes.chart}>
//         <Line data={data} options={options} />
//         <Bar data={data}  />
//             </div>

//     </div>
//   );
// };

// export default LineChart;

import React from "react";
import { Bar, Line,Doughnut, Pie } from "react-chartjs-2";
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  chart2:{
      width:400,
      height:250,
      marginLeft: 600,
  }
}));
const DoughnutChart = () => {
  const classes = useStyles();
  const data = {
    labels: ["jan", "feb", "march", "april ","may","june"],
    datasets: [
      {
        label: "First Quarter Sell",
        data: [8, 3, 1, 6,8,4],
        backgroundColor: [
            "rgba(255 ,99,132,1)",
            "rgba(255 ,205,86,1)",
            "rgba(54 ,159,235,1)",
            "rgba(255 ,162,235,1)",
            "rgba(153 ,102,255,1)"
        ],
      },

     
    ],
  };
  const options={
      title:{
          display:true,
          text:'Line Chart'
      },
  }
  return (
    <div>
            <div className={classes.chart2}>
            <Doughnut data={data} /> 
            </div>
    </div>
  );
};

export default DoughnutChart;
