"use strict"
var prompt = require('prompt-sync')();
var utility =require('/home/d/Desktop/labsfirst/dataStructures/utility/utilityData.js');
var fs=require('fs');
/**
 * @description hashing function implementation
 * @param Array holds the final 2D array
 * 
 */
function hashFunc()
{
    var arr = new Array(10),array=[],arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[],arr7=[],arr8=[],arr9=[],arr10=[],arr11=[];
    var list = new utility();
    var hash1 = fs.readFileSync('hash.txt'); //reading the hash.txt file into this programe
    hash1 = hash1.toString().split(" ");  //convert string into an array
    var hash = []
    for(var i = 0 ; i < hash1.length; i++)
    {
        if(hash1 != '')

        {
            hash.push(hash1[i]);
        }
    }
    var arr = Array.from(hash); //convert string into an array
    arr.sort(); //sort the given array
    console.log(arr);
    var val = prompt("Please enter a value to search: ");
    for(var i=0;i<hash.length;i++)
    {
        list.add(hash[i]); //add the elements of the array into a linked list
    }
    list.printList();
    var result = list.indexOf(val); //to find the index of the given element
    if(result == -1)
    {
        console.log("Element not found!!");
       list.add(val); //add element to the array
       hash.push(val)
       
    }
    else
    {
        console.log("Element found!!");       
        list.removeElement(val); //remove element from the array
        var cat = hash.indexOf(val);
        hash.slice(cat,1);
    }

     array = list.printList();
     fs.writeFile('/home/d/Desktop/labsfirst/dataStructures/main/hash.txt', array , function(){console.log('done')})
        // val = list.printList();
        // console.log(val);

        for(var j=0; j<hash.length;j++)
        {
            var res = parseInt(hash[j])%parseInt(hash.length); //to determine the reminder
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
        var array=[]; //pushing into 2D array
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
        //writing the final result into the file
        fs.writeFile('/home/d/Desktop/labsfirst/dataStructures/main/hash2.txt', array.join('-->') , function(){console.log('done')})
}
hashFunc();