import React from 'react';

const ComponentFunction = () => {
    return(
        <div>
            <h1>Componente Funcional</h1>
            <br></br>
        <h2>Diferenças de Uso - Componente Funcional</h2>
        <ol>
          <li><strong>Sintaxe:</strong> Usa uma função JavaScript normal ou <code>const</code> com função arrow.</li>
          <li><strong>Estado (State):</strong> Usa o React Hook <code>useState()</code> para gerenciar estado.</li>
          <li><strong>Ciclo de Vida (Lifecycle):</strong> Usa o Hook <code>useEffect()</code> para lidar com ciclo de vida.</li>
          <li><strong>Referência ao Componente:</strong> Não usa <code>this</code>; tudo é acessado diretamente através de variáveis.</li>
          <li><strong>Sintaxe do JSX:</strong> O JSX é retornado diretamente na função, sem a necessidade de <code>render()</code>.</li>
          <li><strong>Performance:</strong> Geralmente mais rápidos e leves, devido à simplificação da sintaxe.</li>
          <li><strong>Contexto do <code>this</code>:</strong> Não tem <code>this</code>, então não há confusão de contexto.</li>
          <li><strong>Hooks:</strong> Suportam Hooks (como <code>useState</code>, <code>useEffect</code>).</li>
        </ol>
      
        <h2>Diferenças de Utilidade - Componente Funcional</h2>
        <ol>
          <li><strong>Quando usar:</strong> Usado para componentes simples, e hoje em dia substitui componentes de classe em quase todos os casos.</li>
          <li><strong>Complexidade:</strong> Mais simples e conciso, especialmente com o uso de Hooks.</li>
          <li><strong>Legibilidade:</strong> Facilita a legibilidade e modularidade, com uma sintaxe mais curta e clara.</li>
          <li><strong>Suporte ao Futuro do React:</strong> Estão alinhados com as práticas modernas do React, como Hooks e a abordagem funcional.</li>
          <li><strong>Estado Local e Gerenciamento de Efeitos:</strong> Mais eficiente para manipular estado e efeitos colaterais com Hooks (<code>useState</code>, <code>useEffect</code>).</li>
          <li><strong>Herança:</strong> Não suporta herança, mas promove composição (uma prática mais recomendada).</li>
          <li><strong>Curva de aprendizado:</strong> Tem uma curva de aprendizado mais suave com Hooks, tornando o aprendizado mais rápido.</li>
        </ol>
      </div>
      
      
    )
}

export default ComponentFunction;