import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e}from"./app.4c5a0771.js";const o={},t=e(`<h1 id="exercicio-modelagem-quadrado" tabindex="-1"><a class="header-anchor" href="#exercicio-modelagem-quadrado" aria-hidden="true">#</a> Exerc\xEDcio: Modelagem Quadrado</h1><ol><li>Suponha que voc\xEA possua um programa de edi\xE7\xE3o de imagens que manipula objetos geom\xE9tricos. Voc\xEA deseja definir uma classe Quadrado contendo como atributos um inteiro cor e um String tamanho, definidos pelo usu\xE1rio no momento de sua cria\xE7\xE3o, mas que n\xE3o podem ser posteriormente modificados. Como voc\xEA escreveria esta classe?</li><li>Modifique a classe Quadrado do Exerc\xEDcio anterior de modo que a cor e o tamanho do objeto possam ser alterados ap\xF3s sua atribui\xE7\xE3o inicial. Al\xE9m disso, a classe deve garantir que sejam atribu\xEDdos, para o campo tamanho, apenas valores positivos e, para o campo cor, apenas as cores &quot;amarelo&quot;, &quot;azul&quot;, &quot;verde&quot; ou &quot;vermelho&quot;</li></ol><details class="custom-container details"><summary>Detalhe</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Quadrado</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Cor</span> cor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> tamanho<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Quadrado</span><span class="token punctuation">(</span><span class="token class-name">Cor</span> cor<span class="token punctuation">,</span> <span class="token class-name">String</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTamanho</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setCor</span><span class="token punctuation">(</span>cor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Cor</span> <span class="token function">getCor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getTamanho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> tamanho<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCor</span><span class="token punctuation">(</span><span class="token class-name">Cor</span> cor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cor <span class="token operator">=</span> cor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTamanho</span><span class="token punctuation">(</span><span class="token class-name">String</span> tamanho<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>tamanho<span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tamanho <span class="token operator">=</span> tamanho<span class="token punctuation">;</span>    
        <span class="token punctuation">}</span>        
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Cor</span> <span class="token punctuation">{</span>
    
    <span class="token function">AMARELO</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AZUL</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">VERDE</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">,</span> <span class="token function">VERMELHO</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> valor<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Cor</span><span class="token punctuation">(</span><span class="token keyword">int</span> valor<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>valor <span class="token operator">=</span> valor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getValor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> valor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,3),p=[t];function c(i,l){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","05_exercicio_modelagem_quadrado.html.vue"]]);export{d as default};