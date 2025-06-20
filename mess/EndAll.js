import Tdlpy from './Tdlpy';
import Tdlrun from './Tdlrun';
import Tdlrunning from './Tdlrunning' 

import React, { useState } from 'react';

export default function EndAll() {
  const [checked, setChecked] = useState(false);

  return (
    <div
      onClick={() => setChecked(!checked)}
      style={{ cursor: 'pointer', fontSize: '20px' }}
    >
      <h5>
        {checked ? '☑' : '☐'} 모두 완료 시, 체크하기
      </h5>
      <Tdlpy />
      <Tdlrunning />
      <Tdlrun />
    </div>
    
  );
}
