import clsx from "clsx";
import { themes } from "prism-react-renderer";
import { useCallback, useEffect, useState } from "react";
import {
  CodeBlockProps,
  CodeBlock as TemplateBlock,
} from "react-code-block";
import { useCopyToClipboard } from "react-use";
import { Check, Copy } from "lucide-react";

export const CodeBlock = ({
  code,
  language,
  lines,
  words,
  fileName,
  ...props
}: Omit<CodeBlockProps, "children"> & { fileName?: string }) => {
  const [, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = useCallback(() => {
    copyToClipboard(code);
    setIsCopied(true);
  }, [code, copyToClipboard]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <TemplateBlock
      code={code}
      language={language}
      lines={lines}
      words={words}
      theme={themes.oneDark}
      {...props}
    >
      <div className="bg-[#0d0d0c] text-[#f1f0eb] dark:border dark:border-hair py-4 px-0! overflow-x-auto relative text-sm font-mono">
        {/* Holds copy & fileName */}
        <div className="flex items-center justify-between pr-6 pl-4 pb-2">
          <p className='text-[#f1f0eb]/60 text-xs uppercase'>{fileName ?? " "}</p>

          <button
            type='button'
            onClick={copyCode}
            aria-label={isCopied ? "Copied" : "Copy code"}
            className='size-8 inline-flex items-center justify-center text-[#f1f0eb]/70 hover:text-[#f1f0eb] cursor-pointer'
          >
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>


        <TemplateBlock.Code>
          {({ isLineHighlighted }) => (
            <div
              className={clsx(`table-row relative`, {
                "bg-white/10": isLineHighlighted && lines,
                "opacity-85": !isLineHighlighted && lines,
              })}
            >
              <TemplateBlock.LineNumber className='table-cell pl-3 pr-4 text-right select-none text-[#f1f0eb]/40' />
              <TemplateBlock.LineContent className='table-cell w-full pr-6'>
                {isLineHighlighted && (
                  <div className="absolute inset-0 left-1 w-0.5 h-5 bg-accent" />
                )}
                <TemplateBlock.Token>
                  {({ isTokenHighlighted, children }) => (
                    <span
                      className={clsx({
                        "bg-white/15 px-1 py-0.5":
                          isTokenHighlighted && words,
                      })}
                    >
                      {children}
                    </span>
                  )}
                </TemplateBlock.Token>
              </TemplateBlock.LineContent>
            </div>
          )}
        </TemplateBlock.Code>
        {language ? <p className='absolute bottom-4 right-4 text-[#f1f0eb]/50 text-xs uppercase'>{language}</p> : ""}
      </div>
    </TemplateBlock>
  );
};
