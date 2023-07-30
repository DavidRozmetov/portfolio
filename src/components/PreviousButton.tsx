import { MdNavigateBefore } from "react-icons/md";

interface BtnProps {
  src: string;
}

export const PreviousButton: React.FC<BtnProps> = ({ src }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const currentPath = window.location.pathname;
    const newPath = `${currentPath}/${src}`;
    window.location.href = newPath;
  };

  return (
    <a
      href={src}
      className="btn-next-container btn-previous"
      onClick={handleClick}
    >
      <div className="icon">
        <MdNavigateBefore />
      </div>
    </a>
  );
};
