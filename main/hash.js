"use strict"
var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');

function hashFunc()
{
    var arr = new Array(10),arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[],arr11=[];
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
        for(var j=0; j<hash.length;j++)
        {
            var res = parseInt(hash[j])%parseInt(hash.length);
            switch(parseInt(res))
            {
                case 0: 
                arr1.push(hash[j]);
                break;

                case 1:
                arr2.push(hash[j]);
                break;

                case 2:
                arr3.push(hash[j]);
                break;

                case 3:
                arr4.push(hash[j]);
                break;

                case 4:
                arr5.push(hash[j]);
                break;

                case 5:
                arr6.push(hash[j]);
                break;

                case 6:
                arr7.push(hash[j]);
                break;

                case 7:
                arr8.push(hash[j]);
                break;

                case 8:
                arr9.push(hash[j]);
                break;

                case 9:
                arr10.push(hash[j]);
                break;

                case 10:
                arr11.push(hash[j]);
                break;

            }
        }
        var array=[];
        array.push(arr1);
        array.push(arr2);
        array.push(arr3);
        array.push(arr4);
        array.push(arr5);
        array.push(arr6);
        array.push(arr7);
        array.push(arr8);
        array.push(arr9);
        array.push(arr10);
        array.push(arr11);
        
        for( var k=0;k<array.length;k++)
        {
            console.log("Slot "+k+" --> "+array[k].join('-->'));
        }
        fs.writeFile('/home/d/Desktop/labsfirst/dataStructures/main/hash2.txt', array.join('-->') , function(){console.log('done')})
}
hashFunc();