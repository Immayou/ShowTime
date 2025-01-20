import React from "react";
import styled from "styled-components";

const LoadingFallback = () => {
  return (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  );
};

export default LoadingFallback;

// Styled-components
const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  width: 100px;
  padding: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #fff;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
