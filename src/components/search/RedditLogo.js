import React, { Component } from 'react';

class RedditLogo extends Component {
  render() {    
    return (
      <svg 
        className={`reddit-logo ${this.props.fetchingData ? 'fetching' : ''}`}  
        version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        x="0px" 
        y="0px"
        viewBox="0 0 600 600"
      >
        <g>
          <path className="st0" d="M594,17.5c0,184.8,0,369.7,0,554.5c-191.7,0-383.4,0-575.1,0c0-183.5,0-366.9,0-550.4c0-1.3,0.3-2.5,0.4-4.1
            C211.1,17.5,402.5,17.5,594,17.5z M22.3,295.1C22,442.9,140.2,570,297.4,570.2c156.6,0.2,275.5-125.8,275.8-274.4
            c0.3-152.1-123-275.6-275.1-275.7C145.7,20,22.3,143,22.3,295.1z"/>
          <path className="st1" d="M22.3,295.1C22.3,143,145.7,20,298,20.1c152.1,0.1,275.4,123.6,275.1,275.7
            c-0.3,148.6-119.2,274.6-275.8,274.4C140.2,570,22,442.9,22.3,295.1z M325.4,148.1c18,3.8,35.2,7.6,52.5,10.9
            c4.3,0.8,6.2,2.5,7.4,6.8c3.6,12.3,15,19.8,27.9,19.2c12.7-0.6,23-9.9,25.9-23.4c2.3-10.7-4.3-23.7-14.8-29.1
            c-10.9-5.6-25.1-3.6-32.9,5.8c-3.5,4.2-6.6,4.3-11.3,3.3c-19.5-4.1-39.1-8-58.7-11.8c-6.8-1.3-10.4,1.2-11.9,8.1
            c-6.4,29.5-12.9,59.1-19,88.7c-0.8,4-2.4,5.2-6.3,5.4c-8,0.4-16,1.1-23.9,2.4c-26.8,4.6-51.7,14-74.5,28.8c-2.6,1.7-4.4,1.8-7-0.2
            c-7.8-6-16.9-9-26.7-8.3c-17.4,1.1-33,14.1-37,30.2c-4.3,17.8,2.6,35.3,18.3,44.9c3.2,1.9,3.9,3.9,3.8,7.3
            c-0.5,20,4.1,38.5,15.8,55c17.4,24.6,41.4,40.2,69.1,50.5c33.2,12.4,67.6,15.9,102.8,11.8c32.4-3.7,62.5-13.5,89.1-32.5
            c28.6-20.4,46.2-47.2,45.8-83.6c0-4.3,0.9-7,4.8-9.7c13.9-9.4,20.1-27.1,15.7-42.7c-4.5-16-18.6-27.8-35-29.4
            c-12.3-1.3-22.8,2.7-32.2,10.6c-32-21.2-67-32.6-105.7-33.6C313.6,205,319.4,176.9,325.4,148.1z"/>
          <path className="st0" d="M325.4,148.1c-6,28.8-11.8,56.8-17.8,85.3c38.7,1.1,73.7,12.4,105.7,33.6c9.4-7.9,19.9-11.9,32.2-10.6
            c16.4,1.7,30.5,13.4,35,29.4c4.4,15.7-1.8,33.4-15.7,42.7c-3.9,2.7-4.9,5.3-4.8,9.7c0.4,36.4-17.2,63.2-45.8,83.6
            c-26.6,19-56.7,28.7-89.1,32.5c-35.3,4.1-69.6,0.6-102.8-11.8c-27.7-10.3-51.7-25.9-69.1-50.5c-11.6-16.5-16.3-35.1-15.8-55
            c0.1-3.4-0.6-5.3-3.8-7.3c-15.7-9.5-22.6-27-18.3-44.9c3.9-16.1,19.5-29.1,37-30.2c9.8-0.6,18.9,2.3,26.7,8.3c2.6,2,4.4,1.9,7,0.2
            c22.8-14.8,47.8-24.2,74.5-28.8c7.9-1.3,15.9-2,23.9-2.4c3.9-0.2,5.4-1.4,6.3-5.4c6.2-29.6,12.6-59.1,19-88.7
            c1.5-6.9,5.1-9.4,11.9-8.1c19.6,3.8,39.2,7.7,58.7,11.8c4.6,1,7.8,0.9,11.3-3.3c7.9-9.4,22-11.5,32.9-5.8
            c10.5,5.5,17.1,18.4,14.8,29.1c-2.9,13.5-13.2,22.8-25.9,23.4c-12.9,0.6-24.4-6.9-27.9-19.2c-1.3-4.3-3.1-6-7.4-6.8
            C360.6,155.7,343.3,151.9,325.4,148.1z M388.5,324.5c-0.3-15.4-10.6-27.6-27.6-28.3c-14.5-0.5-26.5,12.3-26.9,26.9
            c-0.4,14.5,9.8,27.5,29.8,28.5C376.3,352.4,388.4,338.7,388.5,324.5z M233.1,349.8c15.3,0.1,27.2-11.2,27.4-26.1
            c0.2-15.9-11.1-27.8-26.7-28c-15.2-0.2-27.5,11.7-27.7,26.7C205.8,337.3,218,349.7,233.1,349.8z M297.8,419.5
            c24,0.7,45.9-5.7,65.6-19.5c4.7-3.3,5.9-6.4,3.3-10.1c-2.6-3.7-6.5-4.2-11-1.3c-38.3,24-76.6,23.9-114.9,0.1c-4.2-2.6-7.8-3.1-11,1
            c-2.6,3.4-1.4,7.5,3,10.5C252.3,413.9,274,420.2,297.8,419.5z"/>
          <path className="st1" d="M388.5,324.5c-0.1,14.2-12.2,27.9-24.8,27.2c-20-1-30.2-14-29.8-28.5c0.4-14.6,12.4-27.5,26.9-26.9
            C377.9,296.9,388.3,309.1,388.5,324.5z"/>
          <path className="st1" d="M233.1,349.8c-15.1-0.1-27.3-12.5-27-27.4c0.2-15.1,12.5-26.9,27.7-26.7c15.6,0.2,27,12,26.7,28
            C260.3,338.6,248.3,350,233.1,349.8z"/>
          <path className="st1" d="M297.8,419.5c-23.8,0.7-45.5-5.6-65.1-19.2c-4.4-3.1-5.6-7.2-3-10.5c3.2-4.1,6.8-3.6,11-1
            c38.3,23.8,76.6,23.9,114.9-0.1c4.5-2.8,8.4-2.4,11,1.3c2.6,3.7,1.4,6.8-3.3,10.1C343.7,413.8,321.8,420.2,297.8,419.5z"/>
        </g>
      </svg>    
    )
  }
}

export default RedditLogo;