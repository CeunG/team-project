import { createGlobalStyle } from 'styled-components';

const Globalstyles = createGlobalStyle`
body,
div,
p,
span,
a,
img,
b,
section,
article,
aside,
header,
footer,
ul,
li,
dl,
dt,
dd,
address,
br,
form,
legend,
fieldset,
input,
label,
button,
h1,
h2,
h3,
h4,
nav,
ol,
table,
caption,
tbody,
thead,
tfoot,
th,
td,
col,
strong,
small,
select,
option,
i,
button {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



body,
a,
input,
select {
  color: #34343b;
  font-size: 0.9rem;
}

ul,
ol,
dl {
  list-style: none
}

input,
button,
img,
fieldset {
  border: none;
  background-color: transparent;
}

a:link,
a:visited {
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  text-decoration: none;
  color: #222;
}
`;


export default Globalstyles;