import { Code } from "@radix-ui/themes";
import { useState } from "react";
import { CodeBlock } from "../codeblock";
import {
  TabGroup,
  TabList,
  TabListItem,
  TabPanel,
  TabPanelGroup,
} from "../tabs";
import { Section } from "./section-template";

const beforeCode = `
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/table'

function Example({ users }) {
  return (
    <Table
      bleed
      className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Handle</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Access</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.handle}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>@{user.handle}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-zinc-500">{user.access}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
`;

const afterCode = `
import { Table } from '@/components/table'
import { Badge } from '@/components/badge'

function Example({ users }) {
  return (
    <Table
      bleed
      className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]"
      head={["Name", "Handle", "Role", "Email", "Access"]}
      //  body={users} simple option if no customization needed
      body={
        users.map((user) => [
          { children: user.name, className: "font-medium" },
          { children: \`@\${user.handle}\` },
          { children: user.role },
          { children: user.email },
          { children: user.access, className: "text-zinc-500" },
        ])
      }
    />
  )
}
`;

export const TeachingSection = () => {
  const [composableView, setComposableView] = useState(0);
  return (
    <Section id='teaching' title='Teaching ability'>
      <p className='leading-8'>
        My most common form of teaching to date has been mentorship. This is
        difficult to display publicly, but anecdotally, every person that I have
        in mind that I&apos;ve mentored has gone on to new jobs to work with the
        technologies and strategies that I brought to them.
      </p>

      <h3 className='text-md mt-8 text-sage-11'>
        Let me use Catalyst as an example of how, through feedback, I pass on knowledge
      </h3>

      <p className='leading-8'>
        One reason that I think Tailwind is loved profoundly is the ease-of-use
        and therefore the DX. I think we could be missing some low hanging fruit
        if we don&apos;t modify our approach to the component APIs.
      </p>

      <p className='leading-8'>
        We should be shipping both the Verbose with deep customization and
        potentially better readability and the Shorthand for quick and easy
        usage. i.e. What that would look like in practice is modifying your
        approach from only Composable, which is verbose but also shipping a
        shorthand option.
      </p>

      <p className='leading-8'>
        The shorthand option allows for less code written and direct intellisense in a developer&apos;s IDE. I completely agree that the verbose option is necessary for deep customization, but shipping both is not a very large change for us and would Significantly improve a developer, who wants to stay in the zone&apos;s, developer experience with Catalyst.
      </p>

      <TabGroup
        selectedIndex={composableView}
        setSelectedIndex={setComposableView}
      >
        <TabList className='mx-auto mt-8 mb-3'>
          <TabListItem>Verbose</TabListItem>
          <TabListItem>Shorthand</TabListItem>
        </TabList>
        <TabPanelGroup>
          <TabPanel>
            <CodeBlock code={beforeCode} language='ts' />
          </TabPanel>
          <TabPanel>
            <CodeBlock code={afterCode} language='ts' />
          </TabPanel>
        </TabPanelGroup>
      </TabGroup>

      <h3 className='text-md mt-8 text-sage-11'>
        I also have some general Catalyst notes
      </h3>

      <ul className="list-['—_'] list-inside marker:text-mint-10 space-y-3">
        <li>
          Catalyst docs need copy buttons on the examples. Ideally editable,
          maybe using Tailwind Play?
        </li>
        <li>
          LOVE that you integrate the router directly rather than using a
          polymorphic prop. Significantly better DX.
        </li>
        <li>
          <Code>Alert</Code> component should have the Dialog primitive API
          documented inline too or at the very least, be linking out.
        </li>
        <li>
          Have you considered a form library integration? Either Formik or
          react-hook-form are great options. I ask because a Catalyst or
          Headless UI implementation of this would be a great spot for a massive
          DX win.
        </li>
        <li>
          Another potentially low hanging fruit is a set of chart components!
          Tremor.so is making some great progress here, but I think we could do
          something even more tailored to Catalyst.
        </li>
        <li>
          I&apos;d really love to hear the thought process on{" "}
          <Code>`color`</Code> vs <Code>`colorScheme`</Code>` or{" "}
          <Code>`colorTheme`</Code>`. Specifically, I think this could cause a
          lot of confusion between CSS (text color) and Catalyst + Tailwind
        </li>
      </ul>
    </Section>
  );
};
