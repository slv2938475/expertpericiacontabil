document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector("span.counter");
    if (!counter) return;

    const target = parseInt(counter.getAttribute("data-target"), 10) || 30;
    const duration = 2000; // duração da animação em ms
    const start = 0;
    let startTime = null;
     function animateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        counter.textContent = value;

        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        } else {
            counter.textContent = target;
        }
    }

    requestAnimationFrame(animateCounter);
});
document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector("span.counteryears");
    if (!counter) return;

    const target = parseInt(counter.getAttribute("data-target"), 10) || 20;
    const duration = 2000;
    const start = 0;
    let startTime = null;

    function animateCounter(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        counter.textContent = value;
        if (progress < 1) {
            requestAnimationFrame(animateCounter);
        }
        else {
            counter.textContent = target;
        }
    }
    requestAnimationFrame(animateCounter);
    const counter2 = document.querySelector("span.counteryears2");
    if (!counter2) return;
    const target2 = parseInt(counter2.getAttribute("data-target"), 10) // 20;
    const duration2 = 2000;
    const start2 = 0;
    let startTime2 = null;
    function animateCounter2(timestamp) {
        if (!startTime2) startTime2 = timestamp;
        const progress2 = Math.min((timestamp - startTime2) / duration2, 1);
        const value2 = Math.floor(progress2 * (target2 - start2) + start2);
        counter2.textContent = value2;
        if (progress2 < 1) {
            requestAnimationFrame(animateCounter2);
        }
        else {
            counter2.textContent = target2;
        }
    }
})

window.onscroll = function() {navbRolagem()};

function navbRolagem() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("navbar").style.background = "#222";
        document.getElementById("navbar").style.fontSize = "11px";
        document.getElementById("logo").innerText = "Contador Jorge Valle \ Expert Perícia Contábil - Home";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("logo").style.display = "block";
        document.getElementById("logo").style.animation = "logoAnimation 1s ease-in-out";
    }
    else {
        document.getElementById("navbar").style.top = "-5";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.fontSize = "16px";
        document.getElementById("logo").innerText = "Contador Jorge Valle \ Expert Perícia Contábil";
        document.getElementById("navbar").style.color = "white";
        document.getElementById("logo").style.display = "none";
    }
}

function efeitoEscrever (elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        },75 * i);
    })
}

const titulo = document.getElementById('textH');
onload = efeitoEscrever(titulo);