// template_soofpy8
// service_o3qlhbk
// key GGimt4Uzyq8T5Zhzn

// advanced JS portfolio 2:00 timestamp
// addressed in Discord JS channel 11/12/22 around 1:30pm

//  function contact(event){
//     event.preventDefault();
//     const loading = document.querySelector('.modal__overlay--loading')
//     const success = document.querySelector('.modal__overlay--success')
//     loading.classList += " modal__overlay--visible";
//     emailjs
//         .sendForm(
//             'service_o3qlhbk',
//             'template_soofpy8',
//             event.target,
//             'GGimt4Uzyq8T5Zhzn'
//         ).then(() => {
//             loading.classlist.remove(".modal__overlay--visible");
//             success.classList += " modal__overlay--visible";
//             console.log("sending Worked")
//         }).catch(() => {
//             // loading.classlist.remove(".modal__overlay--visible");
//             alert(
//                 "The email service is temporarily unavailable. Please reach out directly through chayes.editing@gmail.com - Sorry for the inconvienence."
                
//             )
//         })
    
// }
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
            'service_o3qlhbk',
            'template_soofpy8',
            event.target,
            'GGimt4Uzyq8T5Zhzn'
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on email@email.com"
        );
      });
  }

let isModalOpen = false;
function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

let contrastLightMode = true;
function toggleContrast(){
    contrastLightMode = !contrastLightMode;
    if(contrastLightMode){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}

const scaleFactor = 1 / 20;
function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
  
    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      // Added rotate after tutorial
      shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
    }
  }