module.exports = {
    LinkedList: function(dataTwo,text)
    { 
        function LinkedList(){  
            this.head = null;
          }
          
            LinkedList.prototype.push = function(val){  
                var node = {
                   value: val,
                   next: null
                }
                if(!this.head){
                  this.head = node;      
                }
                else{
                  current = this.head;
                  while(current.next){
                    current = current.next;
                  }
                  current.next = node;
                }
              }
             var ll = new LinkedList();  
              // add
             
              ll.push(235);  
              ll.push(3);
              ll.push(245);  
              ll.push(123);
              console.log(ll.head);
              ll.head;  //Object value: 235  
              ll.head.next; //Object value: 245  
              ll.head.next.next //object value: 123      
    },
}