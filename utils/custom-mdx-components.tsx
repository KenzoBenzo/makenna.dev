import { CodeBlock } from "@/components/codeblock";
import {
  CohereArrowButton,
  CohereButton,
  CohereButtonProps,
} from "@/components/cohere-examples";
import { ExampleFrame, ExampleFrameProps } from "@/components/example-frame";
import { Figure, FigureProps } from "@/components/figure";
import { StyledExternalLink } from "@/components/styled-external-link";
import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import { CodeBlockProps } from "react-code-block";

export const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className='font-display font-extrabold text-3xl sm:text-4xl leading-tight mt-14 mb-4 border-t-2 border-ink pt-3'>{props.children}</h2>
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className='font-display font-extrabold text-2xl sm:text-3xl leading-tight mt-14 mb-4 border-t-2 border-ink pt-3'>{props.children}</h2>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className='font-head font-extrabold text-2xl leading-tight mt-10 mb-3'>{props.children}</h3>
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className='font-semibold text-lg mt-8 mb-2'>{props.children}</h4>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className='text-[17px] leading-[1.7] mb-6'>{props.children}</p>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-2 mb-6 space-y-2 text-[17px] leading-[1.6]">{props.children}</ul>
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className='list-decimal pl-6 marker:font-mono marker:text-sm marker:text-ink-3 mt-2 mb-6 space-y-2 text-[17px] leading-[1.6]'>{props.children}</ol>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-5 relative [ul>&]:before:content-['—'] [ul>&]:before:absolute [ul>&]:before:left-0 [ul>&]:before:text-accent [ol>&]:pl-1">{props.children}</li>
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className='my-8 font-head font-bold text-2xl leading-snug border-t border-b border-ink py-5'>
      {props.children}
    </blockquote>
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className='font-mono text-[0.88em] bg-stock px-1 py-0.5'>{props.children}</code>
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <StyledExternalLink {...props}>{props.children}</StyledExternalLink>
  ),
  hr: (props: React.HtmlHTMLAttributes<HTMLHRElement>) => (
    <hr className='border-ink my-10' {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => <strong className='font-semibold'>{props.children}</strong>,
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
      className={clsx(`aspect-32/21 relative`)}
      style={{ aspectRatio: aspectRatio }}
    >
      <Image
        alt={alt ?? ""}
        className={clsx("mx-auto border border-hair rounded-xl", className)}
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
  Figure: ({ className, ...props }: FigureProps) => <Figure className={clsx("my-8", className)} {...props} />,
  Shot: ({ src, alt, caption, width, height, wide }: { src: string; alt: string; caption?: string; width: number; height: number; wide?: boolean }) => (
    <figure className={clsx("my-10", wide && "lg:-mx-24")}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 900px, 100vw" className="w-full h-auto border border-hair rounded-xl bg-stock" />
      {caption && <figcaption className="font-mono text-xs uppercase text-ink-3 mt-2">{caption}</figcaption>}
    </figure>
  ),
};
