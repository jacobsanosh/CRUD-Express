const mongoose = require('mongoose');
const express = require('express');

const conn = async() => {
    await mongoose.connect('mongodb://localhost:27017/sanosh');
}
conn().then(() => {
    console.log("success");
    //creating an schema 
    const CLASSSCHEMA = new mongoose.Schema({
        c_name: String,
        c_no: Number
    })
    const STUDENTSCHEMA = new mongoose.Schema({
        //adding validation 
        roll_no: {
            type: Number,
            min: [1, 'Too few eggs'],
            max: 72
        },
        name: {
            type: String,
            //used for displaying error if name is not given
            required: [true, "perilla nokki type chei"]
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            require: true
        },
        class_no: CLASSSCHEMA
    });

    const student_table = mongoose.model('student', STUDENTSCHEMA);
    const class_table = mongoose.model('class', CLASSSCHEMA);
    let insert = async() => {
        return new Promise((resolve, reject) => {
            //adding an single item
            const classs = new class_table({ c_name: "cs", c_no: 201 })
            classs.save()
            const student = new student_table({ roll_no: 71, name: 'sanosh', gender: 'male', class_no: classs });
            student.save();
            resolve("success")
                /* const student1 = new student_table({ roll_no: 71, name: 'sanosh' });
                 const student2 = new student_table({ roll_no: 72, name: 'saniya' });
                 const student3 = new student_table({ roll_no: 73, name: 'sanju' });
                 student_table.insertMany([student1, student2, student3], (err) => {
                     if (err) {
                         console.log("error on inserting many");
                         reject(new Error("error on insert many "))
                     } else {
                         console.log("inserted successfully")
                         resolve("success");
                     }
                 });*/


        })

    }


    insert().then(() => {
        //to update an data
        /* student_table.updateOne({ roll_no: 71 }, { name: "sanosh jacob" }, (err) => {
                 if (err) {
                     console.log(err);
                 } else {
                     console.log("updated successfully")
                 }
             })
             //to delete an data
              student_table.deleteOne({ name: "sanosh jacob" }, (err) => {
                  if (err) {
                      console.log(err);
                  } else {
                      console.log("deleted successfully")
                  }
              })
        student_table.deleteMany((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("all deleted successfully")
            }
        })*/
        student_table.find((err, data) => {
                if (err) {
                    console.log("error on retriving");
                } else {
                    // console.log(data)
                    data.forEach((ele) => {
                        console.log(ele.roll_no + " " + ele.name)
                    })
                }
            })
            //closing the connection
            // mongoose.connection.close();
    })
    console.log("hello")

}).catch((err) => {
    console.log(err)
})