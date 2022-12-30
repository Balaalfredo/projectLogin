const para = document.querySelectorAll('.para');
const cir = document.querySelector('.cir');
const slide = document.querySelector('.slide');
const rightBox = document.querySelector('.right-box');






// cir.addEventListener('click', () => {
//     if (cir.classList.contains('selectcir')) {
//         cir.classList.remove('selectcir');
//         if (slide.classList.contains('selectslide')) {
//             slide.classList.remove('selectslide');
//             // rightBox.style.width = '0%';
//         }
//     }
//     else {
//         cir.classList.add('selectcir'); slide.classList.add('selectslide');
//         // rightBox.style.width = '48%';
//     }
// })


para.forEach((a) => {
    a.addEventListener('click', () => {
        if (a.classList.contains('selectitalic')) {
            a.classList.remove('selectitalic');
        }
        else { a.classList.add('selectitalic'); }
    })
})
const leftBox = document.querySelector('.inner-border');



leftBox.addEventListener('mouseenter', (event) => {
    const star = document.createElement('div');
    star.setAttribute('class', 'star');
    star.innerText = 'cursor';
    star.style.letterSpacing = '2px';
    star.style.padding = '5px';
    star.style.top = `${event.offsetY}px`;
    star.style.left = `${event.offsetX}px`;
    leftBox.appendChild(star);

    leftBox.addEventListener('click', () => {

        if (star.classList.contains('selectanimation')) {
            star.classList.remove('selectanimation');

        }
        else {
            star.classList.add('selectanimation');
            // const stt = document.createElement('div');
            // stt.setAttribute('class', 'star');
            // leftBox.appendChild(stt);
        }
    })

})



leftBox.addEventListener('mouseleave', () => {
    const st = leftBox.querySelector('.star');
    leftBox.removeChild(st);
})

leftBox.addEventListener('mousemove', (event) => {
    const random = Math.random() * 36;
    const randint = Math.floor(random * 10);
    const bounding = leftBox.getBoundingClientRect();
    const ey = event.clientY;
    const ex = event.clientX;
    const top = bounding.top;
    const left = bounding.left;
    const st = leftBox.querySelector('.star');
    st.style.top = `${ey - top}px`;
    st.style.left = `${ex - left}px`;
    st.style.borderColor = `hsl(${randint},100%,60%)`;
    // st.style.background = `hsl(${randint},100%,20%)`;
})











const userIcon = document.querySelector('#userIcon');
const userr = document.querySelector('.userr');

const emailIcon = document.querySelector('#emailIcon');
const emaill = document.querySelector('.emaill');

const passwordIcon = document.querySelector('#passwordIcon');
const passwordd = document.querySelector('.passwordd');

userIcon.addEventListener('click', () => {
    if (userr.classList.contains('selectuser')) {
        userr.classList.remove('selectuser');
    }
    else {
        userr.classList.add('selectuser');

        userr.addEventListener('focus', () => {
            userr.style.borderBottom = '6px solid red';
        })
        userr.addEventListener('blur', () => {
            userr.style.borderBottom = '4px solid rgb(200, 255, 0)';
        })

    }
})

emailIcon.addEventListener('click', () => {
    if (emaill.classList.contains('selectemail')) {
        emaill.classList.remove('selectemail');
    }
    else {
        emaill.classList.add('selectemail');

        emaill.addEventListener('focus', () => {
            emaill.style.borderBottom = '6px solid red';
        })
        emaill.addEventListener('blur', () => {
            emaill.style.borderBottom = '4px solid rgb(200, 255, 0)';
        })
    }
})


passwordIcon.addEventListener('click', () => {
    if (passwordd.classList.contains('selectpassword')) {
        passwordd.classList.remove('selectpassword');
    }
    else {
        passwordd.classList.add('selectpassword');
        passwordd.addEventListener('focus', () => {
            passwordd.style.borderBottom = '6px solid red';
        })
        passwordd.addEventListener('blur', () => {
            passwordd.style.borderBottom = '4px solid rgb(200, 255, 0)';
        })
    }
})