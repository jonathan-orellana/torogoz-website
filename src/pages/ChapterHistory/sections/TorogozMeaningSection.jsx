import { MeaningSection } from '../../../components/shared/MeaningSection';

const PARAGRAPHS = [
  'The torogoz symbolizes freedom, resilience, and cultural identity. Known for its inability to live in captivity, it represents the importance of living authentically and without limits.',
  'Its adaptability and strength reflect the journey of the founding brothers, while its deep cultural roots connect the chapter to heritage and unity.',
];

export function TorogozMeaningSection() {
  return (
    <MeaningSection
      title={<>The meaning of <span className="accent">Torogoz</span></>}
      imageSrc={"/assets/logos/torogoz-logo.png"}
      imageAlt="Torogoz Chapter seal â€” Lambda Sigma Upsilon, University of Virginia"
      paragraphs={PARAGRAPHS}
      variant="navy"
    />
  );
}
