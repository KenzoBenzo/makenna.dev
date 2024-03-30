import { AboutMe } from "@/components/landing-sections/about-me";
import {
  CareerExperience
} from "@/components/landing-sections/career-experience";
import { Personal } from "@/components/landing-sections/personal";
import { WorkInterests } from "@/components/landing-sections/work-interests";

export default function Home() {
  return (
    <>
      <AboutMe />
      <WorkInterests />
      <CareerExperience />
      <Personal />
    </>
  );
}
