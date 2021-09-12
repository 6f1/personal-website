import { mail, logoGithub, logoLinkedin } from 'ionicons/icons';
import { AppData } from './types/Data';

const appData : AppData = {
    /* landing page data */
    landingImage : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    landingText : `Conceptualized, built, and led the small team at ProtoPlay: a YouTube alternative for small creators.`,
    resumeLink : "/SamuelShoemaker.pdf",
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
            description : "Created some Sci-Fi assets for a personal project. Gained experience in Blender and VFX.",
            previewAsset : "/assets/projects/design-preview.jpg",
            bannerAsset : "",
            infoLink : "/projects/design",
            workEntries : [
                {
                    previewAsset : "",
                    title : "",
                    description : ""
                }
            ]
        }
    ],
};

export default appData;
