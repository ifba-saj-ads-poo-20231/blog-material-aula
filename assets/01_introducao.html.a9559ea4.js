const e=JSON.parse('{"key":"v-16d6901c","path":"/posts/01_introducao.html","title":"Linguagens e paradigmas de programa\xE7\xE3o","lang":"pt-BR","frontmatter":{"icon":"edit","date":"2023-03-31T00:00:00.000Z","tag":["paradigmas","java","paradigmas"],"category":["aula"],"order":1,"summary":"Linguagens e paradigmas de programa\xE7\xE3o As informa\xE7\xF5es desse cap\xEDtulo foram retiradas basicamente de [^Pires] e [^Tedesco]. Introdu\xE7\xE3o No passado escrevia-se programas utilizando ap","head":[["meta",{"property":"og:url","content":"https://20231-ifba-saj-ads-poo.github.io/blog-material-aula/blog-material-aula/posts/01_introducao.html"}],["meta",{"property":"og:site_name","content":"Blog Aulas 20231 POO"}],["meta",{"property":"og:title","content":"Linguagens e paradigmas de programa\xE7\xE3o"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-31T21:07:03.000Z"}],["meta",{"property":"og:locale","content":"pt-BR"}],["meta",{"property":"article:tag","content":"paradigmas"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"paradigmas"}],["meta",{"property":"article:published_time","content":"2023-03-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-31T21:07:03.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Introdu\xE7\xE3o","slug":"introducao","link":"#introducao","children":[]},{"level":2,"title":"Linguagens de alto n\xEDvel","slug":"linguagens-de-alto-nivel","link":"#linguagens-de-alto-nivel","children":[]},{"level":2,"title":"Paradigmas das linguagens de programa\xE7\xE3o","slug":"paradigmas-das-linguagens-de-programacao","link":"#paradigmas-das-linguagens-de-programacao","children":[{"level":3,"title":"Paradigma funcional","slug":"paradigma-funcional","link":"#paradigma-funcional","children":[]},{"level":3,"title":"Paradigma l\xF3gico","slug":"paradigma-logico","link":"#paradigma-logico","children":[]},{"level":3,"title":"Paradigma declarativo","slug":"paradigma-declarativo","link":"#paradigma-declarativo","children":[]},{"level":3,"title":"Paradigma imperativo","slug":"paradigma-imperativo","link":"#paradigma-imperativo","children":[]},{"level":3,"title":"Paradigma orientado a objetos","slug":"paradigma-orientado-a-objetos","link":"#paradigma-orientado-a-objetos","children":[]},{"level":3,"title":"Paradigma orientado a eventos","slug":"paradigma-orientado-a-eventos","link":"#paradigma-orientado-a-eventos","children":[]}]},{"level":2,"title":"Por que Java?","slug":"por-que-java","link":"#por-que-java","children":[]},{"level":2,"title":"Hist\xF3ria","slug":"historia","link":"#historia","children":[]},{"level":2,"title":"M\xE1quina Virtual","slug":"maquina-virtual","link":"#maquina-virtual","children":[]},{"level":2,"title":"Java lento? Hotspot e JIT","slug":"java-lento-hotspot-e-jit","link":"#java-lento-hotspot-e-jit","children":[]},{"level":2,"title":"Vers\xF5es do Java e a confus\xE3o do Java2","slug":"versoes-do-java-e-a-confusao-do-java2","link":"#versoes-do-java-e-a-confusao-do-java2","children":[]},{"level":2,"title":"JVM? JRE? JDK? O que devo baixar?","slug":"jvm-jre-jdk-o-que-devo-baixar","link":"#jvm-jre-jdk-o-que-devo-baixar","children":[]},{"level":2,"title":"Declarando e usando vari\xE1veis","slug":"declarando-e-usando-variaveis","link":"#declarando-e-usando-variaveis","children":[]},{"level":2,"title":"Tipos primitivos e valores","slug":"tipos-primitivos-e-valores","link":"#tipos-primitivos-e-valores","children":[]},{"level":2,"title":"O if e o else","slug":"o-if-e-o-else","link":"#o-if-e-o-else","children":[]},{"level":2,"title":"Loops","slug":"loops","link":"#loops","children":[{"level":3,"title":"O While","slug":"o-while","link":"#o-while","children":[]},{"level":3,"title":"O For","slug":"o-for","link":"#o-for","children":[]},{"level":3,"title":"Controlando loops","slug":"controlando-loops","link":"#controlando-loops","children":[]}]},{"level":2,"title":"Escopos e Blocos","slug":"escopos-e-blocos","link":"#escopos-e-blocos","children":[{"level":3,"title":"Escopo das vari\xE1veis","slug":"escopo-das-variaveis","link":"#escopo-das-variaveis","children":[]},{"level":3,"title":"Um bloco dentro do outro","slug":"um-bloco-dentro-do-outro","link":"#um-bloco-dentro-do-outro","children":[]}]},{"level":2,"title":"Array","slug":"array","link":"#array","children":[{"level":3,"title":"O problema","slug":"o-problema","link":"#o-problema","children":[]},{"level":3,"title":"Modificando o conte\xFAdo de um array","slug":"modificando-o-conteudo-de-um-array","link":"#modificando-o-conteudo-de-um-array","children":[]},{"level":3,"title":"Acessando o conte\xFAdo de um array","slug":"acessando-o-conteudo-de-um-array","link":"#acessando-o-conteudo-de-um-array","children":[]},{"level":3,"title":"Percorrendo um Array","slug":"percorrendo-um-array","link":"#percorrendo-um-array","children":[]},{"level":3,"title":"foreach","slug":"foreach","link":"#foreach","children":[]},{"level":3,"title":"Opera\xE7\xF5es","slug":"operacoes","link":"#operacoes","children":[]}]},{"level":2,"title":"Entrada e Saida de Dados","slug":"entrada-e-saida-de-dados","link":"#entrada-e-saida-de-dados","children":[{"level":3,"title":"JOptionPane","slug":"joptionpane","link":"#joptionpane","children":[]},{"level":3,"title":"showInputDialog","slug":"showinputdialog","link":"#showinputdialog","children":[]}]},{"level":2,"title":"Convers\xF5es em Java","slug":"conversoes-em-java","link":"#conversoes-em-java","children":[{"level":3,"title":"Convertendo ASCII para String","slug":"convertendo-ascii-para-string","link":"#convertendo-ascii-para-string","children":[]},{"level":3,"title":"Convertendo n\xFAmeros em decimal para bin\xE1rio","slug":"convertendo-numeros-em-decimal-para-binario","link":"#convertendo-numeros-em-decimal-para-binario","children":[]},{"level":3,"title":"Convertendo um Double para um String","slug":"convertendo-um-double-para-um-string","link":"#convertendo-um-double-para-um-string","children":[]},{"level":3,"title":"Convertendo um float para um String","slug":"convertendo-um-float-para-um-string","link":"#convertendo-um-float-para-um-string","children":[]},{"level":3,"title":"Convertendo um integer para c\xF3digo ASCII","slug":"convertendo-um-integer-para-codigo-ascii","link":"#convertendo-um-integer-para-codigo-ascii","children":[]},{"level":3,"title":"Convertendo de um integer para uma String","slug":"convertendo-de-um-integer-para-uma-string","link":"#convertendo-de-um-integer-para-uma-string","children":[]},{"level":3,"title":"Convertendo de um long para uma String","slug":"convertendo-de-um-long-para-uma-string","link":"#convertendo-de-um-long-para-uma-string","children":[]},{"level":3,"title":"Convertendo de uma String para Double","slug":"convertendo-de-uma-string-para-double","link":"#convertendo-de-uma-string-para-double","children":[]},{"level":3,"title":"Convertendo String para integer","slug":"convertendo-string-para-integer","link":"#convertendo-string-para-integer","children":[]},{"level":3,"title":"Convertendo uma String para um float","slug":"convertendo-uma-string-para-um-float","link":"#convertendo-uma-string-para-um-float","children":[]},{"level":3,"title":"Convertendo uma String para um long","slug":"convertendo-uma-string-para-um-long","link":"#convertendo-uma-string-para-um-long","children":[]}]},{"level":2,"title":"Enum","slug":"enum","link":"#enum","children":[{"level":3,"title":"Exemplo Enum","slug":"exemplo-enum","link":"#exemplo-enum","children":[]}]},{"level":2,"title":"Pilha de Execu\xE7\xE3o","slug":"pilha-de-execucao","link":"#pilha-de-execucao","children":[]},{"level":2,"title":"Refer\xEAncias","slug":"referencias","link":"#referencias","children":[]}],"git":{"createdTime":1680296823000,"updatedTime":1680296823000,"contributors":[{"name":"leandro-costa","email":"leandro.costa@ifba.edu.br","commits":1}]},"readingTime":{"minutes":24.84,"words":7451},"filePathRelative":"posts/01_introducao.md","localizedDate":"31 de mar\xE7o de 2023"}');export{e as data};
