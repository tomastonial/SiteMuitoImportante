function show(){
    window.location.href = 'https://www.youtube.com/watch?v=qnaGs3qlnAs';   
}
function leave(){
    const botaoNao = document.getElementById("NAO");
    const maxX = window.innerWidth - botaoNao.clientWidth;
    const maxY = window.innerHeight - botaoNao.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    botaoNao.style.left = `${x}px`;
    botaoNao.style.top = `${y}px`;
}