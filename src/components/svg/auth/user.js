function UserSvg({ type, active }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58968 16.2217C14.0472 16.2217 17.8571 16.8971 17.8571 19.5953C17.8571 22.2936 14.0726 22.9883 9.58968 22.9883C5.13093 22.9883 1.32227 22.3189 1.32227 19.6195C1.32227 16.9201 5.10556 16.2217 9.58968 16.2217Z"
        stroke={active ? '#3E7EFF' : '#A3A3A3'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.58979 12.3705C6.66321 12.3705 4.29004 9.99856 4.29004 7.07198C4.29004 4.1454 6.66321 1.77344 9.58979 1.77344C12.5152 1.77344 14.8883 4.1454 14.8883 7.07198C14.8992 9.98769 12.543 12.3596 9.62725 12.3705H9.58979Z"
        stroke={active ? '#7DA8FF' : '#D0D0D0'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {type === 'company' && (
        <>
          <path
            opacity="0.4"
            d="M17.917 10.9951C19.8515 10.7232 21.3414 9.06293 21.345 7.05347C21.345 5.07302 19.9011 3.42968 18.0076 3.11914"
            stroke={active ? '#7DA8FF' : '#D0D0D0'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4692 15.6484C22.3434 15.9276 23.652 16.5849 23.652 17.9382C23.652 18.8699 23.0357 19.474 22.0401 19.8522"
            stroke={active ? '#3E7EFF' : '#A3A3A3'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default UserSvg;
