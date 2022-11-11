import React, { useState, useEffect, useRef } from 'react';
import DBInput from './DBInput';
import Diagram from './Diagram';

const initialData = {
  name: 'Database',
  children: [
    {
      name: 'Table-1',
      children: [
        {
          name: 'Column-1',
        },
        {
          name: 'Column-2',
        },
        {
          name: 'Column-3',
        },
      ],
    },
    {
      name: 'Table-2',
    },
  ],
};

const VisualizerContainer = () => {
  const [data, setData] = useState(initialData);
  return (
    <div className='schema-vis-container'>

      <Diagram data={data} />
    </div>
  );
};

export default VisualizerContainer;
//might need the fetch request and onSubmit here to trigger the update to data