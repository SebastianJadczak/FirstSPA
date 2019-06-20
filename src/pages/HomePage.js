import React from 'react';
import Article from '../components/Article'
const articles = [
    {
        id: 1,
        title: "Czym jest teoria struny",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Suscipit corporis consequuntur tenetur magnam quas, debitis nostrum repellendus impedit animi quos.Inventore tempore obcaecati distinctio ratione animi sunt fugit, neque eum itaque optio asperiores vel dicta.Iusto, ipsam esse provident, doloremque reiciendis aliquam fugiat corporis similique culpa molestiae quod quaerat laborum."
    },
    {
        id: 2,
        title: "Czym jest teoria haosu",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Suscipit corporis consequuntur tenetur magnam quas, debitis nostrum repellendus impedit animi quos.Inventore tempore obcaecati distinctio ratione animi sunt fugit, neque eum itaque optio asperiores vel dicta.Iusto, ipsam esse provident, doloremque reiciendis aliquam fugiat corporis similique culpa molestiae quod quaerat laborum."
    },
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}

export default HomePage;