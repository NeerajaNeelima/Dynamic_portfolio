import React from 'react'

const Blog = ({userData}) => {
   
  const {projects} = userData.user;

  return (
    <article className='Blog active' data-page="blog">

        <header>
          <h2 className="h2 article-title">Blog</h2>
        </header>

        <section className="blog-posts">

          <ul className="blog-posts-list">
              
            {projects.map((project,index)=>
              <li class="blog-post-item" key={index}>
              <a href="#">

                <figure className="blog-banner-box">
                  <img src={project.image.url} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div className="blog-content">

                  <div className="blog-meta">
                    <p className="blog-category">Design</p>

                    <span className="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 className="h3 blog-item-title">Design conferences in 2022</h3>

                  <p className="blog-text">
                    Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                  </p>

                </div>

              </a>
            </li>
            )}

          </ul>

            </section>
           
      </article>
  )
}

export default Blog