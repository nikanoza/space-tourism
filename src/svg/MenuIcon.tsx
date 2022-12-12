const MenuIcon: React.FC<{ onClick: () => void }> = (props) => {
  return (
    <svg
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
    >
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );
};

export default MenuIcon;
