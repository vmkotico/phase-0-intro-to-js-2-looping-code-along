const arr1 = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise";


function writeCards(arr1, event) {
    let newArray = [];
   for (let i = 0; i < arr1.length; i++) {
    newArray.push (`Thank you, ${arr1[i]}, for the wonderful ${event} gift!`)
       debugger;
       
        }
        return newArray;
    }


    function countDown(j =10) {
        while (j >= 0) {
            console.log(j --);
        }

    }
    