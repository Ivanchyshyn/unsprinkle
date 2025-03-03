import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const sets = ['', '@2x', '@3x'];
  const srcNoExt = src.replace('.jpg', '');
  const avifSrcSet = sets.map((suffix, index) => `${srcNoExt}${suffix}.avif ${index+1}x`).join(', ');
  const jpgSrcSet = sets.map((suffix, index) => `${srcNoExt}${suffix}.jpg ${index+1}x`).join(', ');

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif" srcSet={avifSrcSet} />
          <source type="image/jpg" srcSet={jpgSrcSet} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag} title={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  
  &:not(:first-of-type) {
    margin-left: 8px;
  }
`;

export default PhotoGridItem;
