/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactApexChart from "react-apexcharts";
import PropTypes from "prop-types"; // PropTypes importini qo'shish

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.lineChartData || [], // Default qiymatni ta'minlash
      chartOptions: props.lineChartOptions || {}, // Default qiymatni ta'minlash
    };
  }

  componentDidMount() {
    const { lineChartData, lineChartOptions } = this.props;
    console.log("LineChart - componentDidMount - lineChartData:", lineChartData);
    console.log("LineChart - componentDidMount - lineChartOptions:", lineChartOptions);

    this.setState({
      chartData: lineChartData || [],
      chartOptions: lineChartOptions || {},
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lineChartData !== this.props.lineChartData || prevProps.lineChartOptions !== this.props.lineChartOptions) {
      console.log("LineChart - componentDidUpdate - lineChartData:", this.props.lineChartData);
      console.log("LineChart - componentDidUpdate - lineChartOptions:", this.props.lineChartOptions);
      this.setState({
        chartData: this.props.lineChartData || [],
        chartOptions: this.props.lineChartOptions || {},
      });
    }
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

// Setting default values for the props of LineChart
LineChart.defaultProps = {
  lineChartData: [],
  lineChartOptions: {},
};

// Typechecking props for the LineChart
LineChart.propTypes = {
  lineChartData: PropTypes.array,
  lineChartOptions: PropTypes.object,
};

export default LineChart;