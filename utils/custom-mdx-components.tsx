import { Blockquote, Code, Heading } from "@radix-ui/themes";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading size="1">{props.children}</Heading>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading size="2">{props.children}</Heading>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading size="3">{props.children}</Heading>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Heading size="4">{props.children}</Heading>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-md mb-3">{props.children}</p>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-['—_'] list-inside marker:text-mint-10 mt-2 space-y-1  mb-3">{props.children}</ul>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-sm">{props.children}</li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <Blockquote highContrast size="2">
      {props.children}
    </Blockquote>
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <Code>{props.children}</Code>
  )
}