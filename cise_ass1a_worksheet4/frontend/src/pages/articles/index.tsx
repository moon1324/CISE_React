import { GetStaticProps, NextPage } from "next";
import SortableTable from "../../components/table/SortableTable";
import data from "../../utils/dummydata.json";

interface ArticlesInterface {
    id: string;
    title: string;
    authors: string;
    source: string;
    pubYear: string;
    doi: string;
    summary: string;
}

type ArticlesProps = {
    articles: ArticlesInterface[];
};

const Articles: NextPage<ArticlesProps> = ({ articles }) => {
    const headers: { key: keyof ArticlesInterface; label: string }[] = [
        { key: "title", label: "Title" },
        { key: "authors", label: "Authors" },
        { key: "source", label: "Source" },
        { key: "pubYear", label: "Publication Year" },
        { key: "doi", label: "DOI" },
        { key: "summary", label: "Summary" },

    ];

    return (
        <div className="container">
            <h1>Articles Index Page</h1>
            <p>Page containing a table of articles:</p>
            <SortableTable headers={headers} data={articles} />
        </div>
    );
};

export const getStaticProps: GetStaticProps<ArticlesProps> = async (_) => {
    // Map the data to ensure all articles have consistent property names
    const articles = data.articles.map((article) => ({
        id: article.id ?? article._id,
        title: article.title,
        authors: article.authors,
        source: article.source,
        pubYear: article.pubYear,
        doi: article.doi,
        summary: article.summary,

    }));


    return {
        props: {
            articles,
        },
    };
};

export default Articles;
