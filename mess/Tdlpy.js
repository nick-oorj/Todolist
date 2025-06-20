import React, { useState } from 'react';

export default function Tdlpy(){

    const [checked, setChecked] = useState(false);
    
      return (
        <div
          onClick={() => setChecked(!checked)}
          style={{ cursor: 'pointer', fontSize: '20px' }}
        >
          {checked ? '☑' : '☐'} 파이썬 과제 제출하기
        </div>
      );
    }
