declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

declare module '*.svg' {
  type SVGProps = {
    alt: string;
  };

  const svg: React.FC<SVGProps>;
  export default svg;
}
