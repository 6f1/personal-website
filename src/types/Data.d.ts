type ProjectDataEntry = {
    title : string;
    description : string;
    previewAsset : string;
    bannerAsset : string;
    projectLink? : string;
    infoLink : string;
    workEntries : Array<{
        previewAsset : string;
        title : string;
        description : string;
    }>
};

type AppData = {
    landingImage : string,
    landingText : string;
    resumeLink : string;
    externalLinks : Array<{ link : string, icon : string }>;
    projectData : Array<ProjectDataEntry>;
};

export { ProjectDataEntry, AppData };
