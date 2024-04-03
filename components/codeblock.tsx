import { IconButton } from "@radix-ui/themes";
import { useCallback } from "react";
import { CodeBlockProps, CodeBlock as TemplateBlock } from "react-code-block";
import { useCopyToClipboard } from 'react-use';
import { ClipboardCheckIcon, ClipboardCopyIcon } from "./icons";

export const CodeBlock = ({ code, language, lines, ...props }: Omit<CodeBlockProps, "children">) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  const copyCode = useCallback(() => {
    copyToClipboard(code);
  }, [code, copyToClipboard]);

  return (
    <TemplateBlock code={code} language={language} lines={lines} {...props}>
      <TemplateBlock.Code className='dark bg-sage-1 p-6 rounded-xl border dark:border-sage-5'>
        {({ isLineHighlighted }) => (
          <div
            className={`table-row ${lines && (isLineHighlighted ? "bg-mint-a3" : "opacity-60")
              }`}
          >
            <TemplateBlock.LineNumber
              className={`table-cell pl-6 pr-4 text-sm text-right select-none ${lines && (isLineHighlighted ? "text-gray-300" : "text-gray-500")
                }`}
            />
            <TemplateBlock.LineContent className='table-cell w-full pr-6'>
              <TemplateBlock.Token>
                {({ isTokenHighlighted, children }) => (
                  <span
                    className={
                      isTokenHighlighted
                        ? 'bg-mint-a3 rounded-md px-1 py-0.5'
                        : ''
                    }
                  >
                    {children}
                  </span>
                )}
              </TemplateBlock.Token>
            </TemplateBlock.LineContent>
            <IconButton onClick={copyCode} className="absolute top-2 right-2">
              {state.value ? <ClipboardCheckIcon /> : <ClipboardCopyIcon />}
            </IconButton>
          </div>
        )}
      </TemplateBlock.Code>
    </TemplateBlock>
  );
};
