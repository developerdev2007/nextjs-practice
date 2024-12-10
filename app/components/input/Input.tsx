"use client";
import { useForm } from "react-hook-form";

interface InputProps {
  label: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
  label,
  onChange,
  placeholder,
  required,
  type,
  value,
  disabled,
}) => {
  const {
    // register,
    // handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      username: "",
      bio: "",
      file: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });
  return (
    <>
      <label
        htmlFor={label}
        className="w-full peer text-sm font-medium px-4  pb-0 z-10  overflow-hidden rounded-2xl"
      >
        {label}
        {required && (
          <>
            <span className=" ml-4 text-red-500">*</span>
          </>
        )}
      </label>
      <div className="w-full bg-blue-100 dark:bg-slate-900 h-fit cursor-text hover:opacity-95 rounded-2xl  ">
        <input
          id={label}
          type={type}
          className="w-full  h-full bg-transparent px-2 sm:px-4 py-2 sm:py-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500 outline-none overflow-hidden shadow-lg "
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </div>
    </>
  );
};
export default Input;
