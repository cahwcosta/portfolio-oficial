import { useRef, useState } from "react";

export default () => {
  const [isActive, setIsActive] = useState(false);
  const hiddenContentRef = useRef<HTMLDivElement>(null);

  const handleActiveBurger = () => {
    setIsActive(!isActive);
    if (hiddenContentRef.current) {
      if (isActive == false) {
        hiddenContentRef.current.style.height = `90vh`;
      } else {
        hiddenContentRef.current.style.height = "0";
      }
    }
  };

  return {
    isActive,
    hiddenContentRef,
    handleActiveBurger,
  };
};
