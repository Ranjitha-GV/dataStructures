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
    var res =  prompt("Enter the text to search: ");
    for(var i=0;i<number.length;i++)
    {
        list.add(number[i]);
    }
    var result = list.indexOf(res);
    if(result == -1)
    {
        console.log("Element not found!!");
        list.add(res);
    }
    else
    {
        console.log("Element found!!");       
        list.removeElement(res);
    }
        res = list.printList();
        list.sortList();
        fs.writeFile('/home/d/Desktop/labsfirst/dataStructures/main/number.txt',res,function(){console.log('done')})
        console.log("Updated list is ===> ");
        console.log(res);
}
LinkedList();