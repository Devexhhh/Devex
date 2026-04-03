// lib/imagesData.ts

export const IMAGES = {
    // Social Previews (Hero Section)
    socials: {
        github: "/images/socials/github-preview.png",
        twitter: "/images/socials/twitter-preview.png",
        linkedin: "/images/socials/linkedin-preview.png",
    },

    // Projects (Featured Work)
    projects: {
        phantomdex: "/images/projects/phantomdex.png",
        nexuschat: "/images/projects/nexuschat.png",
        solforge: "/images/projects/solforge.png",
        kryptix: "/images/projects/kryptix.png",
    },

    education: {
        // college: "/images/education/bitmesra.png",
        // highschool: "/images/education/dav.png",
    },

    avatars: {
        me: "/images/avatars/me.png",        // your image
        user: "/images/avatars/user.png",    // random user image
    }
} as const;

export const QUEST_IMAGES: Record<string, string> = {
    berserk: "/images/quests/berserk.jpg",
    vagabond: "/images/quests/vagabond.jpg",
    aot: "/images/quests/aot.jpg",
    vinlandsaga: "/images/quests/vinlandsaga.jpg",
    darksouls: "/images/quests/darksouls.jpg",
    gow: "/images/quests/gow.jpg",
    ac: "/images/quests/ac.jpg",
    pop: "/images/quests/pop.jpg",
    eldenring: "/images/quests/eldenring.jpg",
    batman: "/images/quests/batman.jpg",
    superman: "/images/quests/superman.jpg",
    spiderman: "/images/quests/spiderman.jpg",
    ironman: "/images/quests/ironman.jpg",
    drawing: "/images/quests/drawing.jpg",
};