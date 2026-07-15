import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/haiyangwang-1",
        linkTitle: "Haiyang Wang on GitHub",
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:haiyang.wang1024@gmail.com",
        linkTitle: "Email Haiyang Wang",
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=BMvmn40AAAAJ&hl=en",
        linkTitle: "Haiyang Wang on Google Scholar",
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0009-0009-3262-5906",
        linkTitle: "Haiyang Wang on ORCID",
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/haiyang-wang-hnsy",
        linkTitle: "Haiyang Wang on LinkedIn",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
