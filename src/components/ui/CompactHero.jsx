import './compact-hero.css';

export function CompactHero({ title, subtitle }) {
  return (
    <section className="compact-hero">
      <span className="compact-hero__glyph" aria-hidden="true">ΛΣΥ</span>
      <div className="compact-hero__inner">
        <h1 className="compact-hero__title">{title}</h1>
        <p className="compact-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
