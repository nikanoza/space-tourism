import { Douglas, Ansari, Mark, Victor } from "assets";

export type CrewType = {
  name: string;
  position: string;
  bio: string;
  avatar: string;
};

const data: CrewType[] = [
  {
    name: "Douglas Hurley",
    position: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    avatar: Douglas,
  },
  {
    name: "MARK SHUTTLEWORTH",
    position: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    avatar: Mark,
  },
  {
    name: "Victor Glover",
    position: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    avatar: Victor,
  },
  {
    name: "Anousheh Ansari",
    position: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    avatar: Ansari,
  },
];

export default data;
