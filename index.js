    console.log("script connected");

    const a = document.querySelector('h1')
    a.innerHTML='changed';
    console.log(a);
    a.style.backgroundColor='red';

    a.addEventListener('click' ,function(){
        console.log('print')
    })
    