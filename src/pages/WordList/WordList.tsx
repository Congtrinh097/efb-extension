import React from 'react';
import './WordList.css';
import EnhancedTable from './WordTable';

const WordList: React.FC = () => {
  return (
    <div className="container">
      <h1>Word List Page</h1>
      <EnhancedTable></EnhancedTable>
    </div>
  );
};

export default WordList;
