import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { AiFillStar } from "react-icons/ai";
import ApexCharts from "apexcharts";
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    analyticContainer:{
        display:"flex",
        justifyContent:"space-between",

        " & .analyticsSection":{
           padding:"20px 0 20px 20px"
        },

        " & .cardSection":{
            display: "flex",
            gap:"15px",
        },

         "& .card": {
        // border: "1px solid",
           height: "120px",
           width: "120px",
           borderRadius: "10px",
           padding: "10px",
           background: "#FEE",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           alignItems: "center",
           gap: "15px",
         },
         chartSection: {
            marginTop:"20px"
        },
    },
  
  }));

const Analystic = () => {
    const classes = useStyles();
    useEffect(() => {
        const options = {
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
            colors: ["#1DDBA9", "#78819F", "#6A8AF3"],
          },
          series: [
            {
              data: [1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200],
            },
            {
              data: [1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700, 1700],
            },
            {
              data: [2300, 2300, 2300, 2300, 2300, 2300, 2300, 2300, 2300],
            },
          ],
          xaxis: {
            categories: [
              "Jan 22",
              "Feb 22",
              "Mar 22",
              "Apr 22",
              "May 22",
              "Jun 22",
              "Jul 22",
              "Aug 22",
              "Sep 22",
            ],
          },
          legend: {
            show: false,
          },
        };
    
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
    
        return () => {
          chart.destroy();
        };
      }, []);
    
    const chartRef = useRef(null);

    const Details = [
        {
          text: "Spend",
          icon: <ImArrowUp style={{ color: "#EC1F24" }} />,
          price: "DT 756763.00",
        },
        {
          text: "Received",
          icon: <ImArrowDown style={{ color: "#1DDBA9" }} />,
          price: "DT 756763.00",
        },
        {
          text: "Available Assets",
          icon: <AiFillStar style={{ color: "#4A3DFF" }} />,
          price: "DT 756763.00",
        },
      ];
      return (
        <Box className={classes.analyticContainer}>
          <Box className="analyticsSection">
            <Box>
              <Typography variant="h4">Analytics</Typography>
            </Box>
            <Box style={{ margin: "10px 0" }}>
              <Typography variant="body2">Calculation</Typography>
            </Box>
            <Box className="cardSection">
              {Details &&
                Details?.map((value, i) => {
                  return (
                    <Box key={i} className="card">
                      <Typography variant="body2">{value.text}</Typography>
                      {value.icon}
                      <Typography>{value.price}</Typography>
                    </Box>
                  );
                })}
            </Box>
          </Box>
          <Box className={`${classes.chartSection}`} style={{marginTop:"50px"}}>
            <Box>
              <Typography mt={5} variant="body2">Average Charts</Typography>
            </Box>
            <Box className="apxchart" ref={chartRef}></Box>
          </Box>
        </Box>
      );
    };
    
    export default Analystic;