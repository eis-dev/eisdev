<template>
    <div>
        <h1 class="font-weight-normal" v-text="'works'"/>
        <h4 class="font-weight-normal" v-if="currentPage > 1" v-text="'page ' + currentPage"/>
        <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item" v-for="item of paginatedWorks">
                <nuxt-link :to="'/works/' + item.slug" class="read-more font-weight-light d-block mt-2">
                    <strong class="d-block" v-text="item.title"></strong>
                    <span v-text="'inspect work'"/>
                </nuxt-link>
            </li>
        </ul>
        <Pagination :total="lastPage" type="works"/>
    </div>
</template>

<script>
    export default {
        async asyncData({$content, params, error}) {
            // per page
            const perPage = 10;

            const work = await $content('works').fetch();
            const currentPage = parseInt(params.page);
            const totalWorks = work.length;
            const lastPage = Math.ceil(totalWorks / perPage);
            const lastPageCount = totalWorks % perPage;

            const skipNumber = () => {
                if (currentPage === 1) return 0;
                if (currentPage === lastPage) return totalWorks - lastPageCount;
                return (currentPage - 1) * perPage;
            };

            const paginatedWorks = await $content("works")
                .only(['slug', 'body']).limit(perPage).skip(skipNumber()).sortBy('createdAt', 'desc').fetch();

            if (currentPage === 0 || !paginatedWorks.length) return error({
                statusCode: 404,
                message: "No work found!"
            });

            for (let key in paginatedWorks) {
                let title = paginatedWorks[key].body.children[0].children[1].value;
                let snippet = paginatedWorks[key].body.children.filter(x => x.tag === "p")[0].children[0].value;
                paginatedWorks[key]["title"] = title;
                paginatedWorks[key]["snippet"] = snippet;
                paginatedWorks[key]["seo"] = title.replace(/ /g, '-');
            }

            return {work, paginatedWorks, lastPage, currentPage}
        }
    }
</script>
