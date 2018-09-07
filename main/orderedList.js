"use strict"
var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');



function LinkedList()
{
    var number = fs.readFileSync('number.txt');
    number = number.toString().split(" ");
    number.sort();
    var list = new utility();
    console.log("The contents of the list are ====> "+number)
    var val =  prompt("Enter the text to search: ");
    for(var i=0;i<number.length;i++)
    {
        list.add(number[i]);
    }
    var result = list.indexOf(val);
    if(result == -1)
    {
        console.log("Element not found!!");
        list.add(val);
    }
    else
    {
        console.log("Element found!!");        
        list.removeElement(val);
        fs.truncate('/home/d/Desktop/labsfirst/dataStructures/main/dataTwo.txt',function(){console.log('done')})

    }
    console.log("Updated list is ===> "); 
    list.printList();
    
}
LinkedList();