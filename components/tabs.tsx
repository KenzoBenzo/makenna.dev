import { Tab } from "@headlessui/react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import {
  Fragment,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

const usePrevious = (value: number) => {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export interface TabContextState {
  previousIndex: number | undefined;
  selectedIndex: number;
}

export const TabContext = createContext<TabContextState | null>(null);

export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) throw Error("TabContext must be provided");

  return context;
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? -500 : 500,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
    };
  },
};

export const TabPanel = ({ children }: PropsWithChildren) => {
  const { selectedIndex, previousIndex } = useTabContext();
  const direction = (previousIndex || 0) > selectedIndex ? 1 : -1;
  return (
    <Tab.Panel
      key={selectedIndex}
      as={motion.div}
      custom={direction}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        duration: 0.15,
      }}
      variants={variants}
      className='focus:outline-none'
    >
      {children}
    </Tab.Panel>
  );
};

export const TabPanelGroup = ({ children }: PropsWithChildren) => {
  const { selectedIndex, previousIndex } = useTabContext();
  const direction = (previousIndex || 0) > selectedIndex ? 1 : -1;

  return (
    <Tab.Panels>
      <AnimatePresence initial={false} custom={direction}>
        {children}
      </AnimatePresence>
    </Tab.Panels>
  );
};

export const TabListItem = ({
  children,
  className,
  selectedClassName,
  fullWidth = false,
}: TabItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={clsx(
            "relative flex h-8 min-w-[150px] sm:min-w-[180px] cursor-pointer appearance-none items-center justify-center focus:outline-none",
            {
              "w-full": fullWidth,
            },
            className
          )}
        >
          {selected && (
            <motion.div
              className={clsx(
                "bg-[var(--color-page-background)] absolute inset-0 z-[1] flex items-center justify-center rounded-md border-[0.5px] border-sage-4",
                selectedClassName
              )}
              layoutId='active'
              transition={{
                duration: 0.15,
              }}
            />
          )}
          <span className='z-[2] whitespace-nowrap'>{children}</span>
        </div>
      )}
    </Tab>
  );
};

export const TabList = ({
  children,
  className,
  fullWidth = false,
}: PropsWithChildren & { className?: string; fullWidth?: boolean }) => {
  return (
    <Tab.List
      className={clsx(
        "bg-sage-3 flex h-9 appearance-none items-center rounded-lg py-1 px-0.5 shadow-inner overflow-hidden",
        {
          "max-w-fit": !fullWidth,
        },
        className
      )}
    >
      {children}
    </Tab.List>
  );
};

export interface TabProps extends PropsWithChildren {
  defaultTab?: number;
  /**Only applied when using items, otherwise you'll need to apply individually.*/
  fullWidth?: boolean;
  items?: Omit<TabItemProps, "fullWidth">[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export interface TabItemProps {
  children: ReactNode;
  label?: string;
  className?: string;
  selectedClassName?: string;
  fullWidth?: boolean;
}

/** Pass `tab` as the index of the tab you want to open by default. */
export const TabGroup = ({
  children,
  defaultTab,
  items,
  fullWidth,
  selectedIndex,
  setSelectedIndex,
}: TabProps) => {
  const previousIndex = usePrevious(selectedIndex);

  return (
    <TabContext.Provider value={{ selectedIndex, previousIndex }}>
      <Tab.Group
        defaultIndex={defaultTab}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        {items && (
          <TabList fullWidth={fullWidth}>
            {items.map((item, index) => (
              <TabListItem
                key={item?.label || index}
                fullWidth={fullWidth}
                {...item}
              />
            ))}
          </TabList>
        )}
        {children}
      </Tab.Group>
    </TabContext.Provider>
  );
};
