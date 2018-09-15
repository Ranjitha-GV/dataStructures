"use strict"
var prompt = require('prompt-sync')();
/**
 * @description check if the given string is a palindrome or not
 */
function palindromeCheck()
{
    var word = prompt('Enter the word to be checked for palindrome: ');
    word = word.replace(/ /g,""); //ignore space 

function Deque()
{
  this.stack = new Array(); //create a array
  this.popback = function() //create a popback function to pop out elements from the stack
  {
  return this.stack.pop();
  }
 this.pushback = function(item) //create a pushback function to push elements into the stack
 {
  this.stack.push(item);
 }
 this.popfront=function() //create a pop function to pop element from the front of the stack
 {
  return this.stack.shift();
 }
 this.pushfront=function(item) //create a push function to push element into the front of the stack
 {
  this.stack.unshift(item);
 }
 this.printQue = function(){ //print the stack
     var str='';
     for(var i=0;i<this.stack.length;i++)
     {
         str+=this.stack[i]+" ";
     }
     return str;
}
this.dqsise=function(){ //size of the stack
    return this.stack.length;
}
}
        var deque=new Deque();
        var a=[];
        //str=str.trim();
        a = word.toLowerCase().split(''); //convert the string into lower case
        for(var i=0;i<a.length;i++)
            {
                deque.pushback(a[i]); //pushing the characters in the string into an array
            }
            console.log(deque.printQue());
          var flag=true;
          if(deque.dqsise()%2==0)  
          {
              while(deque.dqsise()>0)
              {
                  var a=deque.popfront(); //reverse the array
                  var b=deque.popback(); 
                  if(a!=b)  //if original array is not equal to reveresed array then its not a palindrome
                  {
                      flag=false;
                  }
              }
          }
                if(flag==true) //if flag is true then string is a palindrome
                {
                console.log("palindrome")
                process.exit();
                }
                else
                {
                    console.log("not a palindrome");
                    process.exit();
                }
            }

palindromeCheck();