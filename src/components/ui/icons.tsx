type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  info: (props: IconProps) => (
    <svg
      width="35"
      height="35"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="25" cy="25" r="23.5" stroke="#03B96B" stroke-width="3" />
      <path
        d="M26.5682 12.7273L26.2727 29.3068H23.125L22.8295 12.7273H26.5682ZM24.7045 36.2159C24.0758 36.2159 23.5379 35.9962 23.0909 35.5568C22.6439 35.1098 22.4242 34.572 22.4318 33.9432C22.4242 33.322 22.6439 32.7917 23.0909 32.3523C23.5379 31.9053 24.0758 31.6818 24.7045 31.6818C25.3182 31.6818 25.8485 31.9053 26.2955 32.3523C26.7424 32.7917 26.9697 33.322 26.9773 33.9432C26.9697 34.3598 26.8598 34.7424 26.6477 35.0909C26.4432 35.4318 26.1705 35.7045 25.8295 35.9091C25.4886 36.1136 25.1136 36.2159 24.7045 36.2159Z"
        fill="#03B96B"
      />
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5459 9.76221H11.5459C10.4413 9.76221 9.5459 10.6576 9.5459 11.7622V20.7622C9.5459 21.8668 10.4413 22.7622 11.5459 22.7622H20.5459C21.6505 22.7622 22.5459 21.8668 22.5459 20.7622V11.7622C22.5459 10.6576 21.6505 9.76221 20.5459 9.76221Z"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.5459 15.7622H4.5459C4.01547 15.7622 3.50676 15.5515 3.13168 15.1765C2.75661 14.8014 2.5459 14.2927 2.5459 13.7622V4.76224C2.5459 4.2318 2.75661 3.7231 3.13168 3.34802C3.50676 2.97295 4.01547 2.76224 4.5459 2.76224H13.5459C14.0763 2.76224 14.585 2.97295 14.9601 3.34802C15.3352 3.7231 15.5459 4.2318 15.5459 4.76224V5.76224"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
};
