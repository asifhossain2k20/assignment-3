//1st Problem Solution

function feetToMile(feet){

    var mileConvert=0.000189394*feet;
    return mileConvert;    
}

var feet=12; //input your feet value here
var mile=feetToMile(feet);
if(0<=feet){
console.log("After Converting Feet to Mile : ",mile ,"mile");
}
else{
    console.log("Feet to mile Doesn't Converted into Negetive so Try Again");
}


//2nd Problem Solution

function woodCalculator(chair,table,bed){
    var chairWood,tableWood,bedWood;
 
       if(0<=chair){
      chairWood= chair*1;
       }
       if(0<=table){
       tableWood= table*3;
       }
       if(0<=bed){
        bedWood = bed*5;
       }   
     total=(chairWood+tableWood+bedWood);
     return total;
  
}

var chair=0,table=0,bed=0;//input here

var totalWood=woodCalculator(chair,table,bed);

console.log("Total Wood Need : ",totalWood," Qubic Feet");


//3rd Problem Solution

function brickCalculator(floorr){
      
    var sum1=0,sum2=0,sum3=0;  
    for(var i=1;i<=floorr;i++){
          if(i<=10){
              sum1=sum1+1500;
          }
          
         if(11<=i){
             if(i<21){
              sum2=sum2+1200;
             }
             
         }
         if(21<=i){
            sum3=sum3+1000;
        }
        
        
      }
            var  totalSum;
          
           totalSum=sum1+sum2+sum3;
           return totalSum;
           
    }
      
 var floorr=30; //input here
 var totalBricks=brickCalculator(floorr);
 if(0<floorr){
 console.log("Total Bricks Need For Build this Construction : ",totalBricks);
 }
 else{
     console.log("You Entered Negative so Enter Positive Value & Bricks Need : 0");
 }


//4th problem solution

function tinyFriend(names){
    var temp=1000,updateIndex,c=0;
    for(var i=0;i<names.length;i++){
    
        if(names[i].length<temp){
            updateIndex=i;
            temp=names[i].length;
           
        }
      }
      if(names=="" || names==" "){
          console.log("Here is Nothing");
    
      }
      else{
         console.log("Smallest name : ",names[updateIndex]);
      }
    }


    var names=["Asif","Hossain","jhonkar Vai"]; //input here
    tinyFriend(names);
    