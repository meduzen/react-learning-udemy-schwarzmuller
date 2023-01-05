import styled from 'styled-components'

const bgColor = {
  primary: {
    light: 'green',
    dark: 'yellow',
  },
}

const color = {
  primary: {
    light: 'white',
    dark: 'black',
  },
}

const fontWeight = {
  primary: 700,
  secondary: 400,
}

const Button = styled.button`
  --btn-bg: ${({ variant }) => bgColor[variant]?.light ?? ''};
  --btn-color: ${({ variant, disabled }) =>
    !disabled
      ? color[variant]?.light ?? ''
      : ''
  };

  background: var(--btn-bg, transparent);
  border: .1rem solid;
  color: var(--btn-color, revert); // revert keeps the “grey” of a button[disabled]
  font-weight: ${({ variant }) => fontWeight[variant]};

  &:hover, &:focus {
    scale: 1.1;
    transform-origin: 50%;
    transition: scale .15s ease;
  }

  @media (prefers-color-scheme: dark) {
    --btn-bg: ${({ variant }) => bgColor[variant]?.dark ?? ''};
    --btn-color: ${({ variant, disabled }) =>
    !disabled
      ? color[variant]?.dark ?? ''
      : ''
  };

    ${({ variant }) => variant == 'primary'
      ? `border-color: yellow;`
      : ''}
  }
`

export default Button
