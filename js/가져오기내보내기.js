/**
 * default 통로로 나가는 내용은 이름을 지정할 필요도 없고, 가져오는 곳에서 이름을 마음대로 정할 수 있다.
 */

//import { hello, user as hongbaksa } from './NamedExport.js';

hello()


/**
 * default는 하나의 파일에서 하나의 데이터만 내보내야 한다.
 */

console.log(hongbaksa);


/**
 * 한번에 가져오기
 */

import * as R from './NamedExport.js'

console.log(R);

/**
 * 하나의 js내에서 두가지 통로를 모두 쓸 수 있다.
 */
