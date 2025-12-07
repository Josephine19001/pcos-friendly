import PageLayout from "@/components/PageLayout";

interface BlogPostProps {
  title: string;
  subtitle?: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
}

export default function BlogPost({ title, subtitle, date, readTime, children }: BlogPostProps) {
  return (
    <PageLayout minimal>
      <article className="flex-1 overflow-y-auto py-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted text-base sm:text-lg mb-4">
                {subtitle}
              </p>
            )}
            <div className="flex items-center gap-3 text-xs text-muted">
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>{readTime}</span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-sm max-w-none">
            {children}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}

// Reusable blog content components
export function BlogSection({ children }: { children: React.ReactNode }) {
  return <section className="mb-8">{children}</section>;
}

export function BlogHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg sm:text-xl font-semibold mb-3 mt-6">{children}</h2>;
}

export function BlogSubheading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold mb-2 mt-4">{children}</h3>;
}

export function BlogParagraph({ children }: { children: React.ReactNode }) {
  return <p className="text-muted text-sm leading-relaxed mb-4">{children}</p>;
}

export function BlogList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside text-muted text-sm leading-relaxed space-y-2 mb-4 ml-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function BlogQuote({ children, source }: { children: React.ReactNode; source?: string }) {
  return (
    <blockquote className="border-l-2 border-primary pl-4 my-6">
      <p className="text-muted text-sm italic leading-relaxed">{children}</p>
      {source && <cite className="text-xs text-muted mt-2 block">— {source}</cite>}
    </blockquote>
  );
}

export function BlogStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl sm:text-3xl font-bold gradient-text">{value}</div>
      <div className="text-xs text-muted mt-1">{label}</div>
    </div>
  );
}

export function BlogStatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6 bg-white/5 rounded-lg p-4">
      {children}
    </div>
  );
}

export function BlogHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 rounded-lg p-4 my-6">
      <p className="text-sm text-muted leading-relaxed">{children}</p>
    </div>
  );
}

export function BlogReference({ source, url }: { source: string; url?: string }) {
  return (
    <span className="text-xs text-primary">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
          [{source}]
        </a>
      ) : (
        <span>[{source}]</span>
      )}
    </span>
  );
}
