// src/lib/userTypes.ts

// Utility function to get the correct path
const getUserIconPath = (iconName: string) => {
  // For GitHub Pages, we need to include the repo name in production
  const basePath = "";
  return `${basePath}/icons/user/${iconName}`;
};

// User Avatar Category Names
export const userCategoryNames = [
  "Adventurer Avatars"
].sort();

// User Avatar Type definition
export type UserIconType = {
  name: string;
  path: string;
  searchTerms: string[];
  categories: string[];
};

export const userIconTypes: UserIconType[] = [
  /* Adventurer Avatars */
  {
    name: "Adventurer Avatar 1",
    path: getUserIconPath("adventurer-1752296578105.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 1"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 2",
    path: getUserIconPath("adventurer-1752296583986.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 2"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 3",
    path: getUserIconPath("adventurer-1752296587601.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 3"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 4",
    path: getUserIconPath("adventurer-1752296590426.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 4"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 5",
    path: getUserIconPath("adventurer-1752296593677.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 5"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 6",
    path: getUserIconPath("adventurer-1752296596801.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 6"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 7",
    path: getUserIconPath("adventurer-1752296604032.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 7"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 8",
    path: getUserIconPath("adventurer-1752296607707.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 8"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 9",
    path: getUserIconPath("adventurer-1752296610963.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 9"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 10",
    path: getUserIconPath("adventurer-1752296613707.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 10"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 11",
    path: getUserIconPath("adventurer-1752296617357.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 11"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 12",
    path: getUserIconPath("adventurer-1752296621884.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 12"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 13",
    path: getUserIconPath("adventurer-1752296625798.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 13"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 14",
    path: getUserIconPath("adventurer-1752296629238.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 14"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 15",
    path: getUserIconPath("adventurer-1752296631217.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 15"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 16",
    path: getUserIconPath("adventurer-1752296633331.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 16"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 17",
    path: getUserIconPath("adventurer-1752296637954.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 17"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 18",
    path: getUserIconPath("adventurer-1752296640339.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 18"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 19",
    path: getUserIconPath("adventurer-1752296643016.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 19"
    ],
    categories: ["Adventurer Avatars"],
  },
  {
    name: "Adventurer Avatar 20",
    path: getUserIconPath("adventurer-1752296645496.svg"),
    searchTerms: [
      "adventurer", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer avatar 20"
    ],
    categories: ["Adventurer Avatars"],
  },
];
