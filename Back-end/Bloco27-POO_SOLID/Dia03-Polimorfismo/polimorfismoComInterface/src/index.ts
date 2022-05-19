import IPerson from "./interfaces/Person";
import PhysicalPerson from "./classes/PhysicalPerson";
import LegalPerson from "./classes/LegalPerson";
import Contract from "./classes/Contract";

const physical1 = new PhysicalPerson('Fernanda', '02222221456');
const physical2 = new PhysicalPerson('Paulo', '78978978978');
const legal1 = new LegalPerson('CIA LTDA', '12548845');
const legal2 = new LegalPerson('Catuxa', '12548ddfd845');

const showIdentification = (person: IPerson) => {
  person.showIdentification();
}

showIdentification(legal1);
showIdentification(legal2);

// tipo inferido (não explícito)
const c1 = new Contract(physical1);
console.log(c1.broker.cpf);

// tipagem explícita
const c2: Contract<LegalPerson> = new Contract(legal1);
console.log(c2.broker.cnpj);
