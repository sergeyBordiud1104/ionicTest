import { Action } from '@ngrx/store';

export const initialState = [
    {
        src: 'https://www.bsbnb.kz/local/templates/main_template/components/bitrix/news.list/vacancy_list/images/promo1.png',
        name: 'Ryan Lewis',
        description: 'My description',
        status: true,
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2016/01/udwtuomqpuvacplwdrwx.png',
        name: 'Keith Bond',
        description: 'Remember that we are using',
        status: true,
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        description: 'This will improve your',
        status: false,
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        description: 'You should be able',
        status: true,
    },
];

export function contactReducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}