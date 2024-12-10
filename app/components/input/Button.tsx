import { IconType } from "react-icons";
import { ClipLoader } from "react-spinners";
interface IButtonProps {
  title: string;
  secondary?: boolean;
  onClick: any;
  icon?: IconType;
  disabled?: boolean;
  isLoading?: boolean;
}

export default function Button({
  onClick,
  title,
  icon: Icon,
  secondary,
  isLoading,
  disabled,
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full mx-2 px-4 py-2 rounded-lg outline-none cursor-pointer flex flex-row items-center  justify-between
        bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 ease-in-out
        dark:bg-slate-800 dark:hover:bg-slate-700

        ${secondary ? "bg-white text-black hover:bg-gray-200" : ""}
    `}
    >
      <p className="">{title}</p>
      {isLoading ? (
        <div className="ml-2">
          <ClipLoader
            size={20}
            color="blue"
            cssOverride={{
              color: "blue",
            }}
            className={`dark:border-white border-gray-700`}
          />
        </div>
      ) : (
        Icon && <Icon size={20} />
      )}
    </button>
  );
}
// export default Button;
