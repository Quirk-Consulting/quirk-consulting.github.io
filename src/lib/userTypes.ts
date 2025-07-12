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
  "Big Ears Neutral Avatars",
  "Big Smile Avatars",
  "Bottts Avatars",
  "Bottts Neutral Avatars",
  "Croodles Neutral Avatars",
  "Fun Emoji Avatars",
  "Lorelei Neutral Avatars",
  "Pixel Art Avatars",
  "Pixel Art Neutral Avatars",
  "Thumbs Avatars"
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

  /* Big Smile Avatars */
  {
    name: "Big Smile Avatar 1",
    path: getUserIconPath("bigSmile-1752312620543.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 1"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 2",
    path: getUserIconPath("bigSmile-1752312622934.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 2"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 3",
    path: getUserIconPath("bigSmile-1752312624789.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 3"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 4",
    path: getUserIconPath("bigSmile-1752312626868.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 4"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 5",
    path: getUserIconPath("bigSmile-1752312628840.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 5"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 6",
    path: getUserIconPath("bigSmile-1752312631070.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 6"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 7",
    path: getUserIconPath("bigSmile-1752312632989.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 7"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 8",
    path: getUserIconPath("bigSmile-1752312636040.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 8"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 9",
    path: getUserIconPath("bigSmile-1752312638917.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 9"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 10",
    path: getUserIconPath("bigSmile-1752312642532.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 10"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 11",
    path: getUserIconPath("bigSmile-1752312644809.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 11"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 12",
    path: getUserIconPath("bigSmile-1752312647446.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 12"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 13",
    path: getUserIconPath("bigSmile-1752312650924.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 13"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 14",
    path: getUserIconPath("bigSmile-1752312656447.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 14"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 15",
    path: getUserIconPath("bigSmile-1752312658582.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 15"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 16",
    path: getUserIconPath("bigSmile-1752312662274.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 16"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 17",
    path: getUserIconPath("bigSmile-1752312673654.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 17"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 18",
    path: getUserIconPath("bigSmile-1752312676480.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 18"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 19",
    path: getUserIconPath("bigSmile-1752312679088.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 19"
    ],
    categories: ["Big Smile Avatars"],
  },
  {
    name: "Big Smile Avatar 20",
    path: getUserIconPath("bigSmile-1752312684655.svg"),
    searchTerms: [
      "big smile", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "smile",
      "big smile avatar 20"
    ],
    categories: ["Big Smile Avatars"],
  },

  /* Bottts Avatars */
  {
    name: "Bottts Avatar 1",
    path: getUserIconPath("bottts-1752313186524.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 1"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 2",
    path: getUserIconPath("bottts-1752313189462.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 2"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 3",
    path: getUserIconPath("bottts-1752313191595.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 3"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 4",
    path: getUserIconPath("bottts-1752313194678.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 4"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 5",
    path: getUserIconPath("bottts-1752313201015.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 5"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 6",
    path: getUserIconPath("bottts-1752313208211.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 6"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 7",
    path: getUserIconPath("bottts-1752313210830.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 7"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 8",
    path: getUserIconPath("bottts-1752313213837.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 8"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 9",
    path: getUserIconPath("bottts-1752313216974.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 9"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 10",
    path: getUserIconPath("bottts-1752313221542.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 10"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 11",
    path: getUserIconPath("bottts-1752313223929.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 11"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 12",
    path: getUserIconPath("bottts-1752313226130.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 12"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 13",
    path: getUserIconPath("bottts-1752313229331.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 13"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 14",
    path: getUserIconPath("bottts-1752313232508.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 14"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 15",
    path: getUserIconPath("bottts-1752313234510.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 15"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 16",
    path: getUserIconPath("bottts-1752313236472.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 16"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 17",
    path: getUserIconPath("bottts-1752313238737.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 17"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 18",
    path: getUserIconPath("bottts-1752313241137.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 18"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 19",
    path: getUserIconPath("bottts-1752313243341.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 19"
    ],
    categories: ["Bottts Avatars"],
  },
  {
    name: "Bottts Avatar 20",
    path: getUserIconPath("bottts-1752313245598.svg"),
    searchTerms: [
      "bottts", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts avatar 20"
    ],
    categories: ["Bottts Avatars"],
  },

  /* Bottts Neutral Avatars */
  {
    name: "Bottts Neutral Avatar 1",
    path: getUserIconPath("botttsNeutral-1752313447896.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 1"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 2",
    path: getUserIconPath("botttsNeutral-1752313452514.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 2"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 3",
    path: getUserIconPath("botttsNeutral-1752313455104.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 3"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 4",
    path: getUserIconPath("botttsNeutral-1752313456920.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 4"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 5",
    path: getUserIconPath("botttsNeutral-1752313464472.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 5"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 6",
    path: getUserIconPath("botttsNeutral-1752313472556.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 6"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 7",
    path: getUserIconPath("botttsNeutral-1752313475659.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 7"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 8",
    path: getUserIconPath("botttsNeutral-1752313478577.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 8"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 9",
    path: getUserIconPath("botttsNeutral-1752313481778.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 9"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 10",
    path: getUserIconPath("botttsNeutral-1752313487290.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 10"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 11",
    path: getUserIconPath("botttsNeutral-1752313491857.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 11"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 12",
    path: getUserIconPath("botttsNeutral-1752313495103.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 12"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 13",
    path: getUserIconPath("botttsNeutral-1752313507129.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 13"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 14",
    path: getUserIconPath("botttsNeutral-1752313510042.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 14"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 15",
    path: getUserIconPath("botttsNeutral-1752313517368.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 15"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 16",
    path: getUserIconPath("botttsNeutral-1752313523373.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 16"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 17",
    path: getUserIconPath("botttsNeutral-1752313525960.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 17"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 18",
    path: getUserIconPath("botttsNeutral-1752313529326.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 18"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 19",
    path: getUserIconPath("botttsNeutral-1752313531842.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 19"
    ],
    categories: ["Bottts Neutral Avatars"],
  },
  {
    name: "Bottts Neutral Avatar 20",
    path: getUserIconPath("botttsNeutral-1752313534952.svg"),
    searchTerms: [
      "bottts", "neutral", "robot", "bot", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "android", "individual", "identity", "persona", "account", "member",
      "bottts neutral avatar 20"
    ],
    categories: ["Bottts Neutral Avatars"],
  },

  /* Croodles Neutral Avatars */
  {
    name: "Croodles Neutral Avatar 1",
    path: getUserIconPath("croodlesNeutral-1752314944341.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 1"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 2",
    path: getUserIconPath("croodlesNeutral-1752314947129.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 2"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 3",
    path: getUserIconPath("croodlesNeutral-1752314949494.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 3"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 4",
    path: getUserIconPath("croodlesNeutral-1752314951700.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 4"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 5",
    path: getUserIconPath("croodlesNeutral-1752314955542.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 5"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 6",
    path: getUserIconPath("croodlesNeutral-1752314958799.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 6"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 7",
    path: getUserIconPath("croodlesNeutral-1752314964229.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 7"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 8",
    path: getUserIconPath("croodlesNeutral-1752314966949.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 8"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 9",
    path: getUserIconPath("croodlesNeutral-1752314970458.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 9"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 10",
    path: getUserIconPath("croodlesNeutral-1752314973933.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 10"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 11",
    path: getUserIconPath("croodlesNeutral-1752314977497.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 11"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 12",
    path: getUserIconPath("croodlesNeutral-1752314980382.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 12"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 13",
    path: getUserIconPath("croodlesNeutral-1752314984929.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 13"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 14",
    path: getUserIconPath("croodlesNeutral-1752314992673.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 14"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 15",
    path: getUserIconPath("croodlesNeutral-1752314995941.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 15"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 16",
    path: getUserIconPath("croodlesNeutral-1752314999729.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 16"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 17",
    path: getUserIconPath("croodlesNeutral-1752315007970.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 17"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 18",
    path: getUserIconPath("croodlesNeutral-1752315011408.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 18"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 19",
    path: getUserIconPath("croodlesNeutral-1752315014290.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 19"
    ],
    categories: ["Croodles Neutral Avatars"],
  },
  {
    name: "Croodles Neutral Avatar 20",
    path: getUserIconPath("croodlesNeutral-1752315017529.svg"),
    searchTerms: [
      "croodles", "neutral", "doodle", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "sketch",
      "croodles neutral avatar 20"
    ],
    categories: ["Croodles Neutral Avatars"],
  },

  /* Fun Emoji Avatars */
  {
    name: "Fun Emoji Avatar 1",
    path: getUserIconPath("funEmoji-1752316271303.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 1"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 2",
    path: getUserIconPath("funEmoji-1752316274889.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 2"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 3",
    path: getUserIconPath("funEmoji-1752316277279.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 3"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 4",
    path: getUserIconPath("funEmoji-1752316280736.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 4"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 5",
    path: getUserIconPath("funEmoji-1752316283151.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 5"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 6",
    path: getUserIconPath("funEmoji-1752316287082.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 6"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 7",
    path: getUserIconPath("funEmoji-1752316291542.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 7"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 8",
    path: getUserIconPath("funEmoji-1752316293930.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 8"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 9",
    path: getUserIconPath("funEmoji-1752316298188.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 9"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 10",
    path: getUserIconPath("funEmoji-1752316302924.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 10"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 11",
    path: getUserIconPath("funEmoji-1752316308995.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 11"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 12",
    path: getUserIconPath("funEmoji-1752316314713.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 12"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 13",
    path: getUserIconPath("funEmoji-1752316324471.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 13"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 14",
    path: getUserIconPath("funEmoji-1752316328280.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 14"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 15",
    path: getUserIconPath("funEmoji-1752316330436.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 15"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 16",
    path: getUserIconPath("funEmoji-1752316337256.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 16"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 17",
    path: getUserIconPath("funEmoji-1752316340440.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 17"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 18",
    path: getUserIconPath("funEmoji-1752316359849.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 18"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 19",
    path: getUserIconPath("funEmoji-1752316362707.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 19"
    ],
    categories: ["Fun Emoji Avatars"],
  },
  {
    name: "Fun Emoji Avatar 20",
    path: getUserIconPath("funEmoji-1752316367053.svg"),
    searchTerms: [
      "fun emoji", "emoji", "fun", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "expression", "individual", "identity", "persona", "account", "member", "smiley",
      "fun emoji avatar 20"
    ],
    categories: ["Fun Emoji Avatars"],
  },

  /* Lorelei Neutral Avatars */
  {
    name: "Lorelei Neutral Avatar 1",
    path: getUserIconPath("loreleiNeutral-1752319284855.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 1"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 2",
    path: getUserIconPath("loreleiNeutral-1752319286905.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 2"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 3",
    path: getUserIconPath("loreleiNeutral-1752319288556.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 3"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 4",
    path: getUserIconPath("loreleiNeutral-1752319290807.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 4"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 5",
    path: getUserIconPath("loreleiNeutral-1752319292806.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 5"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 6",
    path: getUserIconPath("loreleiNeutral-1752319294907.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 6"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 7",
    path: getUserIconPath("loreleiNeutral-1752319297334.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 7"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 8",
    path: getUserIconPath("loreleiNeutral-1752319299399.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 8"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 9",
    path: getUserIconPath("loreleiNeutral-1752319301298.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 9"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 10",
    path: getUserIconPath("loreleiNeutral-1752319303488.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 10"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 11",
    path: getUserIconPath("loreleiNeutral-1752319305306.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 11"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 12",
    path: getUserIconPath("loreleiNeutral-1752319307142.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 12"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 13",
    path: getUserIconPath("loreleiNeutral-1752319309540.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 13"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 14",
    path: getUserIconPath("loreleiNeutral-1752319311744.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 14"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 15",
    path: getUserIconPath("loreleiNeutral-1752319313807.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 15"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 16",
    path: getUserIconPath("loreleiNeutral-1752319316529.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 16"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 17",
    path: getUserIconPath("loreleiNeutral-1752319318442.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 17"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 18",
    path: getUserIconPath("loreleiNeutral-1752319320157.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 18"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 19",
    path: getUserIconPath("loreleiNeutral-1752319322576.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 19"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },
  {
    name: "Lorelei Neutral Avatar 20",
    path: getUserIconPath("loreleiNeutral-1752319324645.svg"),
    searchTerms: [
      "lorelei", "neutral", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member",
      "lorelei neutral avatar 20"
    ],
    categories: ["Lorelei Neutral Avatars"],
  },

  /* Pixel Art Avatars */
  {
    name: "Pixel Art Avatar 1",
    path: getUserIconPath("pixelArt-1752355367827.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 1"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 2",
    path: getUserIconPath("pixelArt-1752355370545.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 2"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 3",
    path: getUserIconPath("pixelArt-1752355374780.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 3"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 4",
    path: getUserIconPath("pixelArt-1752355377083.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 4"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 5",
    path: getUserIconPath("pixelArt-1752355380393.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 5"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 6",
    path: getUserIconPath("pixelArt-1752355384137.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 6"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 7",
    path: getUserIconPath("pixelArt-1752355388496.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 7"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 8",
    path: getUserIconPath("pixelArt-1752355392436.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 8"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 9",
    path: getUserIconPath("pixelArt-1752355395780.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 9"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 10",
    path: getUserIconPath("pixelArt-1752355401709.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 10"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 11",
    path: getUserIconPath("pixelArt-1752355405170.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 11"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 12",
    path: getUserIconPath("pixelArt-1752355410417.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 12"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 13",
    path: getUserIconPath("pixelArt-1752355415629.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 13"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 14",
    path: getUserIconPath("pixelArt-1752355418859.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 14"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 15",
    path: getUserIconPath("pixelArt-1752355426497.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 15"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 16",
    path: getUserIconPath("pixelArt-1752355434251.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 16"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 17",
    path: getUserIconPath("pixelArt-1752355440176.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 17"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 18",
    path: getUserIconPath("pixelArt-1752355446931.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 18"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 19",
    path: getUserIconPath("pixelArt-1752355454308.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 19"
    ],
    categories: ["Pixel Art Avatars"],
  },
  {
    name: "Pixel Art Avatar 20",
    path: getUserIconPath("pixelArt-1752355470306.svg"),
    searchTerms: [
      "pixel art", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art avatar 20"
    ],
    categories: ["Pixel Art Avatars"],
  },

  /* Pixel Art Neutral Avatars */
  {
    name: "Pixel Art Neutral Avatar 1",
    path: getUserIconPath("pixelArtNeutral-1752356851312.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 1"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 2",
    path: getUserIconPath("pixelArtNeutral-1752356853632.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 2"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 3",
    path: getUserIconPath("pixelArtNeutral-1752356855490.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 3"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 4",
    path: getUserIconPath("pixelArtNeutral-1752356857284.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 4"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 5",
    path: getUserIconPath("pixelArtNeutral-1752356859902.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 5"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 6",
    path: getUserIconPath("pixelArtNeutral-1752356864342.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 6"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 7",
    path: getUserIconPath("pixelArtNeutral-1752356868635.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 7"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 8",
    path: getUserIconPath("pixelArtNeutral-1752356870953.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 8"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 9",
    path: getUserIconPath("pixelArtNeutral-1752356873639.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 9"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 10",
    path: getUserIconPath("pixelArtNeutral-1752356877200.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 10"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 11",
    path: getUserIconPath("pixelArtNeutral-1752356880297.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 11"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 12",
    path: getUserIconPath("pixelArtNeutral-1752356882339.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 12"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 13",
    path: getUserIconPath("pixelArtNeutral-1752357002111.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 13"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 14",
    path: getUserIconPath("pixelArtNeutral-1752357004792.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 14"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 15",
    path: getUserIconPath("pixelArtNeutral-1752357011502.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 15"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 16",
    path: getUserIconPath("pixelArtNeutral-1752357017945.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 16"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 17",
    path: getUserIconPath("pixelArtNeutral-1752357021291.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 17"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 18",
    path: getUserIconPath("pixelArtNeutral-1752357023730.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 18"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 19",
    path: getUserIconPath("pixelArtNeutral-1752357027562.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 19"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },
  {
    name: "Pixel Art Neutral Avatar 20",
    path: getUserIconPath("pixelArtNeutral-1752357033630.svg"),
    searchTerms: [
      "pixel art", "neutral", "pixel", "retro", "8-bit", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "gaming",
      "pixel art neutral avatar 20"
    ],
    categories: ["Pixel Art Neutral Avatars"],
  },

  /* Thumbs Avatars */
  {
    name: "Thumbs Avatar 1",
    path: getUserIconPath("thumbs-1752358148106.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 1"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 2",
    path: getUserIconPath("thumbs-1752358150892.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 2"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 3",
    path: getUserIconPath("thumbs-1752358153296.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 3"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 4",
    path: getUserIconPath("thumbs-1752358158692.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 4"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 5",
    path: getUserIconPath("thumbs-1752358161937.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 5"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 6",
    path: getUserIconPath("thumbs-1752358167370.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 6"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 7",
    path: getUserIconPath("thumbs-1752358170017.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 7"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 8",
    path: getUserIconPath("thumbs-1752358173070.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 8"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 9",
    path: getUserIconPath("thumbs-1752358175352.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 9"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 10",
    path: getUserIconPath("thumbs-1752358178651.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 10"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 11",
    path: getUserIconPath("thumbs-1752358181146.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 11"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 12",
    path: getUserIconPath("thumbs-1752358184799.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 12"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 13",
    path: getUserIconPath("thumbs-1752358188267.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 13"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 14",
    path: getUserIconPath("thumbs-1752358190706.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 14"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 15",
    path: getUserIconPath("thumbs-1752358193436.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 15"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 16",
    path: getUserIconPath("thumbs-1752358196526.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 16"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 17",
    path: getUserIconPath("thumbs-1752358199244.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 17"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 18",
    path: getUserIconPath("thumbs-1752358201849.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 18"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 19",
    path: getUserIconPath("thumbs-1752358204748.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 19"
    ],
    categories: ["Thumbs Avatars"],
  },
  {
    name: "Thumbs Avatar 20",
    path: getUserIconPath("thumbs-1752358207367.svg"),
    searchTerms: [
      "thumbs", "avatar", "user", "person", "profile", "character", "portrait",
      "face", "human", "individual", "identity", "persona", "account", "member", "thumb",
      "thumbs avatar 20"
    ],
    categories: ["Thumbs Avatars"],
  },
];
