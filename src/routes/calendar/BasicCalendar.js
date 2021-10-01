/**
 * Basic Calendar
 */
import React, { Component } from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import events from './events'
import moment from "moment";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

import Paper from '@material-ui/core/Paper';

import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,Resources
} from '@devexpress/dx-react-scheduler-material-ui';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// import { Calendar, momentLocalizer } from 'react-big-calendar';

// import moment from 'moment';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

import appointments from '../demo-data/today-appointments';

const allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment)

const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'lightblue',
    },
})

const resources = [{
  fieldName: 'type',
  title: 'Type',
  instances: [
    { id: 'private', text: 'Private', color: '#EC407A' },
    { id: 'work', text: 'Work', color: '#7E57C2' },
    { id: 'Workshop', text: 'Workshop', color: '#53FF33' },
  ],
}];
const Localizer = momentLocalizer(moment);

class BasicCalendar extends Component {
	constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };
  }
  render() {
    
    const { data } = this.state;
    return (
      <div className="calendar-wrapper">
        <PageTitleBar title={<IntlMessages id="sidebar.basic" />} match={this.props.match} />
        <RctCollapsibleCard
          heading="Basic Calendar"
        >
          <Paper>
        <Scheduler
          data={data}
        >
          <ViewState
            defaultCurrentDate="2021-09-27"
          />
          <MonthView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <Resources
          data={resources}
        />
        </Scheduler>
      </Paper>
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default BasicCalendar;