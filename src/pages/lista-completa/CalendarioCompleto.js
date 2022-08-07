import React, { Fragment, useCallback, useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import moment from 'moment'
import 'moment/locale/pt-br'
import * as S from './ListaCompleta.styles'

const localizer = momentLocalizer(moment)


function CalendarioCompleto({ listProducts }) {

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
                    defaultView="day"
                    selectable
                    popup
                    style={{ height: 600 }}
                    // onSelectSlot={handleSelectSlot}
                    // onSelectEvent={handleSelectEvent}
                    messages={messages}
                />
            </S.CalendarBox>
            <S.Absolute></S.Absolute>
        </S.CalendarWrapper>

    );
}

export default CalendarioCompleto;