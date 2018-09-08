"use strict"
var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilitystack.js');
var fs=require('fs');

function Stack()
{
    var expr = prompt("Please enter an expression: ");
    var stack = new utility()
    var count = 0 , flag =0, a=0;
    for (var i=0; i<expr.length; i++)
        {
        if (expr[i]=='(' ) 
        {
            // Push the element in the stack
            stack.push('(');
            count ++;
        }
        else if(expr[i]==')')
        {
            stack.pop()
            flag++;
        }
    }
 if(count == flag)
 {
     console.log(' The expression is Balanced ' );
 }
 else
 {
     console.log(" The expression is not UnBalanced ");
 }
}
Stack();