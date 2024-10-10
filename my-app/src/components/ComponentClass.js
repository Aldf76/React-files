import React, {Component} from 'react';

class ComponentClass extends Component {
    render(){
        return(
<div>
  <h1>Componente Classe</h1>
  <br></br>
  <h2>Diferenças de Uso - Componente de Classe</h2>
  <ol>
    <li><strong>Sintaxe:</strong> Usa a palavra-chave <code>class</code> e herda de <code>React.Component</code>.</li>
    <li><strong>Estado (State):</strong> Gerencia o estado usando <code>this.state</code> e o método <code>setState()</code>.</li>
    <li><strong>Ciclo de Vida (Lifecycle):</strong> Utiliza métodos como <code>componentDidMount()</code>, <code>componentDidUpdate()</code>, etc.</li>
    <li><strong>Referência ao Componente:</strong> Usa <code>this</code> para acessar propriedades e métodos internos.</li>
    <li><strong>Sintaxe do JSX:</strong> O método <code>render()</code> deve ser definido para retornar JSX.</li>
    <li><strong>Performance:</strong> Componentes de classe podem ser um pouco mais lentos devido ao uso de <code>this</code> e herança.</li>
    <li><strong>Contexto do <code>this</code>:</strong> O uso de <code>this</code> pode gerar confusões com o escopo, necessitando bind manual.</li>
    <li><strong>Hooks:</strong> Não suportam Hooks.</li>
  </ol>

  <h2>Diferenças de Utilidade - Componente de Classe</h2>
  <ol>
    <li><strong>Quando usar:</strong> Usado antes da introdução dos Hooks, especialmente para gerenciar estado e ciclo de vida.</li>
    <li><strong>Complexidade:</strong> Mais verboso e complexo, com necessidade de gerenciar <code>this</code> e métodos de ciclo de vida.</li>
    <li><strong>Legibilidade:</strong> Pode se tornar confuso em grandes componentes, devido ao uso de <code>this</code> e métodos separados.</li>
    <li><strong>Suporte ao Futuro do React:</strong> Embora ainda sejam suportados, componentes de classe estão sendo substituídos por funcionais em novos projetos.</li>
    <li><strong>Estado Local e Gerenciamento de Efeitos:</strong> Precisa de mais boilerplate (métodos de ciclo de vida, <code>this.state</code>).</li>
    <li><strong>Herança:</strong> Pode usar herança (embora não seja uma prática comum em React).</li>
    <li><strong>Curva de aprendizado:</strong> Tem uma curva de aprendizado mais acentuada, especialmente para iniciantes que precisam entender <code>this</code> e ciclo de vida.</li>
  </ol>
  <br></br>
</div>


        )
    }
}

export default ComponentClass;