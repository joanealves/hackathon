import React, { Fragment, useCallback, useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/pt-br'
import * as S from './ListasCompras.styles'

const localizer = momentLocalizer(moment)


function Calendario({ listProducts }) {

    const handleSelectSlot = useCallback(
        ({ start, end }) => {
            const title = window.prompt('New Event Name')
            if (title) {
                console.log('start', start)
                console.log('end', end)
            }
        },
        []
    )

    const handleSelectEvent = useCallback(
        (event) => {
            console.log(event)
            window.alert(event.title)
        },
        []
    )

    const { messages } = useMemo(
        () => ({
            messages: {
                week: 'Semana',
                day: 'Dia',
                month: 'Mês',
                previous: 'voltar',
                next: 'próxima',
                today: 'hoje',
                agenda: 'Lista Completa',

                showMore: (total) => `mostrar + ${total}`,
            },
        }),
        []
    )

    return (
        <S.CalendarWrapper>
            <S.CalendarBox>
                <Calendar
                    localizer={localizer}
                    events={listProducts}
                    defaultView="week"
                    selectable
                    popup
                    style={{ height: 600 }}
                    onSelectSlot={handleSelectSlot}
                    onSelectEvent={handleSelectEvent}
                    messages={messages}
                />
            </S.CalendarBox>
            <S.Absolute></S.Absolute>
        </S.CalendarWrapper>

    );
}

export default Calendario;