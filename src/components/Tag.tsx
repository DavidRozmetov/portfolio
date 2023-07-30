import { ReactElement } from "react";
import "../SCSS/tag.scss";
import { IconType } from "react-icons";
interface TagProps {
  title: string;
  icon: ReactElement<IconType>;
}

export const Tag: React.FC<TagProps> = ({ title, icon }) => {
  return (
    <div className={`tag-container ${title.toLocaleLowerCase()}`}>
      <p className="tag-title">{title}</p>
      <span className="logo">{icon}</span>
    </div>
  );
};
