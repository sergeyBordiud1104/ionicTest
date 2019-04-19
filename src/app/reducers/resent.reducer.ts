import { Action } from '@ngrx/store';

export const initialState = [
    {
        src: 'https://www.bsbnb.kz/local/templates/main_template/components/bitrix/news.list/vacancy_list/images/promo1.png',
        name: 'Ryan Lewis',
        date: '17.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nulla facilisi morbi tempus iaculis urna. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Velit egestas dui id ornare arcu odio ut sem nulla. Diam quam nulla porttitor massa id neque aliquam.',
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        date: '17.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in. Praesent semper feugiat nibh sed. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Cras pulvinar mattis nunc sed blandit.',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2016/01/udwtuomqpuvacplwdrwx.png',
        name: 'Keith Bond',
        date: '16.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam. Amet facilisis magna etiam tempor. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Nibh nisl condimentum id venenatis.',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        date: '16.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor condimentum lacinia. Urna condimentum mattis pellentesque id nibh. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Penatibus et magnis dis parturient montes nascetur.',
    },
    {
        src: 'https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png',
        name: 'Christian Dowd',
        date: '14.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Libero nunc consequat interdum varius sit amet mattis. Eget lorem dolor sed viverra ipsum nunc. Tortor aliquam nulla facilisi cras fermentum odio.',
    },
    {
        src: 'http://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        name: 'Leonard Bailey',
        date: '14.04.2019',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Amet massa vitae tortor condimentum lacinia quis vel eros. Amet venenatis urna cursus eget nunc. Fermentum dui faucibus in ornare quam viverra orci.',
    },
];

export function resentReducer(state = initialState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}