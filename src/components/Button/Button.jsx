/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({isOutline,text,icon, ...rest}) => {

  return (
    <div>
      <button
       {...rest}
       className={isOutline ? styles.outline_btn : styles.primary_btn}> {/* Use the native HTML `button` tag */}
    
        {icon}
        {text}

      </button>
    </div>
  );
};

export default Button;
