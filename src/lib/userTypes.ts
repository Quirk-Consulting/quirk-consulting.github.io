// src/lib/userTypes.ts

// Utility function to get the correct path
const getUserIconPath = (iconName: string) => {
  // For GitHub Pages, we need to include the repo name in production
  const basePath = "";
  return `${basePath}/icons/user/${iconName}`;
};

// User Avatar Category Names
export const userCategoryNames = [
  "Adventurer Avatars",
  "Adventurer Neutral Avatars",
  "Avataaars Avatars",
  "Avataaars Neutral Avatars",
  "Big Ears Avatars",
  "Big Ears Neutral Avatars"
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

  /* Avataaars Neutral Avatars */
  {
    name: "Avataaars Neutral Avatar 1",
    path: getUserIconPath("avataaarsNeutral-1752308835262.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 1"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 2",
    path: getUserIconPath("avataaarsNeutral-1752308837797.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 2"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 3",
    path: getUserIconPath("avataaarsNeutral-1752308840239.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 3"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 4",
    path: getUserIconPath("avataaarsNeutral-1752308843516.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 4"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 5",
    path: getUserIconPath("avataaarsNeutral-1752308847194.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 5"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 6",
    path: getUserIconPath("avataaarsNeutral-1752308863421.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 6"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 7",
    path: getUserIconPath("avataaarsNeutral-1752308867433.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 7"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 8",
    path: getUserIconPath("avataaarsNeutral-1752308871170.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 8"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 9",
    path: getUserIconPath("avataaarsNeutral-1752308875367.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 9"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 10",
    path: getUserIconPath("avataaarsNeutral-1752308877744.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 10"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 11",
    path: getUserIconPath("avataaarsNeutral-1752308880306.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 11"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 12",
    path: getUserIconPath("avataaarsNeutral-1752308882898.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 12"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 13",
    path: getUserIconPath("avataaarsNeutral-1752308886186.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 13"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 14",
    path: getUserIconPath("avataaarsNeutral-1752308888471.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 14"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 15",
    path: getUserIconPath("avataaarsNeutral-1752308890706.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 15"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 16",
    path: getUserIconPath("avataaarsNeutral-1752308893410.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 16"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 17",
    path: getUserIconPath("avataaarsNeutral-1752308896948.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 17"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 18",
    path: getUserIconPath("avataaarsNeutral-1752308899658.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 18"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 19",
    path: getUserIconPath("avataaarsNeutral-1752308902597.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 19"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },
  {
    name: "Avataaars Neutral Avatar 20",
    path: getUserIconPath("avataaarsNeutral-1752308904794.svg"),
    searchTerms: [
      "avataaars", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars neutral avatar 20"
    ],
    categories: ["Avataaars Neutral Avatars"],
  },

  /* Avataaars Avatars */
  {
    name: "Avataaars Avatar 1",
    path: getUserIconPath("avataaars-1752308251518.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 1"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 2",
    path: getUserIconPath("avataaars-1752308253955.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 2"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 3",
    path: getUserIconPath("avataaars-1752308255958.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 3"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 4",
    path: getUserIconPath("avataaars-1752308258948.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 4"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 5",
    path: getUserIconPath("avataaars-1752308262489.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 5"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 6",
    path: getUserIconPath("avataaars-1752308268285.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 6"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 7",
    path: getUserIconPath("avataaars-1752308270310.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 7"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 8",
    path: getUserIconPath("avataaars-1752308273295.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 8"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 9",
    path: getUserIconPath("avataaars-1752308275432.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 9"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 10",
    path: getUserIconPath("avataaars-1752308279014.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 10"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 11",
    path: getUserIconPath("avataaars-1752308282664.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 11"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 12",
    path: getUserIconPath("avataaars-1752308285644.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 12"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 13",
    path: getUserIconPath("avataaars-1752308288557.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 13"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 14",
    path: getUserIconPath("avataaars-1752308292882.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 14"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 15",
    path: getUserIconPath("avataaars-1752308295447.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 15"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 16",
    path: getUserIconPath("avataaars-1752308298666.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 16"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 17",
    path: getUserIconPath("avataaars-1752308301444.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 17"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 18",
    path: getUserIconPath("avataaars-1752308304024.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 18"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 19",
    path: getUserIconPath("avataaars-1752308307506.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 19"
    ],
    categories: ["Avataaars Avatars"],
  },
  {
    name: "Avataaars Avatar 20",
    path: getUserIconPath("avataaars-1752308310180.svg"),
    searchTerms: [
      "avataaars", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "avataaars avatar 20"
    ],
    categories: ["Avataaars Avatars"],
  },

  /* Adventurer Neutral Avatars */
  {
    name: "Adventurer Neutral Avatar 1",
    path: getUserIconPath("adventurerNeutral-1752307535682.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 1"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 2",
    path: getUserIconPath("adventurerNeutral-1752307545860.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 2"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 3",
    path: getUserIconPath("adventurerNeutral-1752307549092.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 3"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 4",
    path: getUserIconPath("adventurerNeutral-1752307551195.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 4"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 5",
    path: getUserIconPath("adventurerNeutral-1752307553166.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 5"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 6",
    path: getUserIconPath("adventurerNeutral-1752307555598.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 6"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 7",
    path: getUserIconPath("adventurerNeutral-1752307557759.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 7"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 8",
    path: getUserIconPath("adventurerNeutral-1752307560265.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 8"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 9",
    path: getUserIconPath("adventurerNeutral-1752307563334.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 9"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 10",
    path: getUserIconPath("adventurerNeutral-1752307567209.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 10"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 11",
    path: getUserIconPath("adventurerNeutral-1752307569278.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 11"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 12",
    path: getUserIconPath("adventurerNeutral-1752307571688.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 12"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 13",
    path: getUserIconPath("adventurerNeutral-1752307574836.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 13"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 14",
    path: getUserIconPath("adventurerNeutral-1752307576987.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 14"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 15",
    path: getUserIconPath("adventurerNeutral-1752307579219.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 15"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 16",
    path: getUserIconPath("adventurerNeutral-1752307586453.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 16"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 17",
    path: getUserIconPath("adventurerNeutral-1752307592354.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 17"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 18",
    path: getUserIconPath("adventurerNeutral-1752307600030.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 18"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 19",
    path: getUserIconPath("adventurerNeutral-1752307602298.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 19"
    ],
    categories: ["Adventurer Neutral Avatars"],
  },
  {
    name: "Adventurer Neutral Avatar 20",
    path: getUserIconPath("adventurerNeutral-1752307609616.svg"),
    searchTerms: [
      "adventurer", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "adventurer neutral avatar 20"
    ],
    categories: ["Adventurer Neutral Avatars"],
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

  /* Big Ears Avatars */
  {
    name: "Big Ears Avatar 1",
    path: getUserIconPath("bigEars-1752311517294.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 1"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 2",
    path: getUserIconPath("bigEars-1752311521726.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 2"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 3",
    path: getUserIconPath("bigEars-1752311526905.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 3"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 4",
    path: getUserIconPath("bigEars-1752311529121.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 4"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 5",
    path: getUserIconPath("bigEars-1752311531683.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 5"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 6",
    path: getUserIconPath("bigEars-1752311534354.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 6"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 7",
    path: getUserIconPath("bigEars-1752311536634.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 7"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 8",
    path: getUserIconPath("bigEars-1752311544705.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 8"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 9",
    path: getUserIconPath("bigEars-1752311549699.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 9"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 10",
    path: getUserIconPath("bigEars-1752311555910.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 10"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 11",
    path: getUserIconPath("bigEars-1752311567360.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 11"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 12",
    path: getUserIconPath("bigEars-1752311572232.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 12"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 13",
    path: getUserIconPath("bigEars-1752311583330.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 13"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 14",
    path: getUserIconPath("bigEars-1752311589267.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 14"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 15",
    path: getUserIconPath("bigEars-1752311592216.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 15"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 16",
    path: getUserIconPath("bigEars-1752311594715.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 16"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 17",
    path: getUserIconPath("bigEars-1752311597047.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 17"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 18",
    path: getUserIconPath("bigEars-1752311600235.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 18"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 19",
    path: getUserIconPath("bigEars-1752311603221.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 19"
    ],
    categories: ["Big Ears Avatars"],
  },
  {
    name: "Big Ears Avatar 20",
    path: getUserIconPath("bigEars-1752311605491.svg"),
    searchTerms: [
      "big ears", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears avatar 20"
    ],
    categories: ["Big Ears Avatars"],
  },

  /* Big Ears Neutral Avatars */
  {
    name: "Big Ears Neutral Avatar 1",
    path: getUserIconPath("bigEarsNeutral-1752312050144.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 1"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 2",
    path: getUserIconPath("bigEarsNeutral-1752312052974.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 2"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 3",
    path: getUserIconPath("bigEarsNeutral-1752312055652.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 3"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 4",
    path: getUserIconPath("bigEarsNeutral-1752312061266.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 4"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 5",
    path: getUserIconPath("bigEarsNeutral-1752312064140.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 5"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 6",
    path: getUserIconPath("bigEarsNeutral-1752312090083.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 6"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 7",
    path: getUserIconPath("bigEarsNeutral-1752312101328.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 7"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 8",
    path: getUserIconPath("bigEarsNeutral-1752312108622.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 8"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 9",
    path: getUserIconPath("bigEarsNeutral-1752312114234.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 9"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 10",
    path: getUserIconPath("bigEarsNeutral-1752312120315.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 10"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 11",
    path: getUserIconPath("bigEarsNeutral-1752312127448.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 11"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 12",
    path: getUserIconPath("bigEarsNeutral-1752312139090.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 12"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 13",
    path: getUserIconPath("bigEarsNeutral-1752312144524.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 13"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 14",
    path: getUserIconPath("bigEarsNeutral-1752312150516.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 14"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 15",
    path: getUserIconPath("bigEarsNeutral-1752312152822.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 15"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 16",
    path: getUserIconPath("bigEarsNeutral-1752312155072.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 16"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 17",
    path: getUserIconPath("bigEarsNeutral-1752312159768.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 17"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 18",
    path: getUserIconPath("bigEarsNeutral-1752312165497.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 18"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 19",
    path: getUserIconPath("bigEarsNeutral-1752312170372.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 19"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
  {
    name: "Big Ears Neutral Avatar 20",
    path: getUserIconPath("bigEarsNeutral-1752312175137.svg"),
    searchTerms: [
      "big ears", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "big ears neutral avatar 20"
    ],
    categories: ["Big Ears Neutral Avatars"],
  },
];
