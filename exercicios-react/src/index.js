import React from 'react';
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB } from './componentes/DoisComponentes';
// import MultiElementos from './componentes/MultiElementos';
// import FamiliaSilva from './componentes/FamiliaSilva';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponentesComFuncao from './componentes/ComponentesComFuncao';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';
import Hook from './componentes/Hook';
const Elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook/>
        {/* <Contador numeroInicial={0}/> */}
        {/* <ComponenteClasse valor="Sou um componente de Classe"/> */}
        {/* <Pai/> */}
        {/* <ComponentesComFuncao/> */}
        {/* <Familia sobrenome='Pereira'>
            <Membro nome='Andre'/>
            <Membro nome='Mariana'/>
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <PrimeiroComponente valor='Bom dia'/> */}
        {/* <CompA valor='Ola'/>
        <CompB valor='hello'/> */}
        {/* <MultiElementos/> */}
    </div>
    ,Elemento    
)