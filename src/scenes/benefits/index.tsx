import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Home from "../home";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  },
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="my-5 text-sm">
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            We offer world-class fitness equipment, expert trainers, and diverse classes to help you reach your ultimate fitness goals effortlessly. We genuinely care about every member and are dedicated to your success.
          </p>
        </div>

        {/* BENEFITS */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >

          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits