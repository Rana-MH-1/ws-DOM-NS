
//const myInput = document.getElementsByTagName('input')


//const myInput = document.getElementsByClassName('form-control')
//console.log(myInput); //HTMLCollection (array-like)
//myInput[0].remove()
//console.log(myInput) //Live => the first el was deleted

// const myInput = document.getElementById('exampleFormControlInput1')
// console.log(myInput) //HTML Element

// const myInput = document.querySelector('input')
// console.log(myInput); //return one element

//const myInput = document.querySelector('.form-control')
 // return one element

// const myInput = document.querySelector('#exampleFormControlInput1')
// console.log(myInput);
// return one element

//const myInput = document.querySelectorAll('#exampleFormControlInput1')
//console.log(myInput); //return NodeList (array-like)
//myInput[0].remove()
//console.log(myInput) //static => No modification is shown




//the difference between HTMLCollection and NodeList ==> the first is live and the second is static

const container = document.querySelector('.container')
// method1 to change or add a class
//container.className= 'container2'
//method2
//container.setAttribute("class",'container3')
// ==> change the className
//container.classList.add('container4')
//console.log(container);
//add a className + previous class

//add an event of type click
//selectionner les els
const btn = document.getElementById('myBtn')
//const text = document.getElementById('yellow')
//déclencher evnmt du click 
// btn.addEventListener('click',function(){
//     text.style.color = 'red'
//     //change text color
// })


btn.addEventListener('click',function(){
    //1) create elements 
const row = document.createElement('div')
row.className = 'row'

const text = document.createElement('h3')
const myInput = document.getElementById('exampleFormControlInput1')
text.innerHTML = myInput.value
//console.log(text);

const DeleteBtn = document.createElement('button')
DeleteBtn.className = 'btn btn-danger'
DeleteBtn.innerHTML = 'Delete'
//console.log(DeleteBtn);

const DoneBtn = document.createElement('button')
DoneBtn.className = 'btn btn-success'
DoneBtn.innerHTML = 'Done'
//console.log(DoneBtn);

const line = document.createElement('hr')

//append els with row div
row.appendChild(text)
row.appendChild(DeleteBtn)
row.appendChild(DoneBtn)
row.appendChild(line)
console.log(row);

//append row div as a child elin container div
container.appendChild(row)

myInput.value=''

//Delete task
DeleteBtn.addEventListener('click',function(){
    row.remove()
})

//toggle Task ==> marra mchatba (Done) w mara 
DoneBtn.addEventListener('click',function(){
    //--toggle sur contenu button
    if(DoneBtn.innerHTML =='Done'){
        DoneBtn.innerHTML= 'UnDone'
    }
    else {
        DoneBtn.innerHTML= 'Done'
    }
    //toggle sur le text
    //1)
   // text.classList.toggle('red')
    //2) 
    if(text.style.color=='black'){
        return text.style.color = 'red';
        
    }
    else {
        return text.style.color = 'red'
    }


})






})














