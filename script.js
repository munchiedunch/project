var user = document.body.querySelector(".name")
var word = document.body.querySelector(".pass")
var para = document.body.querySelector(".info")
var long=[]

document.body.querySelector(".push").addEventListener("click",function(){
  if(user.value=="cool" && word.value=="password"){
    document.open()
    document.write("<button class='all'>View Grade</button>")
    document.write("<button class='addition'>Add Grade</button>")
    document.write("<h1 class='heading'></h1>")
    document.write("<div class='message'></div>")
    document.write("<div class='list'></div>")
    document.body.querySelector(".all").addEventListener("click",function(){
      view()
    })
    document.body.querySelector(".addition").addEventListener("click",function(){
      add()
    })
    view()
  }
  
  
  else if(user.value!="cool"){para.innerHTML="Username is not correct"
  if(word.value!="password"){var blank= document.createElement("div")
  blank.innerHTML="Password is not correct"
  document.body.appendChild(blank)                                  }}
  else if(word.value!="password"){
    para.innerHTML=""
    var blank= document.createElement("div")
  blank.innerHTML="Password is not correct"
  document.body.appendChild(blank)                                
  }
 
  
})

function add(){
  document.body.querySelector(".heading").innerHTML="Add Grade"
  document.body.querySelector(".message").innerHTML=""
  document.body.querySelector(".list").innerHTML=""
 var their =document.createElement("input")
 their.placeholder="Student Name..."
  document.body.querySelector(".message").appendChild(their)
 var brake=document.createElement("input")
 brake.placeholder="Student Grade..."
  document.body.querySelector(".message").appendChild(brake)
  var submit= document.createElement("button")
  submit.innerHTML="Submit"
  document.body.querySelector(".message").appendChild(submit)
  submit.addEventListener("click",function(){
    var grade=Number(brake.value)
    if( grade >= 0 && grade <=100){
      long.push({
        Student:their.value,
        Grade:brake.value,
      })
      view()
    }
    else{document.body.querySelector(".list").innerHTML="Grade is Invalid"}
  })
}
function view(){
  document.body.querySelector(".heading").innerHTML="View Grades"
   document.body.querySelector(".message").innerHTML=""
   grades() 
}

function grades(){
  document.body.querySelector(".list").innerHTML=""
  for(var i=0;i<long.length;i++){
    var item=document.createElement("div")
    item.innerHTML="student: "+long[i].Student+" Grade: "+long[i].Grade
    document.body.querySelector(".list").appendChild(item)
  }
}