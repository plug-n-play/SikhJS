import React from 'react';

import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid teal;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spinAnimation} 0.75s ease-in-out infinite;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
`;

export default function LoaderView ({ loading, children, loadingText = '' }) {
  return loading
  ? <Wrapper>{loadingText}<Loader /></Wrapper>
  : children;
}

LoaderView.propTypes = {
  children: React.PropTypes.node,
  loading: React.PropTypes.bool,
  loadingText: React.PropTypes.node,
};
