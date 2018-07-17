import React, { Component } from "react";
import styles from './App.module.scss';
import axios from 'axios';
import Dashboard from './Dashboard';
import EmployeStatsDash from './EmployeStatsDash';
const dashboardURL = 'https://interview-booking-api.herokuapp.com/api/booking-snapshot';
const EmployeStatsURL = 'https://interview-booking-api.herokuapp.com/api/bookings';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardTotalsData: '',
            employeStatsData: ''
        };
    }

    componentDidMount() {
        axios.get(dashboardURL).then(response => {
           // console.log(response.data);
            this.setState({ dashboardTotalsData: response.data })
        });

        axios.get(EmployeStatsURL).then(response => {
          
            this.setState({ employeStatsData: response.data })

        });
    }

    render() {
        return (
            <div className={styles.app}>
                <div className="page-content">
                    <Dashboard dashData={this.state.dashboardTotalsData} />
                    <EmployeStatsDash  employeData = {this.state.employeStatsData}/>
                </div>
            </div>
        );
    }
}
