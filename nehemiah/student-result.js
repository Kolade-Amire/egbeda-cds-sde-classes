let student_name = "nehemiah";
let score = -70;


if (score >= 70){
    console.log("Student Name:" + student_name);
    console.log("Score:" + score);
    console.log("Grade:" + "A");
    console.log("Status:" + "Pass");
}
else if(score >= 60){
    console.log("Student Name:" + student_name);
    console.log("Score:" + score);
    console.log("Grade:" + "B");
    console.log("Status:" + "Pass");
}
else if(score >= 50){
    console.log("Student Name:" + student_name);
    console.log("Score:" + score);
    console.log("Grade:" + "C");
    console.log("Status:" + "Pass");
}
else if(score >= 40){
    console.log("Student Name:" + student_name + "\n" + "Score:" + score + "\n" + "Grade:" + "D" + "\n" + "Status:" + "Fail");
    
}
else{
    console.log(`Student Name: ${student_name} \nScore: ${score} \nGrade: f  \nStatus: Fail`);
}



