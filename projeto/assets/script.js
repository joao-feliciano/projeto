function toggleMode() { /* function - necessário por criar função | toggleMode - modo de alternancia - possui a lógica do IF no comentário */

    
    const html = document.documentElement

    html.classList.toggle('light') /* html acessa a lista de classes e coloca o atributo light em modo de alternancia */  

    // pegar a tag img 
    const img = document.querySelector("#profile img")

    //substituir a imagem 
    if (html.classList.contains('light')) {
        //se tiver light mode, substituir a imagem light 
        img.setAttribute("src", "./assets/avatar-light.png") 
        img.setAttribute("alt", "Light mode") 
    } else {
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Dark Mode") 
    }
}

    /* 
    LÓGICA DA FUNÇÃO TOGGLE MODE - MODO DE ALTERNÂNCIA 
    1. Variável const = constante - não altera valor - diferente de let que altera valor 
    2. documentElement - função para chamar/acessar o elemento html 
    3. HTML na lista de classe contém light? se contém, ao clicar no switch - remover. Se não contém, ao clicar no switch: adicionar (condicional)
    4. Contém - função booleana - true/false - contém ou não contém 
    

    if (html.classList.contains('light')) {
        html.classList.remove('light') 
    }
    else {
        html.classList.add('light')
    }
    
    OU

    */ 
    


