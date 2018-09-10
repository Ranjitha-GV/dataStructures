"use strict"
var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');

function hashFunc()
{
    var arr = new Array(10);
    var list = new utility();
    var hash = fs.readFileSync('hash.txt');
    hash = hash.toString().split(" ");
    var arr = Array.from(hash);
    arr.sort();
    console.log(arr);
    var val = prompt("Please enter a value to search: ");
    for(var i=0;i<hash.length;i++)
    {
        list.add(hash[i]);
    }
    list.printList();
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
    }
        val = list.printList();
        for(var row=0;row<=10;row++)
        {
            for(var i=1; i<= hash.length;i++)
            {
                val = hash[i]%11;
                if(val==0)
                {
                    arr[row]=new Array(10);
                    for(var col=0; col<=10;col++)
                    {
                        arr[row][col] = arr[0][i];
                    }
                }

                if(val == 1)
                {
                    arr[row]=new Array(10);
                    for(var col=0; col<=10;col++)
                    {
                        arr[row][col] = arr[1][i];
                    }

                }
                if(val == 2)
                {
                    arr[row]=new Array(10);
                    for(var col=0; col<=10;col++)
                    {
                        arr[row][col] = arr[2][i];
                    }

                }
            }
        }
        for(var i=0;i<10;i++)
            {
                for(var j=0;j<10;j++)
                {
        console.log("The value is "+arr[i][j])
                }
            }

}
hashFunc();