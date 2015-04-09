import trademark from './index';
import { equal, notEqual } from 'assert';

it('should fix typewriter’s trademark', ()=> {
  equal(trademark(`2013 MegaCorp (TM)`), `2013 MegaCorp™`);
  equal(trademark(`2013 MegaCorp    (TM)`), `2013 MegaCorp™`);
});
