import PortfolioCardDesign from "../../Components/Portfolio cards/PortfolioCardDesign";
import useFetchProjects from "../../Hooks/useFetchProjects";


const VanillaJavascriptBased = () => {

    const [projects] = useFetchProjects();

    const FilteredProject = projects.filter(
      (project) => project.category === "javascript_based"
    );

    return (
        <div>
            <div className="md:grid grid-cols-3 ">
        {FilteredProject.map((project) => (
          <PortfolioCardDesign
            key={project._id}
            ProjectName={project.projectName}
            backgroundImage={project.full_Screen_Shot}
            LiveLink={project.Live_Link}
            ClientCode={project.GitHub_Client_Side_Link}
            ServerCode={project.GitHub_Server_Side_Link}
          />
        ))}
      </div>
        </div>
    );
};

export default VanillaJavascriptBased;