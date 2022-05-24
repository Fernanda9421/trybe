export default interface IStudent {
  name:string;
  registration:string;
  tests:number[];
  works:number[];

  sumGrades():number;
  averageGrades():number;
}
