import { motion } from "framer-motion";
import GridContainer from "@/ui/GridContainer";
import { WidgetsProps } from "@/utils/types";

export default function Widgets({ widgetsData, type = "color" }: WidgetsProps) {
  return (
    <GridContainer Styles="xs:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]! gap-[10px]!">
      {widgetsData?.map(({ icon: Icon, title, description }, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: index % 2 === 0 ? -50 : 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.02 }}
          key={index}
          className={`flex ${type === "color" ? "odd:bg-accent-light-color even:bg-widget-light-color dark:odd:bg-accent-dark-color dark:even:bg-widget-dark-color md:flex-row md:items-start md:text-left" : "border-accent-light-color bg-secondary-light-color dark:border-accent-dark-color dark:bg-secondary-dark-color border"} min-h-[125px] w-full flex-col items-center gap-[15px] rounded-md p-5 text-center`}
        >
          <div
            className={`${type === "color" ? "bg-primary-light-color dark:bg-primary-dark-color md:text-3xl" : "border-text-light-color dark:border-text-dark-color border md:text-5xl"} flexCenter rounded-full p-3 text-4xl md:p-[10px]`}
          >
            <Icon />
          </div>
          <div className="flex-1">
            <h3
              className={`${type === "color" ? "text-lg font-bold md:text-[0.9rem]" : "text-3xl font-semibold md:text-4xl"}`}
            >
              {title}
            </h3>
            <p
              className={`text-base ${type === "color" ? "md:text-sm" : "md:text-lg"}`}
            >
              {description}
            </p>
          </div>
        </motion.div>
      ))}
    </GridContainer>
  );
}
