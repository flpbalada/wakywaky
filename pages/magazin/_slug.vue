<template>
  <section>
    <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    ></component>
  </section>
</template>
<script>
export default {
  /**
   * Define slug for articlePage pagetype
   *
   */
  mounted() {
    // define jsonLd and meta for articlePage.

    var jsonLd = {};
    var meta = [];

    if (this.story.content.componen == "articlePage") {
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: this.story.content.meta.title,
        image: [this.story.content.hero.avatar],
        datePublished: this.story.published_at,
        dateModified: this.story.content.date_modified,
        author: {
          "@type": "Person",
          name: this.story.content.author
        },
        publisher: {
          "@type": "Organization",
          name: "wakyWaky.cz",
          logo: {
            "@type": "wakyWaky.cz",
            url: "https://wakywaky.cz/logo.png"
          }
        },
        description: this.story.content.meta.description
      };

      meta = [
        {
          hid: "description",
          name: "description",
          content: this.story.content.meta.description
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.story.content.meta.title,
          vmid: "og:title"
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.story.content.meta.description,
          vmid: "og:description"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            this.story.content.hero.avatar == ""
              ? "https://wakywaky.cz/logo.png"
              : this.story.content.hero.avatar,
          vmid: "og:image"
        }
      ];
    }

    this.jsonLd = jsonLd;
    this.meta = meta;
  },
  data() {
    return { story: { content: {} }, jsonLd: {}, meta: [] };
  },
  asyncData(context) {
    // Check if we are in the editor mode
    let version =
      context.query._storyblok || context.isDev ? "draft" : "published";
    // Load the JSON from the API
    return context.app.$storyapi
      .get(`cdn/stories${context.route.fullPath}`, {
        version: version
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      });
  },
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.jsonLd),
          type: "application/ld+json"
        }
      ],
      meta: this.meta,
      link: [
        {
          rel: "canonical",
          href: "https://wakywaky.cz" + this.$route.fullPath
        }
      ]
    };
  }
};
</script>
