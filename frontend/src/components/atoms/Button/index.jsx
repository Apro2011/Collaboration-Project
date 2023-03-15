import styles from './Button.module.css';

const Button = ({ type, isSubmitting, title }) => {
  return (
    <button type={type} disabled={isSubmitting} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
