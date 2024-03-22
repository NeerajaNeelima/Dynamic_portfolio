import React from 'react'

const Blog = ({userData}) => {
   
  const {projects} = userData.user;

  return (
    <article className='Blog active' data-page="blog">

        <header>
          <h2 class="h2 article-title">Blog</h2>
        </header>

        <section class="blog-posts">

          <ul class="blog-posts-list">
              
            {projects.map((project,index)=>
              <li class="blog-post-item" key={index}>
              <a href="#">

                <figure class="blog-banner-box">
                  <img src={project.image.url} alt="Design conferences in 2022" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

                  <p class="blog-text">
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