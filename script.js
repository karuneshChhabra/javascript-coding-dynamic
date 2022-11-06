

let squares = document.querySelectorAll(".square");


const values={red:0,blue:0,green:0};
squares.forEach(square =>{
  square.onclick = () =>{
    console.log(square.value);
    values[square.value] +=1;
    square.innerText =  values[square.value] ;
  }
});

const clearBtn = document.getElementsByClassName('clearBtn')[0];

const clearBtnClick = () => {
  console.log("clearBtn");
  values['red'] =0;
  values['blue'] =0;
  values['green'] =0;
  squares.forEach(square =>{
    square.innerText =  '' ;

  });  
  
}

 clearBtn.onclick = () =>{
 clearBtnClick();
   
 };


console.log(values);
