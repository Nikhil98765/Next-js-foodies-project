import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealDetailPage({ params }) {
  const { slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  const { title, image, summary, instructions, creator, creator_email } = meal;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={image} fill/>
        </div>
        <div className={styles.headerText}>
          <h1>{title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${creator_email}`}>{creator}</a>
          </p>
          <p className={styles.summary}>{summary}</p>
        </div>
      </header>
      <main>
        <p className={styles.instructions} dangerouslySetInnerHTML={{
          __html: instructions.replace(/\n/g, '<br />')
        }}>
        </p>
      </main>
    </>
  )
}