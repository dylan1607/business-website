// /* eslint-disable react/no-children-prop */
// // Import Static
import logo from "../../statics/logo.svg";

// // Import function
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-ap-northeast-1.graphcms.com/v2/ckucyn6v66g7m01yz259g4qm9/master"
);

export default function Article({ blogPost }) {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center">
        <div className="flex flex-col px-4 py-10 max-w-4xl space-y-5">
          <h2 className="font-semibold text-2xl break-words">
            {blogPost?.title}
          </h2>

          <div className="">
            <div className="flex justify-between items-center">
              <span className="flex items-center space-x-2">
                <Image className="text-black" src={logo} alt="" width={25} />
                <p>By Team TinCNC</p>
              </span>
              <p>3 phút đọc</p>
            </div>
            <Image
              className="rounded-xl"
              src={blogPost?.coverImage.url}
              alt=""
              width={150}
              height={100}
              layout="responsive"
            />
          </div>

          <div className="flex flex-col space-y-10">
            <ReactMarkdown children={blogPost?.content} />
            <ReactMarkdown children={blogPost?.footer} />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { blogPost } = await graphcms.request(
    `
      blogPosts(where: {id: "ckv86x0pcfp5r0b3600rmp41i"}) {
        coverImage {
          id
          url
        }
      }
      `,
    {
      id: params.articleId,
    }
  );
  return {
    props: {
      blogPost,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get blogPosts
  const { blogPosts } = await graphcms.request(`
  { 
    blogPosts {
      id
    }
  }
  `);
  // Get path every re-render base on blogPosts
  const paths = blogPosts.map((item) => ({
    params: { articleId: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}
