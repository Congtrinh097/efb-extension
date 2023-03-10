import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const save = () => {
  console.log('save');
}

const Options: React.FC<Props> = ({ title }: Props) => {


  return (<div className="OptionsContainer">
    <h2>
    {title} Options
    </h2>
    <div className='contaner-options'>
      <button className="btn-save" onClick={save}>Save</button>
    </div>
  </div>);
};

export default Options;
