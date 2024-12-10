import { CgClose } from "react-icons/cg";

interface IModalContainer {
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  onClose: () => void;
}
const ModalContainer: React.FC<IModalContainer> = ({
  body,
  footer,
  onClose,
  title,
}) => {
  return (
    <div className="absolute inset-0 top-0 right-0 bottom-0 bg-black/60  flex items-center justify-center z-50 ">
      <div className=" relative px-2 py-2 h-fit max-h-[80vh]  sm:px-4 rounded-2xl sm:py-4 w-11/12 mx-auto sm:w-3/4 sm:max-w-md flex flex-col items-center bg-white dark:bg-gray-800 text-gray-900 dark:text-slate-50 ">
        <div
          onClick={onClose}
          className="w-10 h-10 absolute top-5 right-5 rounded-full bg-gray-200 dark:bg-gray-950 hover:opacity-90 hover:scale-105 cursor-pointer flex items-center justify-center"
        >
          <CgClose
            size={25}
            className="text-center dark:text-white/90 text-gray-800"
          />
        </div>
        <h2 className="px-2 py-4 text-2xl text-center w-full font-semibold ">
          {title}
        </h2>
        <div className="mt-2 border-t border border-black dark:border-white w-full mx-auto" />
        <div className="w-full mt-5 sm:mt-8 space-y-4 overflow-y-auto">
          {body}
        </div>

        <div className="flex flex-col items-center w-full mt-5 px-4 py-2">
          {footer}
        </div>
      </div>
    </div>
  );
};
export default ModalContainer;
