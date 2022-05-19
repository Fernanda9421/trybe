import Character from './Character';
import MeleeCharacter from './MeleeCharacter';
import LongRangeCharacter from './LongRangeCharacter';

const presentation = (character: Character) => {
  character.talk();
  character.specialMove();
}

const p1 = new MeleeCharacter('yoshi', 'Super dragon');
const p2 = new LongRangeCharacter('samus', 'Zero laser');

presentation(p1);
presentation(p2);