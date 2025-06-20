import React, { useState } from 'react';

export default function Tdlpy(){

    const [checked, setChecked] = useState(false);
    
      return (
        <div
          onClick={() => setChecked(!checked)}
          style={{ cursor: 'pointer', fontSize: '20px' }}
        >
          {checked ? '☑' : '☐'} 이산수학 오답 노트 작성
        </div>
      );
}