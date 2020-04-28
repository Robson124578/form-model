const id_inputNome = document.querySelector("#id_inputNome")
const id_labelNome = document.querySelector("#id_labelNome")
const class_btn_name = document.querySelector(".class-btn-name")
const class_btn_text = document.querySelector(".class-btn-text")
const class_btn_titulo = document.querySelector(".class-btn-titulo")
const id_labelTitulo = document.querySelector("#id_labelTitulo")
const id_inputTitulo = document.querySelector("#id_inputTitulo")
const id_labelText = document.querySelector("#id_labelText")
const id_inputText = document.querySelector("#id_inputText")
const btn_limp_input = document.querySelector("#btn-limp-input")

// Funções para animação de input

 function animarinputNome(labelll){
    labelll.classList.add("animInputClass");
    labelll.classList.remove("desAnimInputClass");
}

function desAnimInputNome(inputtt, labelll){
    if(inputtt.value.length == ""){
        labelll.classList.add("desAnimInputClass");
        labelll.classList.remove("animInputClass");
    }
}

function animBtn(classBtn){
        classBtn.classList.add('aparecer-btn')
        classBtn.classList.remove("sumir-btn")       
}

function desanimBtn(classBtn){
    classBtn.classList.add("sumir-btn")
    classBtn.classList.remove("aparecer-btn")
}

id_inputNome.addEventListener('focus', function(){
    animarinputNome(id_labelNome);
    animBtn(class_btn_name);
})

id_inputNome.addEventListener('focusout', function(){
    desAnimInputNome(id_inputNome, id_labelNome);
    desanimBtn(class_btn_name)
})

id_inputTitulo.addEventListener('focus', function(){
    animarinputNome(id_labelTitulo);
    animBtn(class_btn_titulo)
})

id_inputTitulo.addEventListener('focusout', function(){
    desAnimInputNome(id_inputTitulo, id_labelTitulo);
    desanimBtn(class_btn_titulo)
})

id_inputText.addEventListener('focus', function(){
    animarinputNome(id_labelText);
    animBtn(class_btn_text)
})

id_inputText.addEventListener('focusout', function(){
    desAnimInputNome(id_inputText, id_labelText);
    desanimBtn(class_btn_text)
})


// Função para limpar campo de formulário

function clearInput(inpuArea){
    return inpuArea.value = '';
}

class_btn_name.addEventListener('click', function(){
    clearInput(id_inputNome)
    desAnimInputNome(id_inputNome, id_labelNome);
})

class_btn_titulo.addEventListener('click', function(){
    clearInput(id_inputTitulo)
    desAnimInputNome(id_inputTitulo, id_labelTitulo);
})

class_btn_text.addEventListener('click', function(){
    clearInput(id_inputText)
    desAnimInputNome(id_inputText, id_labelText)
})