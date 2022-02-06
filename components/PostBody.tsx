import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import markdownStyles from './postbody-styles.module.css';

type Props = {
  content: string;
};

export const PostBody: FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto unreset">
      <ReactMarkdown
        className={markdownStyles.markdown}
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                className="rounded-md"
                style={darcula}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                className={`${className} py-0.5 px-1 font-mono rounded-md text-zinc-600 bg-zinc-100 border-2`}
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
