import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome='Gabriel' sobrenome='Alves'>
            <Filho nome='Pedro' sobrenome='Alves'/>
            <Filho nome='Paulo' sobrenome='Alves'/>
            <Filho nome='Carla' sobrenome='Alves'/>
        </Pai>
    </div>,
    document.getElementById('root')
)