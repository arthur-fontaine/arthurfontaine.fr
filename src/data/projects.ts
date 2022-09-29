import KVState from "../utils/KVState";
import readKV from "../utils/readKV";

export interface Project {
    title: string;
    description: string;
    githubLink?: string;
    demoLink?: string;
    color: string;
    story: string;
    techStack: string[];
}

class ProjectsState extends KVState<Project[]> {
    constructor(updateInterval: number) {
        super([], updateInterval);
    }

    private async fetchProject(projectName: string) {
        const projectKeys = ["title", "description", "githubLink", "demoLink", "color", "story", "techStack"] as const;
        const projectPromises = projectKeys.map(async (key) => {
            const response = await readKV(`projects.${projectName}.${key}`);

            if (response.errors) {
                return;
            }

            if (response) {
                let value: string | string[] = response;

                if (key === "techStack") {
                    value = response.split(",");
                }

                return { [key]: value };
            }
        });

        return (await Promise.all(projectPromises)).reduce((acc, value) => ({ ...acc, ...value }), {}) as unknown as Project;
    }

    async getData() {
        const rawProjectsToFetch = await readKV("projects");
        const projectsToFetch = rawProjectsToFetch && typeof rawProjectsToFetch === "string" ? rawProjectsToFetch.split(",") : [];

        const projectsPromises = projectsToFetch.map((projectName) => this.fetchProject(projectName));

        return await Promise.all(projectsPromises);
    }
}

// update every 5 minutes
const projectsState = new ProjectsState(1000 * 60 * 5);

export default projectsState;
