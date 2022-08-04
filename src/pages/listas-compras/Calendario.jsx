import React, { Fragment } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'

const localizer = momentLocalizer(moment)


function Calendario({ listProducts }) {

    return (
        <Fragment>
            <div>Calendario</div>
            <Calendar
                localizer={localizer}
                events={listProducts}
                defaultView="week"
                selectable
                popup
                style={{ height: 600 }}
            />
        </Fragment>
    );
}

export default Calendario;