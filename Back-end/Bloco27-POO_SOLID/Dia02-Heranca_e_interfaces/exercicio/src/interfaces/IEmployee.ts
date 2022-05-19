// `Interface`: Employee
// `Attributes`:
//     - registration: número do registro
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - generateRegistration: retorna uma string única gerada como registro

export default interface IEmployee {
  registration:number;
  salary:number;
  admissionDate:Date;

  generateRegistration():string;
}