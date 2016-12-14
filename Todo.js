/**
 * Created by Mxia on 2016/12/14.
 */
//获取文本框
var input = document.querySelector("#todo");
var ul =document.querySelector("#newList");
var doneul = document.querySelector("#doneList");
var checkbox = document.querySelector("#check-box");
var doneNum = document.querySelector("#doneNum");
var num = document.querySelector(".result");

//获取回车事件
input.onkeydown = function(event){

    if(event.keyCode==13){
        var value = input.value;
        //var value ="";
        //var a = Boolean(value);//转化成boolean类型
        if(!value==""){
            //把文本框的内容放到list的中 并且把文本框内容清空
            createTodoElement(input.value);
            input.value="";
        }
    }
}
//创建要生成的标签
function createTodoElement(todo,done){
    var li = document.createElement("li");

    var a = document.createElement("a");
    var aspan = document.createElement("span");
    var span = document.createElement("span");
    var textCode = document.createTextNode(todo);

    a.setAttribute("href","javascript:;");
    aspan.setAttribute("class","check-box");

    span.appendChild(textCode);
    a.appendChild(aspan);
    li.appendChild(a);
    li.appendChild(span);

    if(!done){
        ul.appendChild(li);
    }else{
        doneul.appendChild(li);
        num.innerText=parseInt(num.innerText)+1;
    }
}

//初始值
var todos = [
    {text:"明天开始做项目",done:false},
    {text:"从手头的事情做起",done:true},
    {text:"仔细细心脚踏实地",done:true}
]
//初始化函数
function init(){
    count = 0;
    for(var index=0;index < todos.length;index++){
        var todo = todos[index];
        createTodoElement(todo.text,todo.done);
        if(todo.done){
            count++;
        }
    }
    num.innerText=count;
}
init();
//事件委托机制
document.onclick=function(event){
    var target = event.target;
    if(target.getAttribute("class")=="check-box"){
        checkBoxClick(target);
    }
}
//复选框
function checkBoxClick(target){
    //获取ul
    var getUl = target.parentNode.parentNode.parentNode;
    var li = target.parentNode.parentNode;
    if(getUl.getAttribute("id")=="newList"){
        doneul.appendChild(li);
        num.innerText=parseInt(num.innerText)+1;
    }else{
        ul.appendChild(li);
        num.innerText=parseInt(num.innerText)-1;
    }
}
//doneNum点击事件
doneNum.onclick =function (){

    if(doneul.getAttribute("class").indexOf("hide")!=-1){
        doneul.setAttribute("class","list done");
    }else{
        doneul.setAttribute("class","list done hide");
    }
}
