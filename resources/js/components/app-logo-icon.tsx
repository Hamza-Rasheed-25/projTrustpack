import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        // <svg {...props} viewBox="0 0 40 42" xmlns="http://www.w3.org/2000/svg">
        //     <path
        //         fillRule="evenodd"
        //         clipRule="evenodd"
        //         d="M17.2 5.63325L8.6 0.855469L0 5.63325V32.1434L16.2 41.1434L32.4 32.1434V23.699L40 19.4767V9.85547L31.4 5.07769L22.8 9.85547V18.2999L17.2 21.411V5.63325ZM38 18.2999L32.4 21.411V15.2545L38 12.1434V18.2999ZM36.9409 10.4439L31.4 13.5221L25.8591 10.4439L31.4 7.36561L36.9409 10.4439ZM24.8 18.2999V12.1434L30.4 15.2545V21.411L24.8 18.2999ZM23.8 20.0323L29.3409 23.1105L16.2 30.411L10.6591 27.3328L23.8 20.0323ZM7.6 27.9212L15.2 32.1434V38.2999L2 30.9666V7.92116L7.6 11.0323V27.9212ZM8.6 9.29991L3.05913 6.22165L8.6 3.14339L14.1409 6.22165L8.6 9.29991ZM30.4 24.8101L17.2 32.1434V38.2999L30.4 30.9666V24.8101ZM9.6 11.0323L15.2 7.92117V22.5221L9.6 25.6333V11.0323Z"
        //     />
        // </svg>
        <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 136.59"
      {...props}
    >
      <defs>
        <style>
          {`
            .cls-1 { fill: url(#linear-gradient-2); }
            .cls-2 { fill: url(#linear-gradient-4); }
            .cls-3 { fill: url(#linear-gradient-3); }
            .cls-4 { fill: url(#linear-gradient); }
          `}
        </style>
        <linearGradient id="linear-gradient" x1="-3.56" y1="48.7" x2="74.65" y2="13.21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffd727" />
          <stop offset="1" stopColor="#ff5a1c" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="20.35" y1="41.96" x2="110.28" y2="41.96" gradientTransform="translate(13.98 3)" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-3" x1="-3.7" y1="92.63" x2="89.13" y2="48.56" xlinkHref="#linear-gradient" />
        <linearGradient id="linear-gradient-4" x1="12" y1="126.99" x2="81.74" y2="57.24" xlinkHref="#linear-gradient" />
      </defs>
      <g id="OBJECTS">
        <g>
          <path className="cls-4" d="M19.19,41.41h80.81v-9.27C100,14.39,85.61,0,67.86,0H20.76C9.29,0,0,9.29,0,20.76v33.51c3.11-7.55,10.53-12.87,19.19-12.87Z" />
          <path className="cls-1" d="M66.47,24.26h25.65c17.74,0,32.14,14.4,32.14,32.14v9.27H34.33v-9.27c0-17.74,14.4-32.14,32.14-32.14Z" transform="translate(124.26 -34.33) rotate(90)" />
          <path className="cls-3" d="M19.19,89.93h48.66c17.75,0,32.14-14.39,32.14-32.14v-9.27H20.76c-11.46,0-20.76,9.29-20.76,20.76v33.51c3.11-7.55,10.53-12.87,19.19-12.87Z" />
          <path className="cls-2" d="M33.23,95.97h-12.47C9.44,95.97.26,105.03.02,116.28c.24,11.26,9.42,20.31,20.73,20.31h12.47v-40.62Z" />
        </g>
      </g>
    </svg>
    );
}
