

// const exampSwitchCase=(n)=>{

//     var a = parseInt(n / 10); 
//     var b = parseFloat(n % 10);
    
//     if (a >= 1 && a <= 9) {
//         switch (a) {
//             case 1: a = "O'n "; 
//                 break;
//             case 2: a = "Yigirma "
//                 break;    
//             case 3: a = "O'ttiz "
//                 break;    
//             case 4: a = "Qirq "
//                 break;    
//             case 5: a = "Ellik "
//                 break;    
//             case 6: a = "Oltmish "
//                 break;    
//             case 7: a = "Yetmish "
//                 break;    
//             case 8: a = "Sakson "
//                 break;    
//             case 9: a = "To'qson "
//                 break;    
        
//             default: console.log("Kiritilgan son 10 dan katt 100 dan kichik ==========> ");
//                 break;
//         }
//     }

//     if (b >= 1) {
//         switch (b) {
//             case 1: b = "bir ";
//                 break;
//             case 2: b = "ikki "
//                 break;    
//             case 3: b = "uch "
//                 break;    
//             case 4: b = "to'rt "
//                 break;    
//             case 5: b = "besh "
//                 break;    
//             case 6: b = "olti "
//                 break;    
//             case 7: b = "yetti "
//                 break;    
//             case 8: b = "sakkiz "
//                 break;    
//             case 9: b = "to'qqiz "
//                 break;    
        
//             default: console.log("Kiritilgan son 0 dan katta 10 dan kichik");
//                 break;
//         }
//     }

//     console.log(a+b);

// }

// exampSwitchCase(41)



                                //   ____________1_____a,b________

// const cars = ['Nexia', 'Damas', 'Tico','matiz','Malibu','sPark','Lacetti','epica'];
// var FullNameCars = cars.join('');
// sum_A = 0;
// sum_B = 0;
// for (let i = 0; i < FullNameCars.length; i++) {
   
//     (FullNameCars[i] === ('a' || 'A')) && sum_A ++;
//     (FullNameCars[i] === ('b' || 'B')) && sum_B ++;
    
// }
// console.log(sum_A);
// console.log(sum_B);



                                // ____________2_____sum________


// const nums = [1, 2, 3, 'Eldor', 4, 5, 6,'WebDeveloper', 7, 8];
// sum = 0;

// nums.map((value)=>{
//    ( typeof(value) === 'number') && (sum += parseInt(value));
    
// })

// console.log(sum);


                           // ____________3______min+1__max-1_____


                           
// const nums = [1, 21, 6, 7, 8, 11, 3, 4, 5];
// nums.sort((a,b)=> a - b);

// console.log(nums[1], nums[nums.length-2]);


                        // ____________4_____toq__juft______

// const arr = [1, 21, 6, 7, 8, 11, 3, 4, 5];

// var sum1 = 0; 
// var sum2 = 0;

// arr.map((s,i)=>{
//     i % 2 == 0 ?  (sum1 +=s):(sum2 +=s);
// })

// console.log(sum1);
// console.log(sum2);




                           // ____________5_____reverse()________

// const arr = [1, 21, 6, 7, 8, 11, 3, 4, 5];

// arr.map(function(value,index){
//     console.log(arr[arr.length-1-(index++)]);
// })

               


                        // ____________6____filter()_________


// const arr = [1, 21, 6, 7, 8, 11, 3, 4, 5];
// const cars = ['Nexia', 'Damas', 'Tico','matiz','Malibu','sPark','Lacetti','epica'];

// arr.map((value)=> {
//     value >=6 && console.log(value);
// });

// cars.map((value)=> {
//     value[0] !== 'M' && console.log(value);
// });





                          // ____________7_____sort()________

// const array = [1, 21, 6, 7, 8, 11, 3, 4, 5];                          
// var a =0;
// for (let i = 0; i < array.length; i++) {
    
//     for (let j = 0; j < array.length; j++) {
        
//         if(array[i] < array[j]){
//             a = array[i];
//             array[i] = array[j];
//             array[j] = a;
//         }
        
//     }
    
// }

// for (let i = 0; i < array.length; i++) {
    
//     console.log(array[i]);
    
// }





                                        

// let students = [
//     {
//         id : 1,
//         Name : 'Eldor',
//         MiddleName : 'WebDeveloper',
//         Status : 'Talaba',
//         Year : 1999,
//     },
//     {
//         id : 2,
//         Name : 'Ali',
//         MiddleName : 'Coder',
//         Status : 'Talaba',
//         Year : 2001,
//     },
//     {
//         id : 3,
//         Name : 'Vali',
//         MiddleName : 'AndroidDeveloper',
//         Status : 'Talaba',
//         Year : 2021,
//     },
//     {
//         id : 4,
//         Name : 'Messi',
//         MiddleName : 'IosDeveloper',
//         Status : 'Talaba',
//         Year : 1992,
//     },
// ]


// const onSorton_Delete =(value,key)=>{
    
//     var arr = [];
//     var i = 0;

//     students.map((a)=>{
    
//     (a[`${key}`] == value) && (arr[i++] = a);
         
//     })

//     console.log(arr);
    
// }

// onSort('Ali','Name');




// var str1 = 'ABCD'.split('');
// var str2 = 'CDAB'.split('');

// str1 == str1 ? console.log('true') : console.log('false');



// arr1 = ['a','b','c','d','e','f','g'];
// arr2 = ['a','b','g'];
// arr3 = ['a','b','c','d','e','f','g'];
// arr4 = ['a','b','g'];





// let array = [2, 8, 8, 8, 8, 8,8, 9, 7];
// var m = false;
// let i = array.length-1;
        
//         if (array[0] < array[i]){
            
//             for (let j = array.length-2; j > 0;  j--) { 

//                 // array[i] <= array[j] ? m++  : (console.log(`${j} chi index = `+array[j]))  
//                 // m === array.length-2 && console.log('0');

//                 if (array[i] >= array[j]){
//                     console.log(`${j} chi index = `+array[j]);
//                     m = true;
//                     break;
//                 }     
//              }
//              m != true && console.log('0');  
            
//         }else{
//             console.log('1 chi element oxirgi elementdan katta ');
//         }
     



var k = 0;

for (let i = 10; i <= 15; i++) {
    k++;
    for (let j = 1; i <= k; j++) {

        console.log(i);
        
    }
    
}

