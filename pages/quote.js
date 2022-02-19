import JotformEmbed from 'react-jotform-embed';
import { GraphQLClient } from 'graphql-request';

const Quote = ({ others }) => {
  const res = others[0]?.content;
  // return <JotformEmbed src="https://form.jotform.com/220112186043441" />;
  return <JotformEmbed src={res} />;
};

export default Quote;

export async function getStaticProps() {
  const graphcms = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/ckucyn6v66g7m01yz259g4qm9/master'
  );

  const { others } = await graphcms.request(
    `
      { 
        others(where: { slug: "jotform" }){ 
          title
          content
        }
      }
    `
  );
  return {
    props: {
      others,
    },
  };
}
