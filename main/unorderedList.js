var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');
var dataTwo = fs.readFileSync('dataTwo.txt');
dataTwo = dataTwo.toString().split(" ");


function LinkedList()
{
    var text =  prompt("Enter the text to search: ");
    console.log(dataTwo);
    utility.LinkedList(dataTwo,text);
}
LinkedList();