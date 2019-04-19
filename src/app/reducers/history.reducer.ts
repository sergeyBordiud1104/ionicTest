import { Action } from '@ngrx/store';

export const initialState = [
    {
        src: 'https://www.bsbnb.kz/local/templates/main_template/components/bitrix/news.list/vacancy_list/images/promo1.png',
        name: 'Ryan Lewis',
        number: '+380665021321',
        date: '11:34 17.04.2019',
        time: '2m 34s',
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        number: '+380669531852',
        date: '8:27 17.04.2019',
        time: '2m 32s',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2016/01/udwtuomqpuvacplwdrwx.png',
        name: 'Keith Bond',
        number: '+380993574268',
        date: '12:45 16.04.2019',
        time: '3m 27s',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        number: '+380665021321',
        date: '11:34 16.04.2019',
        time: '1m 29s',
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        number: '+380669531852',
        date: '8:27 16.04.2019',
        time: '1m 38s',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2016/01/udwtuomqpuvacplwdrwx.png',
        name: 'Keith Bond',
        number: '+380993574268',
        date: '12:45 14.04.2019',
        time: '3m 27s',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        number: '+380665021321',
        date: '11:34 14.04.2019',
        time: '1m 29s',
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        number: '+380669531852',
        date: '8:27 14.04.2019',
        time: '1m 38s',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        number: '+380665021321',
        date: '4:46 14.04.2019',
        time: '8m 54s',
    },
];

export function historyReducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}