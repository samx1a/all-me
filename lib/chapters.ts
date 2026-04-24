type Chapter = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

const chapters: Chapter[] = [
  {
    slug: "basketball",
    name: "Basketball",
    image: "/images/basketball.jpg",
    description:
      "playing basketball as a kid. always was more skilled than i actually played as? i mean i played worse than i actually was. was always self conscious if i missed or did something wrong, and that only made me play worse and not better.",
  },
  {
    slug: "first-luv",
    name: "Ava",
    image: "/images/heart.jpg",
    description:
      "my first crush. i honestly don't remember much from preschool but i remember seeing her in a 2nd grade summer camp and wanting to say something to her, but she didn't recognize me. at the end my mom ended up recognizing her when she came to pick me up and she asked ava if she remembered me. she said no",
  },
  {
    slug: "insecurities",
    name: "not feeling like i was enough",
    image: "/images/insecurity.jpg",
    description:
      "always had some type of inferiority complex growing up. like even if i wanted something i wasn't deserving of it. basically reason i didn't want to have birthday parties growing up since had no friends, didn't want to go after the things i wanted too since i didn't feel worthy of them anyways so whats the point of even trying",
  },
];

export default chapters;
