import React from 'react';
import leetcodeLogo from '../leetcode-logo.png';

const Leetcode = ({ size = 24, ...props }) => (
  <img
    src={leetcodeLogo}
    alt="LeetCode"
    width={size}
    height={size}
    {...props}
  />
);

export default Leetcode;