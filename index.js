// ***********Approach 1**********

// const buttons = document.querySelectorAll('.button');

// buttons.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         switch (event.target.id) {
//             case 'grey':
//                 document.body.style.backgroundColor = event.target.id;
//                 break;
//             case 'white':
//                 document.body.style.backgroundColor = event.target.id;
//                 break;
//             case 'blue':
//                 document.body.style.backgroundColor = event.target.id;
//                 break;
//             case 'yellow':
//                 document.body.style.backgroundColor = event.target.id;
//                 break;
//             default:
//                 break;
//         }
//     })
// })


// ***********Approach 2**********
const changeBackgroundColor=(event)=>{
    document.body.style.backgroundColor = event.target.id
}