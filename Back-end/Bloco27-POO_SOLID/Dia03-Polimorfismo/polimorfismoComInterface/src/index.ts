import IPerson from "./interfaces/Person";
import PhysicalPerson from "./classes/PhysicalPerson";
import LegalPerson from "./classes/LegalPerson";

const physical1 = new PhysicalPerson('Fernanda', '02222221456');
const physical2 = new PhysicalPerson('Paulo', '78978978978');
const legal1 = new LegalPerson('CIA LTDA', '12548845');
const legal2 = new LegalPerson('Catuxa', '12548ddfd845');

const showIdentification = (person: IPerson) => {
  person.showIdentification();
}

showIdentification(legal1);
showIdentification(legal2);
