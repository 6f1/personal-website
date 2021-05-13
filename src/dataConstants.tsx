import { mail, logoGithub, logoLinkedin } from 'ionicons/icons';
import { AppData } from './types/Data';

const appData : AppData = {
    /* landing page data */
    landingImage : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    landingText : "Relative diplomat disaster compete aluminium cunning. Pier reach whip presentation rich loss prey. Skilled quote overeat carry grudge able. Presidency residence ambiguity zero helicopter. Kill bald sweep assault bat maze. Sleep as battlefield team housing. Entry reluctance penalty specimen clear tidy coincide. Instrument accent medicine minority exclude swipe lonely premium.",
    resumeLink : "/resume.txt",
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
                    previewAsset : "",
                    description : ""
                }
            ]
        },
        {
            title : "Graphic Design",
            description : "",
            previewAsset : "/assets/projects/design-preview.jpg",
            bannerAsset : "",
            infoLink : "/projects/design",
            workEntries : [
                {
                    previewAsset : "",
                    description : ""
                }
            ]
        }
    ],
};

export default appData;
