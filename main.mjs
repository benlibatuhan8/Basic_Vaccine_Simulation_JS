import Doctor from './doctor.mjs'
var patient1={
    name:"Batuhan",
    vaccines:[]
}
var vaccine2={
    name:"Sinovac"
}
var patient2={
    name:"Emine",
    vaccines:[]
}
var vaccine1={
    name:"Biontech-Pfizer"
}

var doctor1= new Doctor("Bünyamin")
doctor1.vaccinate(patient1,vaccine1)
doctor1.vaccinate(patient2,vaccine1)
doctor1.printPatientsName()

