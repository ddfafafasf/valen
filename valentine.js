document.addEventListener('DOMContentLoaded', function() {
    const heartContainer = document.querySelector('.main-heart-container');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Efeito de pulsação extra ao passar o mouse no coração
    heartContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    heartContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Efeito para o botão SIM
    yesBtn.addEventListener('click', function() {
        alert('💖 Ebaaa! Você fez meu coração feliz! 💖\n\nAgora somos Valentines!');
        // Efeito de explosão de corações
        createHeartRain();
    });
    
    // Efeito divertido para o botão NÃO
    noBtn.addEventListener('mouseover', function() {
        // Faz o botão fugir do cursor
        const x = Math.random() * window.innerWidth * 0.7;
        const y = Math.random() * window.innerHeight * 0.7;
        this.style.position = 'absolute';
        this.style.left = x + 'px';
        this.style.top = y + 'px';
    });
    
    noBtn.addEventListener('click', function() {
        alert('😉 Eu sabia que você ia dizer SIM no final!\nVou considerar isso como um "SIM" disfarçado!');
        createHeartRain();
    });
    
    // Adicionar mais camadas de sombra para efeito melhorado
    for (let i = 0; i < 3; i++) {
        const shadow = document.createElement('div');
        shadow.className = 'heart-shadow';
        shadow.style.animationDelay = `${i * 0.2}s`;
        shadow.style.opacity = 0.3 - (i * 0.1);
        heartContainer.appendChild(shadow);
    }
    
    // Função para criar chuva de corações
    function createHeartRain() {
        const colors = ['#e91e63', '#f48fb1', '#ffeb3b', '#4caf50', '#2196f3'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'falling-heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
                heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    }
});

// Estilo dinâmico para corações caindo (adicionado via JS para não precisar editar o CSS)
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .falling-heart {
            position: fixed;
            top: -50px;
            z-index: 100;
            animation: falling linear forwards;
            pointer-events: none;
        }
        
        @keyframes falling {
            to {
                transform: translateY(100vh);
            }
        }
    </style>
`);