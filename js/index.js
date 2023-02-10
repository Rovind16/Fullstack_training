//project 1

var a="Welcome to the Javascript Guide!";
var i,r=[],p=[];
for(i=0;i<=a.length;i++){
    if(a.charAt(i)==' ' || i==a.length){
        if(i==a.length){
            r.push(a.charAt(i));
        }
         p.push(r.reverse().join(""));
         r=[];
    }else{
        r.push(a.charAt(i));
    }
}
console.log(p.join(" "))

//project 2
var b=[1,2,3,4,5];
console.log(b=[]);


// project3
var enque=[1,2,3,4];
enque.push(5);
console.log(enque);
var deque = [1,2]
deque.pop()
console.log(deque)

// project4
for(var i=1;i<100;i++){
    if(i%3==0 && i%5==0){
        console.log(i + " fizzbuzz");
    }
    else if(i%3==0){
        console.log(i + " fizz");
    }
    else if(i%5==0){
        console.log(i + " buzz");
    }
}


//project5
var a = "Mary"
var b = "Army"
if((a.toLowerCase().split("").sort().join(""))==(b.toLowerCase().split("").sort().join(""))){
    console.log("True");
}else{
    console.log("False")
}

// project6
let person = "H. G. herne";
        array = person.split(" ");
        if(array.length == 3)
        {
            if(array[0].length ==2 && array[0][1]=="." && array[1].length ==2 && array[1][1]=="."  && array[2].length>2)
            {
                console.log(true);
            }
            else if(array[0].length > 2 && array[1].length ==2 && array[1][1]=="."  && array[2].length >2)
            {
                console.log(true);
            }
            else if(array[0].length > 2 && array[1].length>2 && array[2].length>2)
            {
                console.log(true);
            }
            else{
                console.log(false);
            }
        }
        else if(array.length==2)
        {
            if(array[0].length == 2 && array[0][1] == "."  && array[1].length > 2)
            {
                console.log(true);
            }
            else{
                console.log(false)
            }
            
        }
        else{
            console.log(false);
        }
