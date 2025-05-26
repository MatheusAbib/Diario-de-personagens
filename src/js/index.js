  // Botão de tema
        const botaoAlterarTema = document.getElementById("botao-alterar-tema");
        const body = document.querySelector("body");
        const imagemBotaotrocaDeTema = document.querySelector(".imagem-botao")

        botaoAlterarTema.addEventListener("click", () => {  
            const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
            
            if(modoEscuroEstaAtivo) {
                body.classList.remove("modo-escuro");
                imagemBotaotrocaDeTema.setAttribute("src", "./src/img/sun.png");
                imagemBotaotrocaDeTema.setAttribute("alt", "Ícone do sol");
            } else {
                body.classList.add("modo-escuro");
                imagemBotaotrocaDeTema.setAttribute("src", "./src/img/moon.png");
                imagemBotaotrocaDeTema.setAttribute("alt", "Ícone da lua");
                
                // Efeito de confete ao ativar o modo escuro
                criarConfetes();
            }
        });

        // Botão de voltar ao topo
        const botaoTopo = document.querySelector(".botao-topo");
        
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                botaoTopo.classList.add("visivel");
            } else {
                botaoTopo.classList.remove("visivel");
            }
        });
        
        botaoTopo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        // Efeito de confete
        function criarConfetes() {
            const cores = ["#FF00FF", "#00FFFF", "#FFFF00", "#FF00FF", "#00FF00", "#FF0000"];
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement("div");
                confetti.className = "confetti";
                confetti.style.left = Math.random() * 100 + "vw";
                confetti.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
                confetti.style.width = Math.random() * 10 + 5 + "px";
                confetti.style.height = Math.random() * 10 + 5 + "px";
                confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
                confetti.style.animationDelay = Math.random() * 2 + "s";
                
                document.body.appendChild(confetti);
                
                // Remover após a animação
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }
        }

        // Efeito hover nos cartões
        const cartoes = document.querySelectorAll(".cartao-pokemon");
        
        cartoes.forEach(cartao => {
            cartao.addEventListener("mouseenter", () => {
                const tipos = cartao.querySelectorAll(".tipo");
                tipos.forEach(tipo => {
                    tipo.style.transform = "rotate(" + (Math.random() * 20 - 10) + "deg)";
                });
            });
            
            cartao.addEventListener("mouseleave", () => {
                const tipos = cartao.querySelectorAll(".tipo");
                tipos.forEach(tipo => {
                    tipo.style.transform = "rotate(0deg)";
                });
            });
        });