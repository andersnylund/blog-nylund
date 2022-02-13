import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

type Props = {
  content: string;
};

export const PostBody: FC<Props> = ({ content }) => (
  <StyledMarkdown
    components={{
      code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          <CodeBlock
            className={className}
            style={darcula}
            language={match[1]}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </CodeBlock>
        ) : (
          <InlineCode className={className} {...props}>
            {children}
          </InlineCode>
        );
      },
    }}
  >
    {content}
  </StyledMarkdown>
);

const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 1.125rem;
  line-height: 1.75rem;

  p,
  ul,
  ol,
  blockquote {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  blockquote {
    color: hsl(0, 0%, 20%);
    font-size: 1rem;
    line-height: 1.5rem;
  }

  h2 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    line-height: 1.375;
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.375;
  }

  img {
    width: 100%;
  }
`;

const CodeBlock = styled(SyntaxHighlighter)`
  border-radius: 0.5rem;
`;

const InlineCode = styled.code`
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  border-radius: 0.375rem;
  background-color: hsl(0 0% 95%);
  border: 1px solid hsl(0 0% 80%);
`;
