import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { FaTimes } from "react-icons/fa";

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (windowName: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState<string>("");

  const close = () => setOpenName("");
  const open = (windowName: string) => setOpenName(windowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

interface OpenProps {
  opens: string;
  children: ReactElement;
}

function Open({ opens: opensWindowName, children }: OpenProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Open must be used within a Modal");

  const { open } = context;
  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

interface WindowProps {
  children: ReactElement;
  name: string;
}

function Window({ children, name }: WindowProps) {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Window must be used within a Modal");

  const { openName, close } = context;
  const ref = useOutsideClick(
    close,
  ) as React.MutableRefObject<HTMLDivElement | null>;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    if (name === openName) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [name, openName, close]);

  if (name !== openName) return null;

  return createPortal(
    <div>
      <div className="fixed left-0 top-0 z-999999 h-full w-full bg-black/50 backdrop-blur-[9px] dark:bg-black/20"></div>

      <div className="fixed left-0 top-0 z-10000000 h-full w-full">
        <div
          className="fixed left-[50%] top-[50%] z-50 max-h-[80vh] w-[90%] translate-x-[-50%] translate-y-[-50%] rounded-lg  bg-light-color shadow-md dark:bg-main-color md:w-[750px] "
          ref={ref}
        >
          <button
            aria-label="Close Modal"
            title="Close"
            onClick={close}
            className="absolute right-[10px] top-[10px] text-primary-color-light dark:text-primary-color"
          >
            <FaTimes />
          </button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
