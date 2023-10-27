import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";

const site = lume({
  location: new URL("https://cevdet.pages.dev"),
});

// TODO: Will be deleted when lume 2.0 is released
import vento from "lume/plugins/vento.ts";
site.use(vento());

site.use(minifyHTML());
site.use(lightningCss());
site.use(sitemap());
site.use(feed({
  output: ["/blog.rss", "/blog.json"],
  query: "type=blog",
  info: {
    title: "Cevdet's Blog",
    description: "Where I put my thoughts",
  },
}));

export default site;
