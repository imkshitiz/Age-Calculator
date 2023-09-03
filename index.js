const btnE1 = document.getElementById("btn");
const birthdayE1 = document.getElementById("birthday");
const resultE1 = document.getElementById("result");


function calculateAge(){
    const birthdayVAlue = birthdayE1.value;
    if(birthdayVAlue === ""){
        alert("Please enter your age");
    } else {
        const age = getAge(birthdayVAlue);
        resultE1.innerText =`Your age is ${age} ${age > 1 ? "Years" : "Year"} old`;
    }
}

function getAge(birthdayVAlue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayVAlue);
    
    let age = currentDate.getFullYear() -  birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month < 0 || 
        (month === 0 && currentDate.getDate()<birthdayDate.getDate())
) {
    age--;
}
return age;

}
btnE1.addEventListener("click",calculateAge);
