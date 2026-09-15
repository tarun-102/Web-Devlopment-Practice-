import type { ReactNode, ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  disabled?: boolean;
}

const AppButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  style,
  disabled,
}: AppButtonProps) => {
  return (
    <button
      type={type}
      className={`btn fw-semibold ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default AppButton;