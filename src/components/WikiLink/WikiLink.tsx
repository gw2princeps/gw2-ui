import clsx from 'clsx';
import React, { ReactElement } from 'react';
import css from './WikiLink.module.css';

// https://wiki.guildwars2.com/wiki/Template:Language
export const languages = [
  'en',
  'zh',
  'cs',
  'nl',
  'fi',
  'fr',
  'de',
  'hu',
  'it',
  'ja',
  'ko',
  'ms',
  'po',
  'pt',
  'ru',
  'es',
  'sv',
  'tr',
  'un',
] as const;
type languagesAvailable = typeof languages[number];

export interface WikiLinkProps {
  component?: any;
  to: string;
  lang?: languagesAvailable;
  className?: string;
}

const WikiLink = ({
  component: Component = 'a',
  to,
  lang = 'en',
  className,
}: WikiLinkProps): ReactElement => {
  return (
    <Component
      className={clsx(className, css.root)}
      href={`https://wiki-${lang}.guildwars2.com/wiki/Special:Search/${encodeURIComponent(
        to,
      )}`}
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {to}
    </Component>
  );
};

export default WikiLink;