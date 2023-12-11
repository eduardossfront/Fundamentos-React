import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

export default props => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#014040">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Componente Com Parametro" color="#02735E">
                <ComParametro titulo="Esse é o Título" subtitulo="Esse é o Subtítulo" />
            </Card> 
            <Card titulo="#03 - Componente Com Filhos" color="#03A678">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição" color="#731702">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#05 - Condicional V1" color="#9C3E00">
                <Condicional numero={2}></Condicional>
            </Card>
            <Card titulo="#06 - Condicional V2" color="#F27405">
                <CondicionalComIf numero={7}></CondicionalComIf>
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#F28705">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#F29F05">
                <Super></Super>
            </Card>
            <Card titulo="#09 - Input" color="#F2CB05">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Contador" color="#591C21">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#11 - Mega" color="#8C1F28">
                <Mega qtdeNumero={8}></Mega>
            </Card>
        </div>
    </div>
);