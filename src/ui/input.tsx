import { type InputHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

export type InputProps = {
  label?: string;
  type?: "text" | "number" | "password" | string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

// Используем forwardRef для удобства работы с формами
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type = "text", className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-"); // генерим id, если не передан

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="font-medium text-sm text-[#272727] text-[15px]"
          >
            {label}
          </label>
        )}

        <input
          id={inputId}
          type={type}
          ref={ref}
          className={clsx(
            "w-full h-[45px] border border-solid border-[#e5e5e5] rounded-lg px-3 text-sm text-[#272727] font-medium outline-none focus:border-black",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
