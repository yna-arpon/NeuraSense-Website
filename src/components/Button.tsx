import styles from "./Button.module.css";

interface Props {
  innerText: string;
  onClickButton: () => void;
  btnClass: string;
}

const Button = ({ innerText, onClickButton, btnClass }: Props) => {
  return (
    <button className={`${styles.button} ${btnClass}`} onClick={onClickButton}>
      {innerText}
    </button>
  );
};

export default Button;
