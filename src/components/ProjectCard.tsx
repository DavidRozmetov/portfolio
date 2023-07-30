import "../SCSS/project-card.scss";
import { BsChevronRight } from "react-icons/bs";
interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageSource: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  imageSource,
  index,
}) => {
  return (
    <a
      data-aos="fade-right"
      data-aos-duration="150"
      data-aos-delay={index * 50 + ""}
      href={"portfolio/" + title.replaceAll(" ", "-").toLocaleLowerCase()}
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
