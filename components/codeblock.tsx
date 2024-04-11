import { IconButton } from "@radix-ui/themes";
import clsx from "clsx";
import { themes } from "prism-react-renderer";
import { useCallback, useEffect, useState } from "react";
import {
  CodeBlockProps,
  CodeBlock as TemplateBlock,
} from "react-code-block/dist/code-block";
import { useCopyToClipboard } from "react-use";
import { ClipboardCheckIcon, ClipboardCopyIcon } from "./icons";

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
      <div className="dark bg-sage-1 py-4 !px-0 rounded-xl border border-sage-5 overflow-x-auto relative text-sm">
        {/* Holds copy & fileName */}
        <div className="flex items-center justify-between pr-6 pl-4 pb-2">
          {fileName ? <p className='text-sage-7 italic'>{fileName}</p> : ""}

          <IconButton
            color='gray'
            variant='ghost'
            onClick={copyCode}
          >
            {isCopied ? <ClipboardCheckIcon /> : <ClipboardCopyIcon />}
          </IconButton>
        </div>


        <TemplateBlock.Code>
          {({ isLineHighlighted }) => (
            <div
              className={clsx(`table-row relative`, {
                "bg-[var(--mint-a3)]": isLineHighlighted && lines,
                "opacity-85": !isLineHighlighted && lines,
              })}
            >
              <TemplateBlock.LineNumber className='table-cell pl-3 pr-4 text-right select-none text-sage-7' />
              <TemplateBlock.LineContent className='table-cell w-full pr-6'>
                {isLineHighlighted && (
                  <div className="absolute inset-0 left-1 rounded w-0.5 h-5 bg-mint-9" />
                )}
                <TemplateBlock.Token>
                  {({ isTokenHighlighted, children }) => (
                    <span
                      className={clsx({
                        "bg-[var(--mint-a3)] rounded-md px-1 py-0.5":
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
        {language ? <p className='absolute bottom-4 right-4 text-sage-7 italic'>{language}</p> : ""}
      </div>
    </TemplateBlock>
  );
};
