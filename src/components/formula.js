// components/Formula.js
"use client";

import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Formula = ({ formula, block=false }) => {
  return block ? (
    <BlockMath math={formula} />
  ) : (
    <InlineMath math={formula} />
  );
};

export default Formula;