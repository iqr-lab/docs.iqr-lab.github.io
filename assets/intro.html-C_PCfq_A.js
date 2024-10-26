import{_ as a,c as n,a as i,o as s}from"./app-BuYQg0bi.js";const l={};function t(d,e){return s(),n("div",null,e[0]||(e[0]=[i(`<h1 id="adding-a-new-lab-member" tabindex="-1"><a class="header-anchor" href="#adding-a-new-lab-member"><span>Adding a new lab member</span></a></h1><p>Lab member webpages are stored in <code>_members/</code>. Check out existing profiles for examples. All <code>[text]</code> below is placeholder text.</p><ul><li><p>Upload your photo to <code>images/team/[first]-[last].[jpg/png]</code></p></li><li><p>Create a new file titled <code>_members/[first]-[last].md</code> that contains the following:</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">---</span>
<span class="line">name: [Full Name]</span>
<span class="line">image: images/team/[first]-[last].[jpg/png]</span>
<span class="line">role: [phd/masters/undergrad/postdoc]</span>
<span class="line">description: [Undergraduate/Graduate] Student in [Field]</span>
<span class="line">links:</span>
<span class="line">  home-page: [your website url, optional]</span>
<span class="line">  email: [your email, optional]</span>
<span class="line">  github: [your github handle, optional]</span>
<span class="line">  orcid: [your ORCiD, optional]</span>
<span class="line">  google-scholar: [your Google Scholar id, optional]</span>
<span class="line">  linkedin: [your LinkedIn id, optional]</span>
<span class="line">  twitter: [your Twitter username, optional]</span>
<span class="line">---</span>
<span class="line"></span>
<span class="line">[Your 1-2 paragraph bio goes here.]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Delete any optional lines that you did not fill out.</p></li><li><p>Commit and push your changes, and check the website in 5 minutes to verify that your page has been added properly.</p></li></ul><h1 id="adding-a-new-publication" tabindex="-1"><a class="header-anchor" href="#adding-a-new-publication"><span>Adding a new publication</span></a></h1><p>Publications are stored in <code>_data/sources.yaml</code>.</p><h2 id="naming-conventions" tabindex="-1"><a class="header-anchor" href="#naming-conventions"><span>Naming conventions</span></a></h2><ul><li>Upload any publication-related documents and images to <code>pubs/</code>.</li><li>For papers with 1-3 authors, use the following notation: <code>pubs/[lastname1]-[lastname2]-[lastname3]-[venue][year]-[keyword]-[type].[ext]</code>.</li><li>For papers with &gt;3 authors, use the following notation: <code>pubs/[lastname1]-[venue][year]-[keyword]-[type].[ext]</code>.</li><li>Example 1: <code>pubs/karli-fitzgerald-langrob23-ambiguities-paper.pdf</code></li><li>Example 2: <code>pubs/karli-fitzgerald-langrob23-ambiguities-poster.pdf</code></li><li>Example 3: <code>pubs/fitzgerald-corl22-inquire-thumbnail.png</code></li></ul><h2 id="automatically-adding-citations-with-identifiers" tabindex="-1"><a class="header-anchor" href="#automatically-adding-citations-with-identifiers"><span>Automatically adding citations with identifiers</span></a></h2><p>If your publication has a doi, ISBN, or is on arXiv, you do not need to upload the paper PDF.</p><ul><li>Add an entry to <code>_data/sources.yaml</code> like this:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Your paper title</span>
<span class="line">- id: doi:10.1016/j.artint.2021.103551</span>
<span class="line">  tags:</span>
<span class="line">    - Journal</span>
<span class="line">    - task representations</span>
<span class="line">    - abstraction</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>After you commit your changes, a GitHub action will process the doi/ISBN/arXiv info and create the citation automatically.</li><li>Monitor this process by going to the <a href="https://github.com/iqr-lab/iqr-lab.github.io/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a> page and verify that there are no errors. If there is an error, you may need to add the citation manually instead.</li><li>You can override any field of the citation by adding it to your entry. See the <a href="https://greene-lab.gitbook.io/lab-website-template-docs/basics/citations" target="_blank" rel="noopener noreferrer">docs</a> for more information.</li></ul><h2 id="manually-adding-citations" tabindex="-1"><a class="header-anchor" href="#manually-adding-citations"><span>Manually adding citations</span></a></h2><p>If your publication does not have an identifier (such as a workshop paper), you will need to upload the paper pdf and link to it manually.</p><ul><li>Add an entry to <code>_data/sources.yaml</code> like this:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">- link: https://iqr.cs.yale.edu/pubs/karli-fitzgerald-langrob23-ambiguities.pdf</span>
<span class="line">  title: Resolving Ambiguities in LLM-enabled Human-Robot Collaboration</span>
<span class="line">  authors:</span>
<span class="line">    - Ulas Berk Karli</span>
<span class="line">    - Tesca Fitzgerald</span>
<span class="line">  publisher: CoRL Workshop on Language and Robot Learning</span>
<span class="line">  date: &quot;2023-11-06&quot;</span>
<span class="line">  tags:</span>
<span class="line">    - Workshop</span>
<span class="line">    - LLMs</span>
<span class="line">    - ambiguity</span>
<span class="line">    - self-assessment</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="adding-tags-and-buttons" tabindex="-1"><a class="header-anchor" href="#adding-tags-and-buttons"><span>Adding tags and buttons</span></a></h2><h3 id="tags" tabindex="-1"><a class="header-anchor" href="#tags"><span>Tags</span></a></h3><ul><li>Your first tag should indicate the publication type: <code>[Conference/Workshop/Journal/Thesis/Book]</code>.</li><li>Next, check see if there are any pre-existing tags that are also relevant to your paper.</li><li>Finally, add any new tags you&#39;d like to highlight for your paper.</li></ul><h3 id="poster-video-code-and-blog-buttons" tabindex="-1"><a class="header-anchor" href="#poster-video-code-and-blog-buttons"><span>Poster, video, code, and blog buttons</span></a></h3><p>Add any relevant buttons like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  buttons:</span>
<span class="line">    - type: poster</span>
<span class="line">      link: https://iqr.cs.yale.edu/pubs/fitzgerald-corl22-inquire-poster.pdf</span>
<span class="line">    - type: video</span>
<span class="line">      link: https://www.youtube.com/watch?v=X3uewsq6-Gc</span>
<span class="line">    - type: source</span>
<span class="line">      link: https://github.com/HARPLab/inquire</span>
<span class="line">    - type: blog</span>
<span class="line">      link: https://iqr.cs.yale.edu/2024/03/13/learning-from-corrections.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linking-to-a-project" tabindex="-1"><a class="header-anchor" href="#linking-to-a-project"><span>Linking to a project</span></a></h3><p>If you&#39;d like to link your publication to a particular project page, add a new field like this:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  project: llms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The project name must match the <code>project-tag</code> field in your project page.</p><h1 id="adding-a-new-project" tabindex="-1"><a class="header-anchor" href="#adding-a-new-project"><span>Adding a new project</span></a></h1><h1 id="adding-a-new-blog-post" tabindex="-1"><a class="header-anchor" href="#adding-a-new-blog-post"><span>Adding a new blog post</span></a></h1>`,30)]))}const r=a(l,[["render",t],["__file","intro.html.vue"]]),c=JSON.parse('{"path":"/website/intro.html","title":"Adding a new lab member","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Naming conventions","slug":"naming-conventions","link":"#naming-conventions","children":[]},{"level":2,"title":"Automatically adding citations with identifiers","slug":"automatically-adding-citations-with-identifiers","link":"#automatically-adding-citations-with-identifiers","children":[]},{"level":2,"title":"Manually adding citations","slug":"manually-adding-citations","link":"#manually-adding-citations","children":[]},{"level":2,"title":"Adding tags and buttons","slug":"adding-tags-and-buttons","link":"#adding-tags-and-buttons","children":[{"level":3,"title":"Tags","slug":"tags","link":"#tags","children":[]},{"level":3,"title":"Poster, video, code, and blog buttons","slug":"poster-video-code-and-blog-buttons","link":"#poster-video-code-and-blog-buttons","children":[]},{"level":3,"title":"Linking to a project","slug":"linking-to-a-project","link":"#linking-to-a-project","children":[]}]}],"git":{"updatedTime":1729912221000,"contributors":[{"name":"Neil Song","email":"song.neil.song@gmail.com","commits":1}]},"filePathRelative":"website/intro.md"}');export{r as comp,c as data};
