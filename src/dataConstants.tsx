import { mail, logoGithub, logoLinkedin } from 'ionicons/icons';
import { AppData } from './types/Data';

const appData : AppData = {
    /* landing page data */
    landingImage : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    landingText : `As the driving force­ behind ProtoPlay - a YouTube alternative­ for small creators, I championed the­ conceptualization, construction, and leadership of a small te­am showcasing my ability to navigate complex challenges and deliver innovative solutions. With experience in building web, mobile web, and app frontends using a wide range of technologies, I have a proven track record of developing, publishing, and adapting solutions to dynamic environments. During my time at Youreka, I have continued to work as a part of a team, and continued to improve and learn new skills to advance my skillset. I not only focus on planning, and architecting solutions, but also on performance and improving myself and past solutions made.

In the long term, I’m committed to staying updated with industry trends, pursuing relevant certifications, and taking on challenging projects that allow me to grow both professionally and personally. Furthermore, I would like to take on more leadership and management roles to contribute to the growth and development of the teams that I am a part of. I believe that my problem-solving and communication skills are invaluable when leading a team.`,
    resumeLink : "/Samuel Shoemaker.docx",
    /* page footer data */
    externalLinks : [
        {
            link : "mailto:samshoemaker@protonmail.com",
            icon : mail
        },
        {
            link : "https://github.com/6f1",
            icon : logoGithub
        },
        {
            link : "https://www.linkedin.com/in/samuel-s-507b831b5/",
            icon : logoLinkedin
        }
    ],
    /* project data */
    projectData : [
        {
            title : "ProtoPlay",
            description : "A YouTube alternative platform.",
            previewAsset : "/assets/projects/protoplay-preview.png",
            bannerAsset : "/assets/projects/protoplay-banner.png",
            projectLink : "https://protoplay.tv",
            infoLink : "/projects/protoplay",
            workEntries : [
                {
                    previewAsset : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    title: "Overview",
                    description: `I worked with a team to create and maintain a video streaming platform (https://protoplay.tv).
                    Was a driving force behind a refactor effort of our frontend, transitioning from using a legacy JQuery stack to using a Ionic & React stack. This refactor was able to substantially improve application performance and access to our product.
                    Worked in tandem with another developer to create and direct an API backend on AWS services. Managed and facilitated production setups on RHEL8 and Ubuntu instances.
                    Built, published, administered, and assumed responsibility for apps on both the Google Play Store, and the iOS App Store.
                    I Initiated and took ownership of a pipeline automating, and greatly improving the distribution of our live Web App / site / PWA (https://protoplay.tv).`
                },
                {
                    previewAsset : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    title : "Apps for iOS App Store and Android Play Store",
                    description : "I constructed and published the ProtoPlay apps on both the Apple AppStore and the Google PlayStore for Android."
                },
                {
                    previewAsset : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    title : "Static Website construction",
                    description : "I constructed a static website / web app and completed a full serverless pipeline."
                },
            ]
        },
        {
            title : "Graphic Design",
            description : "I created some Sci-Fi assets for a personal project. Gained experience in Blender and VFX.",
            previewAsset : "/assets/projects/design-preview.jpg",
            bannerAsset : "",
            infoLink : "/projects/design",
            workEntries : [
                {
                    previewAsset : "",
                    title : "Planet creation",
                    description : "I used blender to create planets from scratch."
                }
            ]
        }
    ],
};

export default appData;
