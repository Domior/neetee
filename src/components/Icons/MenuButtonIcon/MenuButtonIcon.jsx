import styles from './MenuButtonIcon.module.css';

const MenuButtonIcon = () => {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.15"
        y="1.15"
        width="22.7"
        height="22.7"
        rx="3.85"
        strokeWidth="2.3"
      />
      <path d="M13.7109 11.5469H16.375V13.8047H13.7109V16.8594H11.25V13.8047H8.57812V11.5469H11.25V8.57812H13.7109V11.5469Z" />
    </svg>
  );
};

export default MenuButtonIcon;
