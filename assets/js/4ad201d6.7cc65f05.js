/*! For license information please see 4ad201d6.7cc65f05.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[733674],{983032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(824246),a=n(511151);const o={id:"integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin"},s=void 0,i={id:"plugins/integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin",source:"@site/../docs/plugins/integrating-search-into-plugins.md",sourceDirName:"plugins",slug:"/plugins/integrating-search-into-plugins",permalink:"/docs/plugins/integrating-search-into-plugins",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/plugins/integrating-search-into-plugins.md",tags:[],version:"current",frontMatter:{id:"integrating-search-into-plugins",title:"Integrating Search into a plugin",description:"How to integrate Search into a Backstage plugin"},sidebar:"docs",previous:{title:"Integrate into the Software Catalog",permalink:"/docs/plugins/integrating-plugin-into-software-catalog"},next:{title:"Composability System",permalink:"/docs/plugins/composability"}},c={},l=[{value:"Providing data to the search platform",id:"providing-data-to-the-search-platform",level:2},{value:"Create a collator",id:"create-a-collator",level:3},{value:"1. Install collator interface dependencies",id:"1-install-collator-interface-dependencies",level:4},{value:"2. Define your document type",id:"2-define-your-document-type",level:4},{value:"3. Use Backstage App configuration",id:"3-use-backstage-app-configuration",level:4},{value:"4. Implement your collator",id:"4-implement-your-collator",level:4},{value:"5. Test your collator",id:"5-test-your-collator",level:4},{value:"6. Make your plugins collator discoverable for others",id:"6-make-your-plugins-collator-discoverable-for-others",level:4},{value:"Building a search experience into your plugin",id:"building-a-search-experience-into-your-plugin",level:2},{value:"Search Experience Concepts",id:"search-experience-concepts",level:3},{value:"Search Experience Tutorials",id:"search-experience-tutorials",level:3},{value:"Improved &quot;404&quot; page experience",id:"improved-404-page-experience",level:4},{value:"Simple search page",id:"simple-search-page",level:4},{value:"Custom search control surfaces",id:"custom-search-control-surfaces",level:4},{value:"Custom search results",id:"custom-search-results",level:4}];function u(e){const t=Object.assign({p:"p",h2:"h2",h3:"h3",blockquote:"blockquote",a:"a",code:"code",h4:"h4",pre:"pre",ul:"ul",li:"li",em:"em",strong:"strong"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Backstage Search Platform was designed to give plugin developers the APIs\nand interfaces needed to offer search experiences within their plugins, while\nabstracting away (and instead empowering application integrators to choose) the\nspecific underlying search technologies."}),"\n",(0,r.jsx)(t.p,{children:"On this page, you'll find concepts and tutorials for leveraging the Backstage\nSearch Platform in your plugin."}),"\n",(0,r.jsx)(t.h2,{id:"providing-data-to-the-search-platform",children:"Providing data to the search platform"}),"\n",(0,r.jsx)(t.h3,{id:"create-a-collator",children:"Create a collator"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Knowing what a ",(0,r.jsx)(t.a,{href:"/docs/features/search/concepts#collators",children:"collator"})," is will help you as you build it out."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Imagine you have a plugin that is responsible for storing FAQ snippets in a database. You want other engineers to be able to easily find your questions and answers. So that means you want them to be indexed by the search platform. Lets say the FAQ snippets can be viewed at a URL like ",(0,r.jsx)(t.code,{children:"backstage.example.biz/faq-snippets"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The search platform provides an interface (",(0,r.jsx)(t.code,{children:"DocumentCollatorFactory"})," from package ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-common"}),') that allows you to do exactly that. It works by registering each of your entries as a "document" that later represents one search result each.']}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["You can always look at a working example, e.g. ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-backend-module-stack-overflow-collator/src/collators/StackOverflowQuestionsCollatorFactory.ts",children:"StackOverflowQuestionsCollatorFactory"}),", if you are unsure or want to follow best practices."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"1-install-collator-interface-dependencies",children:"1. Install collator interface dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["We will need the interface ",(0,r.jsx)(t.code,{children:"DocumentCollatorFactory"})," from package ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-common"}),", so let's add it to your plugins dependencies:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"# navigate to the plugin directory\n# (for this tutorial our plugin lives in the backstage repo, if your plugin lives in a separate repo you need to clone that first)\ncd plugins/faq-snippets\n\n# Create a new branch using Git command-line\ngit checkout -b tutorials/new-faq-snippets-collator\n\n# Install the package containing the interface\nyarn add @backstage/plugin-search-common\n"})}),"\n",(0,r.jsx)(t.h4,{id:"2-define-your-document-type",children:"2. Define your document type"}),"\n",(0,r.jsxs)(t.p,{children:["Before we can start generating documents from our FAQ entries, we first have to define a document type containing all necessary information we need to later display our entry as search result. The package ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-common"})," we installed earlier contains a type ",(0,r.jsx)(t.code,{children:"IndexableDocument"})," that we can extend."]}),"\n",(0,r.jsxs)(t.p,{children:["Create a new file ",(0,r.jsx)(t.code,{children:"plugins/faq-snippets/src/search/collators/FaqSnippetDocument.ts"})," and paste the following below:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { IndexableDocument } from '@backstage/plugin-search-common';\n\nexport interface FaqSnippetDocument extends IndexableDocument {\n  answered_by: string;\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"3-use-backstage-app-configuration",children:"3. Use Backstage App configuration"}),"\n",(0,r.jsxs)(t.p,{children:["Your new collator could benefit from using configuration directly from the Backstage ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," file which is located on the project's root folder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"faq:\n  baseUrl: https://backstage.example.biz/faq-snippets\n"})}),"\n",(0,r.jsx)(t.h4,{id:"4-implement-your-collator",children:"4. Implement your collator"}),"\n",(0,r.jsxs)(t.p,{children:["Imagine your FAQs can be retrieved at the URL ",(0,r.jsx)(t.code,{children:"https://backstage.example.biz/faq-snippets"})," with following JSON response format:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "items": [\n    {\n      "id": 42,\n      "question": "What is The Answer to the Ultimate Question of Life, the Universe, and Everything?",\n      "answer": "Forty-two",\n      "user": "Deep Thought"\n    }\n  ]\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Below we provide an example implementation of how the FAQ collator factory could look like using our new document type, placed in the ",(0,r.jsx)(t.code,{children:"plugins/faq-snippets/src/search/collators/FaqCollatorFactory.ts"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import fetch from 'cross-fetch';\nimport { Logger } from 'winston';\nimport { Config } from '@backstage/config';\nimport { Readable } from 'stream';\nimport { DocumentCollatorFactory } from '@backstage/plugin-search-common';\n\nimport { FaqDocument } from './FaqDocument';\n\nexport type FaqCollatorFactoryOptions = {\n  baseUrl?: string;\n  logger: Logger;\n};\n\nexport class FaqCollatorFactory implements DocumentCollatorFactory {\n  private readonly baseUrl: string | undefined;\n  private readonly logger: Logger;\n  public readonly type: string = 'faq-snippets';\n\n  private constructor(options: FaqCollatorFactoryOptions) {\n    this.baseUrl = options.baseUrl;\n    this.logger = options.logger;\n  }\n\n  static fromConfig(config: Config, options: FaqCollatorFactoryOptions) {\n    const baseUrl =\n      config.getOptionalString('faq.baseUrl') ||\n      'https://backstage.example.biz/faq-snippets';\n    return new FaqCollatorFactory({ ...options, baseUrl });\n  }\n\n  async getCollator() {\n    return Readable.from(this.execute());\n  }\n\n  async *execute(): AsyncGenerator<FaqDocument> {\n    if (!this.baseUrl) {\n      this.logger.error(`No faq.baseUrl configured in your app-config.yaml`);\n      return;\n    }\n\n    const response = await fetch(this.baseUrl);\n    const data = await response.json();\n\n    for (const faq of data.items) {\n      yield {\n        title: faq.question,\n        location: `/faq-snippets/${faq.id}`,\n        text: faq.answer,\n        answered_by: faq.user,\n      };\n    }\n  }\n}\n"})}),"\n",(0,r.jsx)(t.h4,{id:"5-test-your-collator",children:"5. Test your collator"}),"\n",(0,r.jsxs)(t.p,{children:["To verify your implementation works as expected make sure to add tests for it. For your convenience, there is the ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-search-backend-node.testpipeline",children:(0,r.jsx)(t.code,{children:"TestPipeline"})})," utility that emulates a pipeline into which you can integrate your custom collator."]}),"\n",(0,r.jsxs)(t.p,{children:["Look at ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/de294ce5c410c9eb56da6870a1fab795268f60e3/plugins/techdocs-backend/src/search/DefaultTechDocsCollatorFactory.test.ts",children:"DefaultTechDocsCollatorFactory test"}),", for an example."]}),"\n",(0,r.jsx)(t.h4,{id:"6-make-your-plugins-collator-discoverable-for-others",children:"6. Make your plugins collator discoverable for others"}),"\n",(0,r.jsxs)(t.p,{children:["If you want to make your collator discoverable for other adopters, add it to the list of ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/search/#plugins-integrated-with-backstage-search",children:"plugins integrated to search"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"building-a-search-experience-into-your-plugin",children:"Building a search experience into your plugin"}),"\n",(0,r.jsxs)(t.p,{children:["While the core Search plugin offers components and extensions that empower app\nintegrators to compose a global search experience, you may find that you want a\nnarrower search experience just within your plugin. This could be as literal as\nan autocomplete-style search bar focused on documents provided by your plugin\n(for example, the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/techdocs/src/search/components/TechDocsSearch.tsx",children:"TechDocsSearch"}),"\ncomponent), or as abstract as a widget that presents a list of links that\nare contextually related to something else on the page."]}),"\n",(0,r.jsx)(t.h3,{id:"search-experience-concepts",children:"Search Experience Concepts"}),"\n",(0,r.jsx)(t.p,{children:"Knowing these high-level concepts will help you as you craft your in-plugin\nsearch experience."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["All search experiences must be wrapped in a ",(0,r.jsx)(t.code,{children:"<SearchContextProvider>"}),", which\nis provided by ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-react"}),". This context keeps track\nof state necessary to perform search queries and display any results. As\ninputs to the query are updated (e.g. a ",(0,r.jsx)(t.code,{children:"term"})," or ",(0,r.jsx)(t.code,{children:"filter"})," values), the\nupdated query is executed and ",(0,r.jsx)(t.code,{children:"results"})," are refreshed. Check out the\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/reference/plugin-search-react.searchcontextvalue",children:"SearchContextValue"}),"\nfor details."]}),"\n",(0,r.jsxs)(t.li,{children:["The aforementioned state can be modified and/or consumed via the\n",(0,r.jsx)(t.code,{children:"useSearch()"})," hook, also exported by ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search-react"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["For more literal search experiences, reusable components are available\nto import and compose into a cohesive experience in your plugin (e.g.\n",(0,r.jsx)(t.code,{children:"<SearchBar />"})," or ",(0,r.jsx)(t.code,{children:"<SearchFilter.Checkbox />"}),"). You can see all such\ncomponents in ",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-search-searchbar--default",children:"Backstage's storybook"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"search-experience-tutorials",children:"Search Experience Tutorials"}),"\n",(0,r.jsx)(t.p,{children:"The following tutorials make use of packages and plugins that you may not yet\nhave as dependencies for your plugin; be sure to add them before you use them!"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search-react",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search-react"})})," - A\npackage containing components, hooks, and types that are shared across all\nfrontend plugins, including plugins like yours!"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/plugin-search",children:(0,r.jsx)(t.code,{children:"@backstage/plugin-search"})})," - The\nmain search plugin, used by app integrators to compose global search\nexperiences."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@backstage/core-components",children:(0,r.jsx)(t.code,{children:"@backstage/core-components"})})," - A\npackage containing generic components useful for a variety of experiences\nbuilt in Backstage."]}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"improved-404-page-experience",children:'Improved "404" page experience'}),"\n",(0,r.jsxs)(t.p,{children:["Imagine you have a plugin that allows users to manage ",(0,r.jsx)(t.em,{children:"widgets"}),". Perhaps they\ncan be viewed at a URL like ",(0,r.jsx)(t.code,{children:"backstage.example.biz/widgets/{widgetName}"}),".\nAt some point, a widget is renamed, and links to that widget's page from\nchat systems, wikis, or browser bookmarks become stale, resulting in errors or\n404s."]}),"\n",(0,r.jsx)(t.p,{children:'What if instead of showing a broken page or the generic "looks like someone\ndropped the mic" 404 page, you showed a list of possibly related widgets?'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { Link } from '@backstage/core-components';\nimport { SearchResult } from '@backstage/plugin-search';\nimport { SearchContextProvider } from '@backstage/plugin-search-react';\n\nexport const Widget404Page = ({ widgetName }) => {\n  // Supplying this to <SearchContextProvider> runs a pre-filtered search with\n  // the given widgetName as the search term, focused on search result of type\n  // \"widget\" with no other filters.\n  const preFiltered = {\n    term: widgetName,\n    types: ['widget'],\n    filters: {},\n  };\n\n  return (\n    <SearchContextProvider initialState={preFiltered}>\n      {/* The <SearchResult> component allows us to iterate through results and\n          display them in whatever way fits best! */}\n      <SearchResult>\n        {({ results }) => (\n          {results.map(({ document }) => (\n            <Link to={document.location} key={document.location}>\n              {document.title}\n            </Link>\n          ))}\n        )}\n      <SearchResult>\n    </SearchContextProvider>\n  );\n);\n"})}),"\n",(0,r.jsx)(t.p,{children:"Not all search experiences require user input! As you can see, it's possible to\nleverage the Backstage Search Platform's frontend framework without necessarily\ngiving users input controls."}),"\n",(0,r.jsx)(t.h4,{id:"simple-search-page",children:"Simple search page"}),"\n",(0,r.jsxs)(t.p,{children:["Of course, it's also possible to provide a more fully featured search\nexperience in your plugin. The simplest way is to leverage reusable components\nprovided by the ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search"})," package, like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useProfile } from '@internal/api';\nimport {\n  Content,\n  ContentHeader,\n  PageWithHeader,\n} from '@backstage/core-components';\nimport { SearchBar, SearchResult } from '@backstage/plugin-search';\nimport { SearchContextProvider } from '@backstage/plugin-search-react';\n\nexport const ManageMyWidgets = () => {\n  const { primaryTeam } = useProfile();\n  // In this example, note how we are pre-filtering results down to a specific\n  // owner field value (the currently logged-in user's team), but allowing the\n  // search term to be controlled by the user via the <SearchBar /> component.\n  const preFiltered = {\n    types: ['widget'],\n    term: '',\n    filters: {\n      owner: primaryTeam,\n    },\n  };\n\n  return (\n    <PageWithHeader title=\"Widgets Home\">\n      <Content>\n        <ContentHeader title=\"All your Widgets and More\" />\n        <SearchContextProvider initialState={preFiltered}>\n          <SearchBar />\n          <SearchResult>\n            {/* Render results here, just like above */}\n          </SearchResult>\n        </SearchContextProvider>\n      </Content>\n    </PageWithHeader>\n  );\n};\n"})}),"\n",(0,r.jsx)(t.h4,{id:"custom-search-control-surfaces",children:"Custom search control surfaces"}),"\n",(0,r.jsxs)(t.p,{children:["If the reusable search components provided by ",(0,r.jsx)(t.code,{children:"@backstage/plugin-search"})," aren't\nadequate, no problem! There's an API in place that you can use to author your\nown components to control the various parts of the search context."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import { useSearch } from '@backstage/plugin-search-react';\nimport ChipInput from 'material-ui-chip-input';\n\nexport const CustomChipFilter = ({ name }) => {\n  const { filters, setFilters } = useSearch();\n  const chipValues = filters[name] || [];\n\n  // When a chip value is changed, update the filters value by calling the\n  // setFilters function from the search context.\n  const handleChipChange = (chip, index) => {\n    // There may be filters set for other fields. Be sure to maintain them.\n    setFilters(prevState => {\n      const { [name]: filter = [], ...others } = prevState;\n\n      if (index === undefined) {\n        filter.push(chip);\n      } else {\n        filter.splice(index, 1);\n      }\n\n      return { ...others, [name]: filter };\n    });\n  };\n\n  return (\n    <ChipInput\n      value={chipValues}\n      onAdd={handleChipChange}\n      onDelete={handleChipChange}\n    />\n  );\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Check out the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-react/src/context/SearchContext.tsx",children:"SearchContextValue type"}),"\nfor more details on what methods and values are available for manipulating and\nreading the search context."]}),"\n",(0,r.jsx)(t.p,{children:"If you produce something generic and reusable, consider contributing your\ncomponent upstream so that all users of the Backstage Search Platform can\nbenefit. Issues and pull requests welcome."}),"\n",(0,r.jsx)(t.h4,{id:"custom-search-results",children:"Custom search results"}),"\n",(0,r.jsxs)(t.p,{children:["Search results throughout Backstage are rendered as lists so that list items can easily be customized; although a ",(0,r.jsx)(t.a,{href:"https://backstage.io/storybook/?path=/story/plugins-search-defaultresultlistitem--default",children:"default result list item"})," is available, plugins are in the best position to provide custom result list items that surface relevant information only known to the plugin."]}),"\n",(0,r.jsxs)(t.p,{children:["The example below imagines ",(0,r.jsx)(t.code,{children:"YourCustomSearchResult"})," as a type of search result that contains associated ",(0,r.jsx)(t.code,{children:"tags"})," which could be rendered as chips below the title/text."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Link } from '@backstage/core-components';\nimport { useAnalytics } from '@backstage/core-plugin-api';\nimport { ResultHighlight } from '@backstage/plugin-search-common';\nimport { HighlightedSearchResultText } from '@backstage/plugin-search-react';\n\ntype CustomSearchResultListItemProps = {\n  result: YourCustomSearchResult;\n  rank?: number;\n  highlight?: ResultHighlight;\n};\n\nexport const CustomSearchResultListItem = (\n  props: CustomSearchResultListItemProps,\n) => {\n  const { title, text, location, tags } = props.result;\n\n  const analytics = useAnalytics();\n  const handleClick = () => {\n    analytics.captureEvent('discover', title, {\n      attributes: { to: location },\n      value: props.rank,\n    });\n  };\n\n  return (\n    <Link noTrack to={location} onClick={handleClick}>\n      <ListItem alignItems=\"center\">\n        <Box flexWrap=\"wrap\">\n          <ListItemText\n            primaryTypographyProps={{ variant: 'h6' }}\n            primary={\n              highlight?.fields?.title ? (\n                <HighlightedSearchResultText\n                  text={highlight.fields.title}\n                  preTag={highlight.preTag}\n                  postTag={highlight.postTag}\n                />\n              ) : (\n                title\n              )\n            }\n            secondary={\n              highlight?.fields?.text ? (\n                <HighlightedSearchResultText\n                  text={highlight.fields.text}\n                  preTag={highlight.preTag}\n                  postTag={highlight.postTag}\n                />\n              ) : (\n                text\n              )\n            }\n          />\n          {tags &&\n            tags.map((tag: string) => (\n              <Chip key={tag} label={`Tag: ${tag}`} size=\"small\" />\n            ))}\n        </Box>\n      </ListItem>\n      <Divider />\n    </Link>\n  );\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The optional use of the ",(0,r.jsx)(t.code,{children:"<HighlightedSearchResultText>"})," component makes it possible to highlight relevant parts of the result based on the user's search query."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note on Analytics"}),": In order for app integrators to track and improve search experiences across Backstage, it's important for them to understand when and what users search for, as well as what they click on after searching. When providing a custom result component, it's your responsibility as a plugin developer to instrument it according to search analytics conventions. In particular:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You must use the ",(0,r.jsx)(t.code,{children:"analytics.captureEvent"})," method, from the ",(0,r.jsx)(t.code,{children:"useAnalytics()"})," hook (detailed ",(0,r.jsx)(t.a,{href:"/docs/plugins/analytics",children:"plugin analytics docs are here"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["You must ensure that the action of the event, representing a click on a search result item, is ",(0,r.jsx)(t.code,{children:"discover"}),", and the subject is the ",(0,r.jsx)(t.code,{children:"title"})," of the clicked result. In addition, the ",(0,r.jsx)(t.code,{children:"to"})," attribute should be set to the result's ",(0,r.jsx)(t.code,{children:"location"}),", and the ",(0,r.jsx)(t.code,{children:"value"})," of the event must be set to the ",(0,r.jsx)(t.code,{children:"rank"})," (passed in as a prop)."]}),"\n",(0,r.jsxs)(t.li,{children:["You must ensure that the aforementioned ",(0,r.jsx)(t.code,{children:"captureEvent"})," method is called when a user clicks the link; you should further ensure that the ",(0,r.jsx)(t.code,{children:"noTrack"})," prop is added to the link (which disables default link click tracking, in favor of this custom instrumentation)."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For other examples and inspiration on custom result list items, check out the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/c981e83/plugins/stack-overflow/src/search/StackOverflowSearchResultListItem/StackOverflowSearchResultListItem.tsx",children:(0,r.jsx)(t.code,{children:"<StackOverflowSearchResultListItem>"})})," or ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/c981e83/plugins/catalog/src/components/CatalogSearchResultListItem/CatalogSearchResultListItem.tsx",children:(0,r.jsx)(t.code,{children:"<CatalogSearchResultListItem>"})})," components."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,o={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:l,ref:u,props:o,_owner:i.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function x(){}function b(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var k=b.prototype=new x;k.constructor=b,f(k,y.prototype),k.isPureReactComponent=!0;var v=Array.isArray,j=Object.prototype.hasOwnProperty,w={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)j.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var c=arguments.length-2;if(1===c)o.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===o[a]&&(o[a]=c[a]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var R=/\/+/g;function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,a,o,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return s=s(c=e),e=""===o?"."+I(c,0):o,v(s)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),T(s,t,a,"",(function(e){return e}))):null!=s&&(_(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,a+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(R,"$&/")+"/")+e)),t.push(s)),1;if(c=0,o=""===o?".":o+":",v(e))for(var l=0;l<e.length;l++){var u=o+I(i=e[l],l);c+=T(i,t,a,u,s)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=T(i=i.value,t,a,u=o+I(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function F(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function q(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var P={current:null},E={transition:null},O={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:E,ReactCurrentOwner:w};t.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=s,t.PureComponent=b,t.StrictMode=o,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=f({},e.props),o=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!S.hasOwnProperty(l)&&(a[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:n,type:e.type,key:o,ref:s,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:q}},t.memo=function(e,t){return{$$typeof:h,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=E.transition;E.transition={};try{e()}finally{E.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return P.current.useCallback(e,t)},t.useContext=function(e){return P.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return P.current.useDeferredValue(e)},t.useEffect=function(e,t){return P.current.useEffect(e,t)},t.useId=function(){return P.current.useId()},t.useImperativeHandle=function(e,t,n){return P.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return P.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return P.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return P.current.useMemo(e,t)},t.useReducer=function(e,t,n){return P.current.useReducer(e,t,n)},t.useRef=function(e){return P.current.useRef(e)},t.useState=function(e){return P.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return P.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return P.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>o});var r=n(667294);const a=r.createContext({});function o(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||s:o(e),r.createElement(a.Provider,{value:i},t)}}}]);