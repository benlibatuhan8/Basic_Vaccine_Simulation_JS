
    class Doctor {
    constructor(name){
        this.name=name
        this.patients=[]
        this.vaccineRequests=[]
    }
    vaccinate(patient,vaccine){
        patient.vaccines.push(vaccine)
        this.patients.push(patient)
        
    }
    printPatientsName(){
        this.patients.forEach(patient=>{
            console.log(patient.name)
        })
    }

}
export default Doctor

