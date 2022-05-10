type Numbers = {
  num1: number;
  num2: number;
}

type Address = {
  street: string;
  number: number;
  city: string;
}

export function sum(n: Numbers):string {
  return `A soma dos números é ${n.num1 + n.num2}`
}

export function showAddress(a: Address):string {
  return `Street: ${a.street}
  Number: ${a.number}
  City: ${a.city}`
}

type PhysicalStatesOfMatter = "liquid" | "solid" | "gaseous";
type SO = "linux" | "mac os" | "windows";

export function docId(id: number | string):string {
  return `Identidade: ${id}`;
}
