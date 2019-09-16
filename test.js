import { test1 } from './src/task1/test1.js';
import { test2 } from './src/task2/test2.js';
import { test3 } from './src/task3/test3.js';
import { test4 } from './src/task4/test4.js';
import { test5 } from './src/task5/test5.js';
import { test6 } from './src/task6/test6.js';
import { test7 } from './src/task7/test7.js';

mocha.setup('bdd');

test1();
test2();
test3();
test4();
test5();
test6();
test7();

mocha.run();