import "../SCSS/project-card.scss";
import { BsChevronRight } from "react-icons/bs";
interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSource: string;
  index: number;
  isDisabled: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageSource,
  index,
  isDisabled,
}) => {
  return (
    <a
      data-aos="fade-right"
      data-aos-duration="150"
      data-aos-delay={index * 50 + ""}
      href={
        isDisabled
          ? "https://line.me/ti/p/Jq_GQiOr3e"
          : `/courses/${title.replaceAll(" ", "-").toLocaleLowerCase()}`
      }
      className="project-card-container"
    >
      <div className="div-img">
        <img src={imageSource} alt={title} className="project-card-img" />
      </div>

      <div className="project-card-bottom">
        <div className="project-card-text">
          <h2 className="project-card-title">{title}</h2>
          <p className="project-card-subtitle">{subtitle}</p>
        </div>
        <div className="project-card-icon">
          <BsChevronRight></BsChevronRight>
        </div>
      </div>
    </a>
  );
};
