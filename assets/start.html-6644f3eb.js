import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,d as a,e as t,b as i,f as e}from"./app-cbd13dfa.js";const r="/assets/structure-b7592c7a.png",u={},d={href:"https://spring.io/projects/spring-boot",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"Springboot",-1),g=n("br",null,null,-1),v={href:"https://spring.io/projects/spring-boot#learn",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b={href:"https://www.iocoder.cn/Spring-Boot/good-collection/?side",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.didispace.com/spring-boot-2/",target:"_blank",rel:"noopener noreferrer"},S=n("br",null,null,-1),f=e('<h2 id="spring-boot简介" tabindex="-1"><a class="header-anchor" href="#spring-boot简介" aria-hidden="true">#</a> Spring Boot简介</h2><p>Spring Boot让我们的Spring应用变的更轻量化。比如：你可以仅仅依靠一个Java类来运行一个Spring应用。<br> 你也可以打包你的应用为jar并通过使用java -jar来运行你的Spring Web应用。</p><p>Spring Boot的主要优点：</p><ul><li>为所有Spring开发者更快的入门</li><li>开箱即用，提供各种默认配置来简化项目配置</li><li>内嵌式容器简化Web项目</li><li>没有冗余代码生成和XML配置的要求</li></ul><h2 id="spring家族" tabindex="-1"><a class="header-anchor" href="#spring家族" aria-hidden="true">#</a> Spring家族</h2><p>Spring框架是一个非常强大和流行的Java框架,它包含了许多子项目和模块,组合在一起称为Spring全家桶。</p><blockquote><p>Spring 是一个开源的应用程序框架，用于构建企业级 Java 应用程序。<br> 它提供了一种轻量级的开发方式，使得开发者能够更容易地构建可扩展的应用程序。<br> Spring 的核心原则是<strong>依赖注入</strong>(<code>DI</code>, Dependency Injection)和<strong>面向切面编程</strong>(<code>AOP</code>, Aspect-Oriented Programming)。</p></blockquote><p>Spring 全家桶是指一系列构建在 Spring 框架之上的项目和扩展，它们提供了丰富的功能和解决方案，用于开发不同类型的应用程序。<br> 下面是 Spring 全家桶中一些常用的组件和模块：</p><ul><li><strong>Spring Boot</strong>: 一个用于快速构建独立的、基于 Spring 的应用程序的框架。它简化了 Spring 应用程序的配置和部署，并提供了自动化的依赖管理，使得开发者能够更专注于业务逻辑的开发。</li><li><strong>Spring MVC</strong>: Spring 框架中的一个模块，用于构建 Web 应用程序。它采用了经典的 <code>MVC</code>（Model-View-Controller）模式，将应用程序的逻辑分为模型、视图和控制器，提供了强大的处理请求和生成响应的能力。</li><li><strong>Spring Data</strong>: 一个用于简化数据访问的项目，它提供了统一的数据访问抽象层，使得开发者可以更方便地与各种数据存储（如关系数据库、NoSQL 数据库等）进行交互。</li><li><strong>Spring Security</strong>: pring 框架的安全性解决方案，用于处理认证和授权。它提供了一套强大而灵活的安全性功能，可用于保护 Web 应用程序和服务。</li><li><strong>Spring Cloud</strong>: 用于构建分布式系统和微服务架构的一套工具和框架。它提供了服务发现、负载均衡、配置管理、熔断器等功能，使得开发者能够更方便地构建和管理分布式系统。</li></ul><h2 id="快速入门与配置详解" tabindex="-1"><a class="header-anchor" href="#快速入门与配置详解" aria-hidden="true">#</a> 快速入门与配置详解</h2><h3 id="_1-创建基础项目" tabindex="-1"><a class="header-anchor" href="#_1-创建基础项目" aria-hidden="true">#</a> 1. 创建基础项目</h3><p>Spring官方提供了非常方便的工具Spring Initializr来帮助我们创建Spring Boot应用。</p><p>关于创建项目，本笔记不做详细记录，其他创建SpringBoot项目的教程详见：</p>',13),_={href:"https://www.didispace.com/spring-boot-2/1-2-quick-start.html#%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.iocoder.cn/Spring-Boot/quick-start/?self",target:"_blank",rel:"noopener noreferrer"},y=e('<h3 id="_2-项目结构解析" tabindex="-1"><a class="header-anchor" href="#_2-项目结构解析" aria-hidden="true">#</a> 2. 项目结构解析</h3><figure><img src="'+r+`" alt="初始化项目结构" tabindex="0" loading="lazy"><figcaption>初始化项目结构</figcaption></figure><p>初始化后，项目中包含上图的文件结构（名称可能因版本和配置而存在差异）。</p><p><code>src/main/java</code>: 目录下包含程序入口：<code>DemoApplication</code><br><code>src/main/resources</code>: 目录下包含配置文件：<code>application.properties</code><br><code>src/test</code>: 目录下包含测试入口：<code>DemoApplicationTests</code><br><code>pom.xml</code>: pom(Project Object Model) 是Maven项目的核心配置文件，用于描述项目的依赖关系、构建配置和其他信息。</p><p>除此之外，笔者还添加了一个名为controller的文件夹，此文件夹的作用将在后文详细解释。</p><h3 id="_3-pom-xml-maven配置" tabindex="-1"><a class="header-anchor" href="#_3-pom-xml-maven配置" aria-hidden="true">#</a> 3. <code>pom.xml</code>: Maven配置</h3><p>打开<code>pom.xml</code>，文件内容如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.1.3.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.didispace<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>chapter1-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>chapter1-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Demo project for Spring Boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要包含四个部分：</p><ul><li><code>parent</code>: 继承spring-boot-starter-parent的依赖管理，控制版本与打包等内容</li><li><code>项目元数据</code>: 创建时候输入的Project Metadata部分，也就是Maven项目的基本元素，包括：groupId、artifactId、version、name、description等</li><li><code>properties</code>: 定义Java版本</li><li><code>dependencies</code>: 项目具体依赖，这里包含了spring-boot-starter-web用于实现HTTP接口（该依赖中包含了Spring MVC）；spring-boot-starter-test用于编写单元测试的依赖包。更多功能模块的使用我们将在后面的教程中逐步展开</li><li><code>build</code>: 构建配置部分。默认使用了spring-boot-maven-plugin，配合spring-boot-starter-parent就可以把Spring Boot应用打包成JAR来直接运行</li></ul><h3 id="_4-application-properties-springboot配置" tabindex="-1"><a class="header-anchor" href="#_4-application-properties-springboot配置" aria-hidden="true">#</a> 4. <code>application.properties</code>: SpringBoot配置</h3><ul><li><p>配置基础<br><code>src/main/resources</code>是SpringBoot的配置目录，我们可以在其中添加<code>application.properties</code>来添加配置文件，除此之外，也可以使用YAML文件格式来配置。<br> 以下是两段相同含义的application.properties配置定义和YAML定义：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">environments.dev.url</span><span class="token punctuation">=</span><span class="token value attr-value">http://dev.bar.com</span>
<span class="token key attr-name">environments.dev.name</span><span class="token punctuation">=</span><span class="token value attr-value">Developer Setup</span>
<span class="token key attr-name">environments.prod.url</span><span class="token punctuation">=</span><span class="token value attr-value">http://foo.bar.com</span>
<span class="token key attr-name">environments.prod.name</span><span class="token punctuation">=</span><span class="token value attr-value">My Cool App</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environments</span><span class="token punctuation">:</span>
    <span class="token key atrule">dev</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//dev.bar.com
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Developer Setup
    <span class="token key atrule">prod</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//foo.bar.com
        <span class="token key atrule">name</span><span class="token punctuation">:</span> My Cool App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义参数</p><p>我们除了可以在Spring Boot的配置文件中设置各个Starter模块中预定义的配置属性，也可以在配置文件中定义一些我们需要的自定义属性。比如在<code>application.properties</code>中添加：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">book.name</span><span class="token punctuation">=</span><span class="token value attr-value">SpringCloudInAction</span>
<span class="token key attr-name">book.author</span><span class="token punctuation">=</span><span class="token value attr-value">ZhaiYongchao</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在应用中通过<code>@value</code>注解来加载这些自定义的参数，比如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${book.name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${book.author}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span>
    <span class="token comment">// 省略getter和setter</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>@Value注解加载属性值的时候可以支持两种表达式来进行配置：<br> 1. PlaceHolder方式(如上所示)，格式为 \${...} ，大括号内为PlaceHolder<br> 2. SpEL表达式(Spring Expression Language)， 格式为 #{...} ，大括号内为SpEL表达式</p></blockquote></li><li><p>参数引用</p><p>在application.properties中的各个参数之间，我们也可以直接通过使用PlaceHolder的方式来进行引用，就像下面的设置：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">book.name</span><span class="token punctuation">=</span><span class="token value attr-value">SpringBoot</span>
<span class="token key attr-name">book.author</span><span class="token punctuation">=</span><span class="token value attr-value">Xmerge</span>
<span class="token key attr-name">book.desc</span><span class="token punctuation">=</span><span class="token value attr-value">\${book.author}  is writing\${book.name}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终<code>book.desc</code>值为<code>Xmerge is writing SpringBoot</code></p></li><li><p>使用随机数</p><p>在一些特殊情况下，有些参数我们希望它每次加载的时候不是一个固定的值，比如：密钥、服务端口等。<br> 我们可以通过使用\${random}配置来产生随机的int值、long值或者string字符串：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># 随机字符串</span>
<span class="token key attr-name">com.didispace.blog.value</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.value}</span>
<span class="token comment"># 随机int</span>
<span class="token key attr-name">com.didispace.blog.number</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int}</span>
<span class="token comment"># 随机long</span>
<span class="token key attr-name">com.didispace.blog.bignumber</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.long}</span>
<span class="token comment"># 10以内的随机数</span>
<span class="token key attr-name">com.didispace.blog.test1</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int(10)}</span>
<span class="token comment"># 10-20的随机数</span>
<span class="token key attr-name">com.didispace.blog.test2</span><span class="token punctuation">=</span><span class="token value attr-value">\${random.int[10,20]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该配置方式可以用于设置应用端口等场景，避免在本地调试时出现端口冲突的麻烦。</p></li><li><p>命令行参数</p><p>使用命令<code>java -jar</code>命令来启动SpringBoot应用，除此之外，还可以用类似于<code>java -jar xxx.jar --server.port=8888</code>的命令来指定端口号。<br> 这等价于在<code>application.properties</code>文件中添加属性<code>server.port=8888</code></p></li><li><p>多环境配置</p><p>我们在开发任何应用的时候，通常同一套程序会被应用和安装到几个不同的环境，比如：开发、测试、生产等。其中每个环境的数据库地址、服务器端口等等配置都会不同，如果在为不同环境打包时都要频繁修改配置文件的话，那必将是个非常繁琐且容易发生错误的事。<br> 对于多环境的配置，各种项目构建工具或是框架的基本思路是一致的，通过配置多份不同环境的配置文件，再通过打包命令指定需要打包的内容之后进行区分打包，Spring Boot也不例外，或者说更加简单。</p><p>在Spring Boot中多环境配置文件名需要满足<code>application-{profile}.properties</code>的格式，其中<code>{profile}</code>对应你的环境标识，比如：</p><ul><li><code>application-dev.properties</code>：开发环境</li><li><code>application-test.properties</code>：测试环境</li><li><code>application-prod.properties</code>：生产环境</li></ul><p>至于哪个具体的配置文件会被加载，需要在<code>application.properties</code>文件中通过<code>spring.profiles.active</code>属性来设置，其值对应配置文件中的{profile}值。<br> 比如，<code>spring.profiles.active=test</code>就会加载<code>application-test.properties</code>配置文件内容。</p></li></ul>`,12);function w(I,B){const s=o("ExternalLinkIcon");return c(),l("div",null,[n("p",null,[a("这是一篇关于"),n("a",d,[k,t(s)]),a("的学习笔记。"),g,a(" 本笔记不是完整的Springboot学习教程，如需系统性学习，请移步"),n("a",v,[a("官网文档"),t(s)]),a("或其它教程。"),m,a(" 本笔记主要参照"),n("a",b,[a("芋道源码"),t(s)]),a("和"),n("a",h,[a("程序猿DD-Springboot2教程"),t(s)]),a("。"),S,a(" 虽然现在Springboot版本已经更新到3，但鉴于Springboot2的学习资料更丰富，本笔记只按照Springboot2特性进行学习。")]),i(" more "),f,n("ul",null,[n("li",null,[n("a",_,[a("创建项目步骤(程序员DD)"),t(s)])]),n("li",null,[n("a",x,[a("创建项目步骤(芋道源码)"),t(s)])])]),y])}const M=p(u,[["render",w],["__file","start.html.vue"]]);export{M as default};
