import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    // Start observing the element
    if (ref.current) {
      observer.observe(ref.current);
      toast.info("it is visible");
    } else {
      toast.warn("No ref");
    }

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
