import{_ as s,c as n,o as a,a as l}from"./app.b9ee122a.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165(\u8DE8\u7EA7\u901A\u4FE1)\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94","slug":"\u4F9D\u8D56\u6CE8\u5165-\u8DE8\u7EA7\u901A\u4FE1-\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94","link":"#\u4F9D\u8D56\u6CE8\u5165-\u8DE8\u7EA7\u901A\u4FE1-\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94","children":[]},{"level":2,"title":"\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F","slug":"\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F","link":"#\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F","children":[]}],"relativePath":"StudyRecord/StudyVue/index.md"}'),p={name:"StudyRecord/StudyVue/index.md"},o=l(`<h2 id="\u4F9D\u8D56\u6CE8\u5165-\u8DE8\u7EA7\u901A\u4FE1-\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165(\u8DE8\u7EA7\u901A\u4FE1)\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94 <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165-\u8DE8\u7EA7\u901A\u4FE1-\u9ED8\u8BA4\u6570\u636E\u4E0D\u54CD\u5E94" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// provide:\u63D0\u4F9B inject:\u6CE8\u5165 \u9ED8\u8BA4\u6570\u636E\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//\u7956\u5148\u7EA7\u7EC4\u4EF6\u901A\u8FC7provide\u63D0\u4F9B\u6570\u636E \u5B50\u5B59\u7EC4\u4EF6\u901A\u8FC7inject\u83B7\u53D6\u6570\u636E</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7956\u5148\u7EA7\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QQ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">provide</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//   \u5B50\u5B59\u7EA7\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">inject</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">create</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F" tabindex="-1">\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F <a class="header-anchor" href="#\u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u4F9D\u8D56\u6CE8\u5165\u4F7F\u6570\u636E\u6210\u4E3A\u54CD\u5E94\u5F0F\u7684\uFF01\uFF01\uFF01</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">obj.name</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;editAge&quot; &gt;</span><span style="color:#A6ACCD;">+1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//\u7956\u5148\u7EA7\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    return{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">obj</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QQ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">num</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">21</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    methods:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">editAge</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">provide</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      return{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u4E00\u79CD\u65B9\u6CD5\u662F\u7528\u5BF9\u8C61\u5305\u88F9\u8981\u4F20\u7684\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">obj</span><span style="color:#89DDFF;">:this.</span><span style="color:#A6ACCD;">obj</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">//\u4E00\u79CD\u65B9\u6CD5\u4F20\u9012\u4E00\u4E2A\u53C2\u6570\u7528\u65B9\u6CD5\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">        age:</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5B50\u5B59\u7EA7\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;">obj.name</span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">()}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    inject:[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">obj</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function c(t,r,D,F,y,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
