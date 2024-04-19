import { CodeBlock } from "@/components/codeblock";
import {
  CohereArrowButton,
  CohereButton,
  CohereButtonProps,
} from "@/components/cohere-examples";
import { ExampleFrame, ExampleFrameProps } from "@/components/example-frame";
import { Figure, FigureProps } from "@/components/figure";
import { StyledExternalLink } from "@/components/styled-external-link";
import { Blockquote, Code } from "@radix-ui/themes";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { CodeBlockProps } from "react-code-block/dist/code-block";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className='text-2xl mt-8 mb-3 text-sage-12'>{props.children}</h1>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className='text-xl mt-8 mb-3 text-sage-12'>{props.children}</h2>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className='text-lg mt-8 mb-2 text-sage-11'>{props.children}</h3>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className='text-md mt-8 mb-2 text-sage-11'>{props.children}</h4>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className='text-md mb-6'>{props.children}</p>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-['—_'] list-inside marker:text-mint-10 mt-2 space-y-1 mb-3">
      {props.children}
    </ul>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className='list-decimal list-inside marker:text-mint-11 mt-2 space-y-1 mb-3'>
      {props.children}
    </ol>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className='text-sage-11'>{props.children}</li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <Blockquote size='3' className='text-sage-10'>
      {props.children}
    </Blockquote>
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <Code>{props.children}</Code>
  ),
  a: (props: React.HTMLAttributes<HTMLAnchorElement>) => (
    // TODO: sort the types between Radix Link and HMTLAnchorElement
    // @ts-ignore
    <StyledExternalLink {...props}>{props.children}</StyledExternalLink>
  ),
  hr: (props: React.HtmlHTMLAttributes<HTMLHRElement>) => (
    <hr className='border-sage-3 my-8' {...props} />
  ),
  ExampleFrame: (props: ExampleFrameProps) => (
    <ExampleFrame className={clsx("my-4", props.className)} {...props} />
  ),
  CohereArrowButton: (props: CohereButtonProps) => (
    <CohereArrowButton {...props} />
  ),
  CohereButton: (props: CohereButtonProps) => <CohereButton {...props} />,
  Image: ({
    alt,
    aspectRatio,
    className,
    ...props
  }: ImageProps & { aspectRatio: string }) => (
    <div
      className={clsx(`aspect-[32/21] relative`)}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        alt={alt ?? ""}
        className={clsx("rounded-xl mx-auto", className)}
        {...props}
      />
    </div>
  ),
  CodeBlock: ({ ...props }: Omit<CodeBlockProps, "children">) => (
    <>
      <CodeBlock {...props} />
      <div className='h-6' />
    </>
  ),
  Figure: ({ className, ...props }: FigureProps) => <Figure className={clsx("mb-6", className)} {...props} />,
};
