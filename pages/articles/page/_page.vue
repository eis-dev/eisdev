<template>
  <div>
    <h1 class="font-weight-normal" v-text="'articles'"/>
    <h4 class="font-weight-normal" v-if="currentPage > 1" v-text="'page ' + currentPage">page 1</h4>
    <ul class="list-group list-group-flush mt-3">
      <li class="list-group-item" v-for="item of paginatedArticles">
        <nuxt-link :to="'/articles/' + item.slug + ext" class="read-more font-weight-light d-block mt-2">
          <strong class="d-block" v-text="item.title"></strong>
          <span>read article</span>
        </nuxt-link>
        <!--<p class="my-1" v-text="item.snippet"/>-->
      </li>
    </ul>
    <Pagination :total="lastPage" type="articles"/>
  </div>
</template>

<script>
  export default {
    computed: {
      ext() {
        return process.browser ? "" : ".html"
      }
    },
    async asyncData({$content, params, error}) {
      // per page
      const perPage = 10;

      const article = await $content('articles').fetch();
      const currentPage = parseInt(params.page);
      const totalArticles = article.length;
      const lastPage = Math.ceil(totalArticles / perPage);
      const lastPageCount = totalArticles % perPage;

      const skipNumber = () => {
        if (currentPage === 1) return 0;
        if (currentPage === lastPage) return totalArticles - lastPageCount;
        return (currentPage - 1) * perPage;
      };

      const paginatedArticles = await $content("articles")
        .only(['slug', 'body']).limit(perPage).skip(skipNumber()).sortBy('createdAt', 'desc').fetch();

      if (currentPage === 0 || !paginatedArticles.length) return error({
        statusCode: 404,
        message: "No articles found!"
      });

      for (let key in paginatedArticles) {
        let title = paginatedArticles[key].body.children[0].children[1].value;
        let snippet = paginatedArticles[key].body.children.filter(x => x.tag === "p")[0].children[0].value;
        paginatedArticles[key]["title"] = title;
        paginatedArticles[key]["snippet"] = snippet;
        paginatedArticles[key]["seo"] = title.replace(/ /g, '-');
      }

      return {article, paginatedArticles, lastPage, currentPage}
    }
  }
</script>
