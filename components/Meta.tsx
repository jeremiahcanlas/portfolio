import Head from 'next/head';

const Meta = ({ title, keywords, description }: any) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="noindex" />
    <link rel="shortcut icon" href="/assets/icon.ico" type="image/x-icon" />

    <title>{title}</title>
  </Head>
);

Meta.defaultProps = {
  title: 'Jeremiah Canlas',
  keywords:
    'jeremiah canlas, portfolio, jeremiah, canlas, frontend developer, developer, code',
  description:
    'Hello!, My name is Jeremiah Canlas and I am a front end developer.',
};

export default Meta;
