function fun(arr){
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        console.log(`${arr[i]}:${count}`);
    }
};

let arr=[1,1,2,3,4,4];
fun(arr);
  