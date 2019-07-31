import React from "react";

const ShopCartIcon = () => (
  <svg
    className="shop-cart-icon"
    height="22"
    width="21"
    viewBox="0 0 1092 1024"
  >
    <path d="M335.133145 511.01748M1091.861096 274.782261l-755.005178 0-85.65411-274.782261-220.084225 0c-17.146973 0-31.117584 13.943692-31.117584 31.063747 0 17.146973 13.970611 31.090665 31.117584 31.090665l174.107726 0 71.279724 212.627849-1.049815 0 67.995689 408.431744c0.053837 74.509923 60.27013 134.699298 134.268605 134.699298l377.852527 0c73.971557 0 134.160931-60.189375 134.160931-134.160931L1091.861096 274.782261zM927.417049 684.533003c0.107673 38.870061-32.167398 71.118214-71.845009 71.118214l-377.852527 0c-39.677611 0-71.979601-32.248153-71.979601-71.898846l-57.84748-346.734943 666.336215 0L927.417049 684.533003zM821.197339 958.534632m-65.465366 0a2.432 2.432 0 1 0 130.930732 0 2.432 2.432 0 1 0-130.930732 0ZM477.719512 893.069266c-36.124392 0-65.492285 29.367892-65.492285 65.492285 0 36.097474 29.367892 65.438448 65.492285 65.438448 36.097474 0 65.438448-29.340974 65.438448-65.438448C543.15796 922.437159 513.790068 893.069266 477.719512 893.069266z" />
  </svg>
);

const LogoApp = () => (
  <svg
    className="logo-svg"
    width="40"
    height="30"
    viewBox="0 0 87.000000 96.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M345 951 c-6 -5 -75 -46 -155 -91 -80 -46 -155 -92 -167 -103 -23
-20 -23 -24 -23 -267 0 -223 2 -248 18 -262 9 -9 93 -59 187 -113 94 -54 174
-101 179 -106 13 -12 89 -12 102 0 5 5 86 52 179 106 94 54 178 104 188 113
15 14 17 39 17 262 0 243 0 247 -22 267 -13 11 -88 57 -168 103 -80 45 -149
86 -154 91 -6 5 -16 9 -23 9 -10 0 -13 -50 -13 -240 0 -132 4 -240 8 -240 4 0
28 20 52 45 62 64 120 60 120 -7 0 -22 -23 -51 -107 -138 -66 -67 -116 -110
-128 -110 -28 0 -235 217 -235 246 0 29 25 54 54 54 13 0 40 -18 66 -45 24
-25 48 -45 52 -45 4 0 8 108 8 240 0 190 -3 240 -13 240 -7 0 -17 -4 -22 -9z"
      />
    </g>
  </svg>
);

const LoadingSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <path
      fill="#000"
      d="M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export { LogoApp, ShopCartIcon, LoadingSVG };