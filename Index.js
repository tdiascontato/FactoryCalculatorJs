function FactoryCalculadora(){
    return{
        Display: document.querySelector('.Display'),
        Trabalhar(){
            this.botoesApertados();
        },
        botoesApertados(){
            document.addEventListener('click', e=>{
                const el = e.target;
                if(el.classList.contains('btnComum')){
                    this.somarnoDisplay(el.innerHTML);
                }
                if(el.classList.contains('btnClear')){
                    this.Display.value = '';
                }
                if(el.classList.contains('btnDel')){
                    this.Display.value = this.Display.value.slice(0,-1);
                }
                if(el.classList.contains('btnIgual')){
                    this.realizarConta();
                }
            });
        },
        somarnoDisplay(tecla){
            this.Display.value += tecla;
        },
        realizarConta(){
            let conta = this.Display.value;
            if(!conta) return;
            try{
                conta = eval(conta);
                this.Display.value = conta;
            }catch(e){ 
                alert('Conta errada!')
                this.Display.value = '';
            ;}
            
        }
    }
}
const calculadora = FactoryCalculadora();
calculadora.Trabalhar(); 