import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { nanoid } from 'nanoid';
import 'index.css';

const GRADIENT_LIST = [
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#FFCF71' },
      { id: nanoid(), color: '#2376DD' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#52ACFF' },
      { id: nanoid(), color: '#FFE32C' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#A9C9FF' },
      { id: nanoid(), color: '#FFBBEC' },
    ],
  },

  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#FBAB7E' },
      { id: nanoid(), color: '#F7CE68' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#FBDA61' },
      { id: nanoid(), color: '#FF5ACD' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#EB5757' },
      { id: nanoid(), color: '#000000' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#F8CDDA' },
      { id: nanoid(), color: '#1D2B64' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#D9AFD9' },
      { id: nanoid(), color: '#97D9E1' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#e1eec3' },
      { id: nanoid(), color: '#f05053' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#22c1c3' },
      { id: nanoid(), color: '#fdbb2d' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#ff9966' },
      { id: nanoid(), color: '#ff5e62' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#30E8BF' },
      { id: nanoid(), color: '#FF8235' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#4568DC' },
      { id: nanoid(), color: '#B06AB3' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#F2994A' },
      { id: nanoid(), color: '#F2C94C' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#56CCF2' },
      { id: nanoid(), color: '#2F80ED' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#283c86' },
      { id: nanoid(), color: '#45a247' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#1c92d2' },
      { id: nanoid(), color: '#f2fcfe' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#06beb6' },
      { id: nanoid(), color: '#48b1bf' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#d9a7c7' },
      { id: nanoid(), color: '#fffcdc' },
    ],
  },
  {
    id: nanoid(),
    points: [
      { id: nanoid(), color: '#7F00FF' },
      { id: nanoid(), color: '#E100FF' },
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App gradientsList={GRADIENT_LIST} />
  </React.StrictMode>,
  document.getElementById('root'),
);
